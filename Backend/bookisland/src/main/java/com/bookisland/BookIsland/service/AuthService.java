package com.bookisland.BookIsland.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.AuthenticationSuccessResponse;
import com.bookisland.BookIsland.http.Response;


@Service
public class AuthService {
	
	@Autowired
	private UserDao userDao;
	public Response checklogin(Authentication authentication) {
		if (authentication != null) {
			Response response = new AuthenticationSuccessResponse(true, 200, "Logged In!", userDao.findByUsername(authentication.getName()));
			return response;
		} else {
			return new Response(false);
		}
	}

}
