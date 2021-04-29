package com.bookisland.BookIsland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.ShoppingCartDetail;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.ShoppingCartDetailService;

@RestController
@RequestMapping("/shoppingCartDetails")
public class ShoppingCartDetailController {
	@Autowired
	private ShoppingCartDetailService shoppingCartDetailService;
	@GetMapping
	public Response test(Authentication authentication) {
		return new Response(true);
	}
	@PutMapping
	public Response updateCart(@RequestBody List<ShoppingCartDetail> shoppingCartDetails, Authentication authentication) {
		return shoppingCartDetailService.update(shoppingCartDetails, authentication);
	}
}
