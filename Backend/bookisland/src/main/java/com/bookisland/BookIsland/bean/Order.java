package com.bookisland.BookIsland.bean;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ISLAND_ORDER")
public class Order {
	@Id
	@SequenceGenerator(name = "book_island_order_seq_gen", sequenceName = "ORDER_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_order_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
	private User user;
	@Column
	private int status;
	@Column
	private Date order_date;
	@Column
	private String name;
	@Column
	private String phone;
	@Column
	private String zip;
	@Column
	private String state;
	@Column
	private String address;
	@Column
	private float subtotal;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE, mappedBy="order")
	private Set<OrderDetail> purchases;
	public Order() {
		super();
	}

	
	public Order(int id, User user, int status, Date order_date, String name, String phone, String zip, String state,
			String address, float subtotal, Set<OrderDetail> purchases) {
		super();
		this.id = id;
		this.user = user;
		this.status = status;
		this.order_date = order_date;
		this.name = name;
		this.phone = phone;
		this.zip = zip;
		this.state = state;
		this.address = address;
		this.subtotal = subtotal;
		this.purchases = purchases;
	}


	public float getSubtotal() {
		return subtotal;
	}


	public void setSubtotal(float subtotal) {
		this.subtotal = subtotal;
	}


	public Date getOrder_date() {
		return order_date;
	}
	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getPurchase_date() {
		return order_date;
	}
	public void setPurchase_date(Date purchase_date) {
		this.order_date = purchase_date;
	}
	public Set<OrderDetail> getPurchases() {
		return purchases;
	}
	public void setPurchases(Set<OrderDetail> purchases) {
		this.purchases = purchases;
	}
	
}
