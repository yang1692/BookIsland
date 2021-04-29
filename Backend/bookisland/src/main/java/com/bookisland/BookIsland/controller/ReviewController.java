package com.bookisland.BookIsland.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookisland.BookIsland.bean.Review;
import com.bookisland.BookIsland.http.Response;
import com.bookisland.BookIsland.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired
	private ReviewService reviewService;
	@GetMapping("/{book_id}")
	public Set<Review> getReviews(@PathVariable int book_id){
		System.out.println(book_id);
		return reviewService.getByBookID(book_id);
	}
	@PutMapping
	public Response addReview(@RequestBody Review review, Authentication authentication) {
		return reviewService.addReview(review, authentication);
	}
}
