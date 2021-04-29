package com.bookisland.BookIsland.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookisland.BookIsland.bean.Book;

public interface BookDao extends JpaRepository<Book, Integer> {

}
