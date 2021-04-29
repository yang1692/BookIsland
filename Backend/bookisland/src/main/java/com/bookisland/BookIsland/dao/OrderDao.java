package com.bookisland.BookIsland.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookisland.BookIsland.bean.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {
	public Set<Order> findAllByStatus(int status);
}
