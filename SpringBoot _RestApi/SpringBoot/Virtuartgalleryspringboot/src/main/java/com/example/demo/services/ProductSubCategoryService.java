package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PsubCategory;
import com.example.demo.repositories.ProductSubCategoryRepository;

@Service
public class ProductSubCategoryService {
	@Autowired
	ProductSubCategoryRepository psubCategoryrepo;
	
	
	public List<PsubCategory> getPSubCategoryByCId(int spid){
		return psubCategoryrepo.findAllByPCategoryId(spid);
	}


	public PsubCategory addProductSubCat(PsubCategory psc) {
		return psubCategoryrepo.save(psc);
	}


	public PsubCategory getProductSubCategoryById(int psId) {
		return psubCategoryrepo.findById(psId).get();
	}
}
