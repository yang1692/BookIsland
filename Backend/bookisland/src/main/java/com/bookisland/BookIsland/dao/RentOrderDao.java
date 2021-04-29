package com.bookisland.BookIsland.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookisland.BookIsland.bean.RentOrder;

public interface RentOrderDao extends JpaRepository<RentOrder, Integer>{

}
