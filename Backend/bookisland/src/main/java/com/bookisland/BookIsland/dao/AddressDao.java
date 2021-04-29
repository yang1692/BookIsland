package com.bookisland.BookIsland.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bookisland.BookIsland.bean.Address;

public interface AddressDao extends JpaRepository<Address, Integer> {
	@Modifying
	@Query("delete from Address a where a.id = ?1")
	void delete(Integer entityId);
}
