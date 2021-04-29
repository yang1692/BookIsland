package com.bookisland.BookIsland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.Author;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.AuthorService;
@RestController
@RequestMapping("/authors")
public class AuthorController {
	@Autowired
	private AuthorService authorService;
	@GetMapping("/{name}")
	public Author getByName(@PathVariable String name) {
		System.out.println(name);
		return authorService.getByName(name);
	}
	@PutMapping
	public Response addOrUpdateAuthor(@RequestBody Author author, Authentication authentication) {
		return authorService.addAuthor(author, authentication);
	}
}
