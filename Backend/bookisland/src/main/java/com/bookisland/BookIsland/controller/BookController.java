package com.bookisland.BookIsland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.Book;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.BookService;

@RestController
@RequestMapping("/books")
public class BookController {
	@Autowired
	private BookService bookService;
	@PostMapping
	public Response addBook(@RequestBody Book book) {
		return bookService.register(book);
	}
	@GetMapping
	public List<Book> getAll(){
		return bookService.getAll();
	}
	@GetMapping("/{id}")
	public Book getById(@PathVariable int id) {
		return bookService.getById(id);
	}
	@PutMapping
	public Response addOrUpdateBook(@RequestBody Book book, Authentication authentication) {
		return bookService.addBook(book, authentication);
	}

}
