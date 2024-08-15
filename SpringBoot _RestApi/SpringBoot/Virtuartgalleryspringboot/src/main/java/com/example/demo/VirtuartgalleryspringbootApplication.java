package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.demo.*")
//@CrossOrigin(origins ="http://localhost:3000")
public class VirtuartgalleryspringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(VirtuartgalleryspringbootApplication.class, args);
	}

}
