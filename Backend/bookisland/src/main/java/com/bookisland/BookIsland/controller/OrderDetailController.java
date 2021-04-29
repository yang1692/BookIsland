package com.bookisland.BookIsland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.OrderDetail;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.OrderDetailService;



@RestController
@RequestMapping("/orderDetails")
public class OrderDetailController {
	@Autowired
	public OrderDetailService orderDetailService;
	@GetMapping("/{id}")
	public OrderDetail getById(@PathVariable int id) {
		return orderDetailService.getById(id);
	}
	@PutMapping("/{id}")
	public Response makeReviewed(@PathVariable int id) {
		return orderDetailService.makeReviewed(id);
	}
}
