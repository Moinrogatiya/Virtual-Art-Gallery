package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Brand;
import com.example.demo.repositories.BrandRepository;

@Service
public class BrandService {
	@Autowired
	BrandRepository brepo;
	
	public List<Brand> getAll(){
		return brepo.findAll();
	}
	
	public Brand addBrand(Brand b) {
		return brepo.save(b);
	}

	public Brand getBrandById(int bId) {
		return brepo.findById(bId).get();
	}
}
