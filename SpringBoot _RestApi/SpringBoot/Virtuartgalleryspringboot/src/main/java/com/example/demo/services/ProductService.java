package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository prepo;

	public Product addProduct(Product p) {
		return prepo.save(p);
	}
	


	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

}
