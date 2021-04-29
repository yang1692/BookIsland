package com.bookisland.BookIsland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.ShoppingCartDetail;
import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.ShoppingCartDetailService;
import com.bookisland.BookIsland.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private ShoppingCartDetailService shoppingCartDetailService;
	@GetMapping
	public List<User> getAll(){
		return userService.getAll();
	}

	@PostMapping("/checkUsername") 
	public Response checkUsername(@RequestBody User user) {
		return userService.checkUsername(user);
	}
	@PostMapping
	public Response addUser(@RequestBody User user) {
		return userService.register(user);
	}
	@PutMapping("/updateShoppingCart")
	public Response updateCart(@RequestBody List<ShoppingCartDetail> shoppingCartDetails, Authentication authentication) {
		return shoppingCartDetailService.update(shoppingCartDetails, authentication);
	}
	@PutMapping
	public Response changeUser(@RequestBody User user, Authentication authentication) {
		return userService.changePassword(user, authentication);
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{id}")
	public Response deleteUser(@PathVariable int id) {
		return userService.deleteUser(id);
	}
}
