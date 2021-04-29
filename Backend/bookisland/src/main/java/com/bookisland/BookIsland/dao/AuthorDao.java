package com.bookisland.BookIsland.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookisland.BookIsland.bean.Author;

public interface AuthorDao extends JpaRepository<Author, Integer> {
	public Author findByName(String name);

}
