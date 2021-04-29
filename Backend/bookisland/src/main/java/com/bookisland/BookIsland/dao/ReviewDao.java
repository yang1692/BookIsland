package com.bookisland.BookIsland.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bookisland.BookIsland.bean.Review;

public interface ReviewDao extends JpaRepository<Review, Integer> {
	@Modifying
	@Query("select review from Review review where review.book_id = ?1 and review.review is not null")
	public Set<Review> findByBook_id(int book_id);
}
