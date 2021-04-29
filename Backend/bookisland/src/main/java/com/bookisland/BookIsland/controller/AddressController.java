package com.bookisland.BookIsland.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.Address;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.AddressService;

@RestController
@RequestMapping("/addresses")
public class AddressController {
	@Autowired
	private AddressService addressService;
	@GetMapping
	public Set<Address> getAll(Authentication authentication){
		return addressService.getAll(authentication);
	}
	@GetMapping("/{id}")
	public Address getAddressById(@PathVariable int id) {
		return addressService.getById(id);
	}
	@PostMapping
	public Response addAddress(@RequestBody Address address, Authentication authentication) {
		return addressService.addAddress(address,authentication);
	}
	
	@PutMapping
	public Response changeAddress(@RequestBody Address address, Authentication authentication) {
		return addressService.updateAddress(address, authentication);
	}
	
	@DeleteMapping("/{id}")
	public Response deleteAddress(@PathVariable int id) {
		return addressService.deleteAddress(id);
	}
}
