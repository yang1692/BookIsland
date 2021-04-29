package com.bookisland.BookIsland.bean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ORDER_DETAIL")
public class OrderDetail {
	@Id
	@SequenceGenerator(name = "book_island_order_detail_seq_gen", sequenceName = "ORDER_DETAIL_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_order_detail_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private Order order;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private Book book;
	@Column
	private int quantity;
	@Column
	private int reviewed;
	public OrderDetail() {
		super();
	}
	
	public OrderDetail(int id, Order order, Book book, int quantity, int reviewed) {
		super();
		this.id = id;
		this.order = order;
		this.book = book;
		this.quantity = quantity;
		this.reviewed = reviewed;
	}

	public int getReviewed() {
		return reviewed;
	}

	public void setReviewed(int reviewed) {
		this.reviewed = reviewed;
	}

	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@JsonIgnore
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
}
