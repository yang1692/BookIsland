package com.bookisland.BookIsland.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.bookisland.BookIsland.bean.ShoppingCartDetail;
import com.bookisland.BookIsland.bean.User;
import com.bookisland.BookIsland.dao.ShoppingCartDetailDao;
import com.bookisland.BookIsland.dao.UserDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class ShoppingCartDetailService {
	@Autowired
	private ShoppingCartDetailDao shoppingCartDetailDao;
	@Autowired
	private UserDao userDao;
	public List<ShoppingCartDetail> getAll(){
		return shoppingCartDetailDao.findAll();
	}
	public ShoppingCartDetail getById(int id) {
		return shoppingCartDetailDao.findById(id).get();
	}
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.NESTED)
	public Response update(List<ShoppingCartDetail> shoppingCartDetails, Authentication authentication) {
		for(ShoppingCartDetail shoppingCartDetail : shoppingCartDetails) {
			if(shoppingCartDetail.getId() == -1 && shoppingCartDetail.getQuantity() > 0) {
				User u = userDao.findByUsername(authentication.getName());
				shoppingCartDetail.setId(0);
				shoppingCartDetail.setUser(u);
				shoppingCartDetailDao.save(shoppingCartDetail);
				return new Response(true);
			}
			else if(shoppingCartDetail.getQuantity() == 0) {
				shoppingCartDetailDao.delete(shoppingCartDetail.getId());
				//u.getShoppingCart().removeIf( c -> c.getId() == shoppingCartDetail.getId());
				//userDao.save(u);
			}
			else {
				Optional<ShoppingCartDetail> s = shoppingCartDetailDao.findById(shoppingCartDetail.getId());
				s.get().setQuantity(shoppingCartDetail.getQuantity());
				s.get().setChecked(shoppingCartDetail.getChecked());
				shoppingCartDetailDao.save(s.get());
			}
				
		}
		return new Response(true);
	}
}
