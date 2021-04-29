package com.bookisland.BookIsland.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.bookisland.BookIsland.bean.Address;
import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.AddressDao;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class AddressService {
	@Autowired
	private AddressDao addressDao;
	@Autowired
	private UserDao userDao;
	public Set<Address> getAll(Authentication authentication){
		User u = userDao.findByUsername(authentication.getName());
		return u.getAddresses();
	}
	public Address getById(Integer id) {
		return addressDao.findById(id).get();
	}
	public Response addAddress(Address address, Authentication authentication) {
		address.setUser(userDao.findByUsername(authentication.getName()));
		addressDao.save(address);
		return new Response(true);
	}
	public Response updateAddress(Address address, Authentication authentication) {
		Optional<Address> a = addressDao.findById(address.getId());
		System.out.println(authentication);
		if(!a.isPresent() || !a.get().getUser().getUsername().equals(authentication.getName())) 
			return new Response(false);
		a.get().setAddress(address.getAddress());
		a.get().setPhone(address.getPhone());
		a.get().setReceiver_name(address.getReceiver_name());
		a.get().setState(address.getState());
		a.get().setZip(address.getZip());
		addressDao.save(a.get());
		return new Response(true);
	}
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.NESTED)
	public Response deleteAddress(int id) {
		Optional<Address> a = addressDao.findById(id);
		if(a.isPresent()) {
			addressDao.delete(id);
			return new Response(true);
		}else {
			return new Response(false, "Address is not found!");
		}
	}
}
