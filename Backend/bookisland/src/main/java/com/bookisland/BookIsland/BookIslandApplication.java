package com.bookisland.BookIsland;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.SpringVersion;

@SpringBootApplication
public class BookIslandApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookIslandApplication.class, args);
		System.out.println(SpringVersion.getVersion());
		
	}

}
