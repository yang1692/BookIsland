package com.bookisland.BookIsland.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.UserDao;



@Service
public class UserServiceImpl implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User u = userDao.findByUsername(username);

		if (u == null) {
			throw new UsernameNotFoundException("User < " + username + " > not found!");
		}

		return u;
	}

}

