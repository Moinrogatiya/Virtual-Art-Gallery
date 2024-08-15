package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyProductSubCategory;
import com.example.demo.entities.ProductCategory;
import com.example.demo.entities.PsubCategory;
import com.example.demo.services.ProductCategoryService;
import com.example.demo.services.ProductSubCategoryService;

@RestController
@RequestMapping("/products")
public class ProductSubCategoryController {

	@Autowired
	ProductSubCategoryService psubCatservice;
	
	@Autowired
	ProductCategoryService pcatservice;
	
	@GetMapping("/psubcategory")
	public List<PsubCategory> getAllPSubCategory (@RequestParam int sid){
			return psubCatservice.getPSubCategoryByCId(sid);
	}
	
	@PostMapping("/addsubcategory")
	public PsubCategory addProductSubcategory(@RequestBody DummyProductSubCategory dpsc) {
		int pcatId = dpsc.getPcat_id();
		ProductCategory pc = pcatservice.getProductCategoryById(pcatId);
		
		PsubCategory psc = new PsubCategory();
		psc.setPsub_name(dpsc.getPsub_name());
		psc.setDescription(dpsc.getDescription());
		psc.setPcat(pc);
		
		return psubCatservice.addProductSubCat(psc);
	}
	
	
}
