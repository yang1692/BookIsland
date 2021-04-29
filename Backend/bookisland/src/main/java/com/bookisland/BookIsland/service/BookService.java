package com.bookisland.BookIsland.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.bookisland.BookIsland.bean.Book;
import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.BookDao;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class BookService {
	@Autowired
	private BookDao bookDao;
	@Autowired
	private UserDao userDao;
	public List<Book> getAll(){
		return bookDao.findAll();
	}
	public Book getById(int id) {
		Optional<Book> b = bookDao.findById(id);
		return b.isPresent() ? b.get() : null;
	}
	public Response register(Book book) {
		bookDao.save(book);
		return new Response(true);
	}
	public Response addBook(Book book, Authentication authentication) {
		System.out.println(authentication);
		User u = userDao.findByUsername(authentication.getName());
		if(!u.getRole().equals("ROLE_ADMIN")) {
			return new Response(false,"Not Authurized!");
		}
		if(book.getId() == -1) {
			bookDao.save(book);
			return new Response(true);
		}
		Optional<Book> b = bookDao.findById(book.getId());
		if(!b.isPresent())
			return new Response(false);
		b.get().copyInfoFrom(book);
		bookDao.save(b.get());
		return new Response(true);
	}
	
}
