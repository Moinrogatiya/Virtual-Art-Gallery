package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyProduct;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductCategory;
import com.example.demo.services.ProductCategoryService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductCategoryController {

	@Autowired
	ProductCategoryService pcservice;
	
	@GetMapping("/allproductcategory")
	public List<ProductCategory> getAllPCategory(){
		
		return pcservice.getPCategory();
	}
	
	@PostMapping("addProductcat")
	public ProductCategory addProductcats(@RequestBody ProductCategory p) {
		return pcservice.addPCategory(p);
	}
}
