package com.bookisland.BookIsland.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.Order;
import com.bookisland.BookIsland.bean.OrderDetail;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	private OrderService orderService;
	@PostMapping
	public Response addOrder(@RequestBody List<OrderDetail> orderDetails, Authentication authentication) {
		return orderService.addOrder(orderDetails, authentication);
	}
	@GetMapping("/{id}")
	public Order getById(@PathVariable int id) {
		return orderService.getById(id);
	}
	@GetMapping("/admin")
	public Set<Order> getUndeliveredOrders(Authentication authentication) {
		return orderService.getUndeliveredOrders(authentication);
	}
	@PutMapping("/cancel/{id}")
	public Response cancelOrder(@PathVariable int id, Authentication authentication) {
		return orderService.modifyOrder(id, authentication, 1);
	}
	@PutMapping("/delivered/{id}")
	public Response deliveredOrder(@PathVariable int id, Authentication authentication) {
		return orderService.modifyOrder(id, authentication, 2);
	}
}