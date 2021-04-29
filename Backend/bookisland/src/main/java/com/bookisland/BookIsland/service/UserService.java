package com.bookisland.BookIsland.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;


@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<User> getAll() {
		return userDao.findAll();
	}
	public Response checkUsername(User user) {
		user = userDao.findByUsername(user.getUsername());
		return user == null? new Response(true) : new Response(false);
	}
	public Response register(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRole("ROLE_USER");
		userDao.save(user);
		return new Response(true);
	}
	public User getById(Integer id) {
		return userDao.findById(id).get();
	}
	public User getByUsername(String username) {
		return userDao.findByUsername(username);
	}
	public Response changePassword(User user, Authentication authentication) {
		if(user.getUsername().equals(authentication.getName()) || isAdmin(authentication.getAuthorities())) {
			Optional<User> u = userDao.findById(user.getId());
			u.get().setPassword(passwordEncoder.encode(user.getPassword()));
			userDao.save(u.get());
		}else {
			return new Response(false);
		}
		return new Response(true);
	}
	
	public boolean isAdmin(Collection<? extends GrantedAuthority> profiles) {
		boolean isAdmin = false;
		for(GrantedAuthority profle: profiles) {
			if(profle.getAuthority().equals("ROLE_ADMIN")) {
				isAdmin = true;
			}
		};
		return isAdmin;
	}
	
	public Response deleteUser(int id) {
		if(userDao.findById(id).get() != null) {
			userDao.deleteById(id);
			return new Response(true);
		}else {
			return new Response(false, "User is not found!");
		}
	}
}