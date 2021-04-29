package com.bookisland.BookIsland.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="book")
public class Book {

	@Id
	@SequenceGenerator(name = "book_island_book_seq_gen", sequenceName = "BOOK_SEQ", allocationSize = 1)
	@GeneratedValue(generator="book_island_book_seq_gen", strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String name;
	@Column
	private String image;
	@Column
	private float sale_price;
	@Column
	private float rent_price;
	@Column
	private String language;
	@Column
	private String publisher;
	@Column
	private String author;
	@Column
	private int sales;
	@Column
	private String type;
	@Column
	private String isbn;
	@Column
	private float weight;
	@Column
	private int sales_in_stock;
	@Column
	private int rent_in_stock;
	@Column
	private float height;
	@Column
	private float width;
	@Column
	private float length;

	public Book(int id, String name, String image, float sale_price, float rent_price, String language,
			String publisher, int author_id, int sales, String type, String isbn, int sales_in_stock, int rent_in_stock,
			float weight, float height, float width, float length, String author) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.sale_price = sale_price;
		this.rent_price = rent_price;
		this.language = language;
		this.publisher = publisher;
		this.sales = sales;
		this.type = type;
		this.isbn = isbn;
		this.sales_in_stock = sales_in_stock;
		this.rent_in_stock = rent_in_stock;
		this.weight = weight;
		this.height = height;
		this.width = width;
		this.length = length;
		this.author = author;
	}
	public Book() {
		super();
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public float getSale_price() {
		return sale_price;
	}
	public void setSale_price(float sale_price) {
		this.sale_price = sale_price;
	}
	public float getRent_price() {
		return rent_price;
	}
	public void setRent_price(float rent_price) {
		this.rent_price = rent_price;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public int getSales() {
		return sales;
	}
	public void setSales(int sales) {
		this.sales = sales;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public int getSales_in_stock() {
		return sales_in_stock;
	}
	public void setSales_in_stock(int sales_in_stock) {
		this.sales_in_stock = sales_in_stock;
	}
	public int getRent_in_stock() {
		return rent_in_stock;
	}
	public void setRent_in_stock(int rent_in_stock) {
		this.rent_in_stock = rent_in_stock;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public float getHeight() {
		return height;
	}
	public void setHeight(float height) {
		this.height = height;
	}
	public float getWidth() {
		return width;
	}
	public void setWidth(float width) {
		this.width = width;
	}
	public float getLength() {
		return length;
	}
	public void setLength(float length) {
		this.length = length;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public void copyInfoFrom(Book b) {
		this.name = b.getName();
		this.image = b.getImage();
		this.sale_price = b.getSale_price();
		this.rent_price = b.getRent_price();
		this.language = b.getLanguage();
		this.publisher = b.getPublisher();
		this.sales = b.getSales();
		this.type = b.getType();
		this.isbn = b.getIsbn();
		this.sales_in_stock = b.getSales_in_stock();
		this.rent_in_stock = b.getRent_in_stock();
		this.weight = b.getWeight();
		this.height = b.getHeight();
		this.width = b.getWidth();
		this.length = b.getLength();
		this.author = b.getAuthor();
	}
}
