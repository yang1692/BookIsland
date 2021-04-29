package com.bookisland.BookIsland.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bookisland.BookIsland.bean.ShoppingCartDetail;

public interface ShoppingCartDetailDao extends JpaRepository<ShoppingCartDetail, Integer> {
	@Modifying
	@Query("delete from ShoppingCartDetail s where s.id = ?1")
	void delete(Integer entityId);
}
