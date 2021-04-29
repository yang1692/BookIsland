package com.bookisland.BookIsland.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.bookisland.BookIsland.bean.OrderDetail;
import com.bookisland.BookIsland.dao.OrderDetailDao;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class OrderDetailService {
	@Autowired
	private OrderDetailDao orderDetailDao;
	@Autowired
	private UserDao userDao;
	public List<OrderDetail> getAll(){
		return orderDetailDao.findAll();
	}
	public OrderDetail getById(@PathVariable int id) {
		return orderDetailDao.findById(id).get();
	}
	public Response makeReviewed(int id) {
		Optional<OrderDetail> orderDetail = orderDetailDao.findById(id);
		if(orderDetail.isPresent()) {
			orderDetail.get().setReviewed(1);
			orderDetailDao.save(orderDetail.get());
			return new Response(true);
		}
		return new Response(false);
	}
}
