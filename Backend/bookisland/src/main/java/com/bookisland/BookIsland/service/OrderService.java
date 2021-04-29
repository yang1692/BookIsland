package com.bookisland.BookIsland.service;

import java.util.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.bookisland.BookIsland.bean.Address;
import com.bookisland.BookIsland.bean.Book;
import com.bookisland.BookIsland.bean.Order;
import com.bookisland.BookIsland.bean.OrderDetail;
import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.AddressDao;
import com.bookisland.BookIsland.dao.BookDao;
import com.bookisland.BookIsland.dao.OrderDao;
import com.bookisland.BookIsland.dao.OrderDetailDao;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class OrderService {
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private OrderDetailDao orderDetailDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private AddressDao addressDao;
	@Autowired
	private BookDao bookDao;
	public List<Order> getAll(){
		return orderDao.findAll();
	}
	public Order getById(int id) {
		return orderDao.findById(id).get();
	}
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.NESTED)
	public Response addOrder(List<OrderDetail> orderDetails, Authentication authentication) {
		User u = userDao.findByUsername(authentication.getName());
		OrderDetail addressInfo = orderDetails.remove(0);
		Optional<Address> a = addressDao.findById(addressInfo.getId());
		if(!a.isPresent()) return new Response(false,"Invalid Adddress ID");
		Date now = java.sql.Timestamp.valueOf(LocalDateTime.now());
		Order order = 
				new Order(0,u,0,now,a.get().getReceiver_name() , a.get().getPhone(), a.get().getZip(), a.get().getState(), a.get().getAddress(),addressInfo.getBook().getSale_price(), null);
		order.setPurchases(new HashSet<OrderDetail>(orderDetails));
		orderDao.save(order);
		for(OrderDetail orderDetail : orderDetails) {
			orderDetail.setOrder(order);
			orderDetailDao.save(orderDetail);
			Optional<Book> b = bookDao.findById(orderDetail.getBook().getId());
			if(!b.isPresent()) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
				return new Response(false, "Book is not available!");
			}
			int newInStock = b.get().getSales_in_stock() - orderDetail.getQuantity();
			if(newInStock < 0) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
				return new Response(false, "Not enough books in stock!");
			}
			b.get().setSales_in_stock(newInStock);
			b.get().setSales(b.get().getSales() + orderDetail.getQuantity());
			bookDao.save(b.get());
		}
		return new Response(true);
	}
	public Response modifyOrder(int id, Authentication authentication, int status) {
		if(status == 0) {
			User u = userDao.findByUsername(authentication.getName());
			if(!u.getRole().equals("ROLE_ADMIN")) {
				return new Response(false);
			}
		}
		Optional<Order> o = orderDao.findById(id);
		if(!o.isPresent())
			return new Response(false);
		o.get().setStatus(status);
		orderDao.save(o.get());
		return new Response(true);
	}
	public Set<Order> getUndeliveredOrders(Authentication authentication) {
		User u = userDao.findByUsername(authentication.getName());
		if(!u.getRole().equals("ROLE_ADMIN")) {
			return null;
		}
		return orderDao.findAllByStatus(0);
	}
}
