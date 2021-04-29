package com.bookisland.BookIsland.bean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="USER_ADDRESS")
public class Address {
	@Id
	@SequenceGenerator(name = "book_island_address_seq_gen", sequenceName = "ADDRESS_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_address_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String receiver_name;
	@Column 
	private String phone;
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
	private User user;
	@Column
	private String zip;
	@Column
	private String state;
	@Column 
	private String address;
	
	public Address(int id, String receiver_name, String phone, User user, String zip, String state, String address) {
		super();
		this.id = id;
		this.receiver_name = receiver_name;
		this.phone = phone;
		this.user = user;
		this.zip = zip;
		this.state = state;
		this.address = address;
	}
	public Address() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getReceiver_name() {
		return receiver_name;
	}
	public void setReceiver_name(String receiver_name) {
		this.receiver_name = receiver_name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@JsonIgnore
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}
