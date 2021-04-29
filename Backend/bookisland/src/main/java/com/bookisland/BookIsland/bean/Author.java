package com.bookisland.BookIsland.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="author")
public class Author {
	@Id
	@SequenceGenerator(name = "book_island_author_seq_gen", sequenceName = "AUTHOR_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_author_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String name;
	@Column 
	private String image;
	@Column
	private String country;
	@Column
	private String description;
	public Author() {
		super();
	}
	
	public Author(int id, String name, String image, String country, String description, List<Book> books) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.country = country;
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void copyInfoFrom(Author au) {
		this.country = au.getCountry();
		this.name = au.getName();
		this.image = au.getImage();
		this.description = au.getDescription();
	}
	
}
