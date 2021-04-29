package com.bookisland.BookIsland.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.AuthService;



@RestController
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	@GetMapping("/checklogin")
	public Response checklogin(Authentication authentication) {
		return authService.checklogin(authentication);
	}
	@GetMapping("/testFoo")
	public int testFoo(String s) {
		System.out.println(s);
		return 222;
	}
	
	@GetMapping("/testReqResp")
	public int testReqResp(HttpServletRequest req, HttpServletResponse resp, Authentication authentication) {
		System.out.println(req);
		System.out.println(resp);
		System.out.println(authentication);
		return 123;
	}
}
