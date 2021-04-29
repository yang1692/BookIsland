package com.bookisland.BookIsland.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bookisland.BookIsland.bean.OrderDetail;

public interface OrderDetailDao extends JpaRepository<OrderDetail, Integer> {
	@Modifying
	@Query("SELECT orderDetail from OrderDetail orderDetail where orderDetail.book.id = :id")
	public List<OrderDetail> findAllByBookID(int id);
}
