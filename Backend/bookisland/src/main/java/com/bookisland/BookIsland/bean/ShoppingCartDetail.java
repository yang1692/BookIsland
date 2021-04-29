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
@Table(name="shopping_cart_detail")
public class ShoppingCartDetail {
	@Id
	@SequenceGenerator(name = "book_island_shopping_cart_detail_seq_gen", sequenceName = "SHOPPING_CART_DETAIL_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_shopping_cart_detail_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private User user;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private Book book;
	@Column
	private int quantity;
	@Column
	private int checked;
	public ShoppingCartDetail() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ShoppingCartDetail(int id, User user, Book book, int quantity, int checked) {
		super();
		this.id = id;
		this.user = user;
		this.book = book;
		this.quantity = quantity;
		this.checked = checked;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getChecked() {
		return checked;
	}
	public void setChecked(int checked) {
		this.checked = checked;
	}
	@JsonIgnore
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
