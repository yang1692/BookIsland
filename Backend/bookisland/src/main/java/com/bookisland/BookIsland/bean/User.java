package com.bookisland.BookIsland.bean;

import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="ISLAND_USER")
public class User implements UserDetails, GrantedAuthority{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@SequenceGenerator(name = "user_seq_gen", sequenceName = "USER_SEQ", allocationSize = 1)
	@GeneratedValue(generator="user_seq_gen", strategy = GenerationType.AUTO)
	@Column(name="ID")
	private int id;
	@Column(name = "email")
	private String username;
	@Column
	private String password;
	@Column
	private String role;
	@Column
	private String phone;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
	private Set<Address> addresses;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
	private Set<ShoppingCartDetail> shoppingCart;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
	private Set<Order> orders;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "user")
	private Set<RentOrder> rentOrders;
	
	public User(int id, String username, String password, String role, String email, String phone,
			Set<Address> addresses, Set<ShoppingCartDetail> shoppingCart, Set<Order> orders,
			Set<RentOrder> rentOrders) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.phone = phone;
		this.addresses = addresses;
		this.shoppingCart = shoppingCart;
		this.orders = orders;
		this.rentOrders = rentOrders;
	}
	public User() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Set<Address> getAddresses() {
		return addresses;
	}
	public void setAddresses(Set<Address> addresses) {
		this.addresses = addresses;
	}
	public Set<ShoppingCartDetail> getShoppingCart() {
		return shoppingCart;
	}
	public void setShoppingCart(Set<ShoppingCartDetail> shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	public Set<Order> getOrders() {
		return orders;
	}
	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}
	public Set<RentOrder> getRentOrders() {
		return rentOrders;
	}
	public void setRentOrders(Set<RentOrder> rentOrders) {
		this.rentOrders = rentOrders;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		/*
		 * List<User> list = new ArrayList<>(); list.add(this); return list;
		 */
		return null;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return null;
	}
}
