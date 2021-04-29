package com.bookisland.BookIsland.service;

import java.time.LocalDateTime;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.bookisland.BookIsland.bean.Review;
import com.bookisland.BookIsland.dao.ReviewDao;
import com.bookisland.BookIsland.http.Response;

@Service
public class ReviewService {
	@Autowired
	private ReviewDao reviewDao;
	public Set<Review> getByBookID(int book_id){
		return reviewDao.findByBook_id(book_id);
	}
	
	public  Response addReview(Review review, Authentication authentication) {
		review.setReview_date(java.sql.Timestamp.valueOf(LocalDateTime.now()));
		reviewDao.save(review);
		return new Response(true);
	}
}
