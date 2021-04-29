package com.bookisland.BookIsland.security.handler;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.AuthService;
import com.fasterxml.jackson.databind.ObjectMapper;


@Component
public class AuthenticationSuccessHandlerImpl extends SimpleUrlAuthenticationSuccessHandler {

	@Autowired
	private AuthService authService;

	private static final ObjectMapper mapper = new ObjectMapper();

	public Response checklogin(Authentication authentication) {
		return authService.checklogin(authentication);
	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
//		SecurityUtils.sendResponse(response, HttpServletResponse.SC_OK, "Login successfully.", null);
		response.setContentType("application/json;charset=UTF-8");
		PrintWriter writer = response.getWriter();
		writer.write(mapper.writeValueAsString(checklogin(authentication)));
		response.setStatus(HttpServletResponse.SC_OK);
		writer.flush();
		writer.close();
	}
	
}
