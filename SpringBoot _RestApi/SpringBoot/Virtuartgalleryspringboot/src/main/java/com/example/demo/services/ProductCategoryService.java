package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.ProductCategory;
import com.example.demo.repositories.ProductCategoryRepository;

@Service
public class ProductCategoryService {
	@Autowired
	ProductCategoryRepository pcrepo;
	
	public List<ProductCategory> getPCategory(){
		return pcrepo.findAll();
	}

	public ProductCategory getProductCategoryById(int pcatId) {
		return pcrepo.findById(pcatId).get();
	}
	
	public ProductCategory addPCategory(ProductCategory pc) {
		return pcrepo.save(pc);
	}

	
}
