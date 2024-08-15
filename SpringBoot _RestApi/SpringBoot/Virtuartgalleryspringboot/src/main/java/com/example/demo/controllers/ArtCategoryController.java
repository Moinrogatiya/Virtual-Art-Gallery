package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.ArtCategory;
import com.example.demo.services.ArtCategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtCategoryController {
	
	@Autowired
	ArtCategoryService artCategoryService;
	
	@GetMapping("/allcategories")
	public List<ArtCategory> getAllCategory(){
		return artCategoryService.getCategory();
	}
	
	@PostMapping("/addcategory")
	public ArtCategory addCategories(@RequestBody ArtCategory ac) {
		return artCategoryService.addCategory(ac);
	}
}
