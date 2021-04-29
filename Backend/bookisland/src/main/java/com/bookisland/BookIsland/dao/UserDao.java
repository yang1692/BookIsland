package com.bookisland.BookIsland.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookisland.BookIsland.bean.User;

public interface UserDao extends JpaRepository<User, Integer> {
	User findByUsername(String username);
}
