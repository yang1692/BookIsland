package com.bookisland.BookIsland.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="REVIEW")
public class Review {
	@Id
	@SequenceGenerator(name = "book_island_review_seq_gen", sequenceName = "REVIEW_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_review_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String username;
	@Column
	private int book_id;
	@Column
	private String review;
	@Column
	private float rate;
	@Column
	private Date review_date;
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Review(int id, String username, int book_id, String review, float rate, Date review_date) {
		super();
		this.id = id;
		this.username = username;
		this.book_id = book_id;
		this.review = review;
		this.rate = rate;
		this.review_date = review_date;
	}
	public Date getReview_date() {
		return review_date;
	}
	public void setReview_date(Date review_date) {
		this.review_date = review_date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getBook_id() {
		return book_id;
	}
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public float getRate() {
		return rate;
	}
	public void setRate(float rate) {
		this.rate = rate;
	}
	
}
