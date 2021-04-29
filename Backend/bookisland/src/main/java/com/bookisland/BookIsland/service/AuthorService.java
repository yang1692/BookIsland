package com.bookisland.BookIsland.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.bookisland.BookIsland.bean.Author;
import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.AuthorDao;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class AuthorService {
	@Autowired
	private AuthorDao authorDao;
	@Autowired
	private UserDao userDao;
	public List<Author> getAll() {
		return authorDao.findAll();
	}
	public Author getByName(String name) {
		return authorDao.findByName(name);
	}
	public Response addAuthor(Author author, Authentication authentication) {
		User u = userDao.findByUsername(authentication.getName());
		if(!u.getRole().equals("ROLE_ADMIN")) {
			return new Response(false,"Not Authurized!");
		}
		if(author.getId() == -1) {
			authorDao.save(author);
			return new Response(true);
		}
		Optional<Author> au = authorDao.findById(author.getId());
		if(!au.isPresent())
			return new Response(false);
		au.get().copyInfoFrom(author);
		authorDao.save(au.get());
		return new Response(true);
	}
}
