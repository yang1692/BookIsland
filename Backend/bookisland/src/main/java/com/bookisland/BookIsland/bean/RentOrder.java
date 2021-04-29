package com.bookisland.BookIsland.bean;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="RENT_ORDER")
public class RentOrder {
	@Id
	@SequenceGenerator(name = "book_island_rent_order_seq_gen", sequenceName = "RENT_ORDER_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_rent_order_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private User user;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private Book book;
	@Column
	private int status;
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	@Column
	private Date due_date;
	public RentOrder() {
		super();
	}
	public RentOrder(int id, User user, int status, Date due_date) {
		super();
		this.id = id;
		this.user = user;
		this.status = status;
		this.due_date = due_date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@JsonIgnore
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Date getDue_date() {
		return due_date;
	}
	public void setDue_date(Date due_date) {
		this.due_date = due_date;
	}
	
}
