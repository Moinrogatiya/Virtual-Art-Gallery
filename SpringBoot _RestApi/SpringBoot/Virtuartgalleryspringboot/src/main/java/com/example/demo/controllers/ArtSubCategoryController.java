package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ArtCategory;
import com.example.demo.entities.ArtSubCategory;
import com.example.demo.entities.DummyArtSubCategory;
import com.example.demo.services.ArtCategoryService;
import com.example.demo.services.ArtSubCategoryService;

@RestController
@RequestMapping("/category")
public class ArtSubCategoryController {

	@Autowired
	ArtSubCategoryService artSubCategoryService;
	
	@Autowired
	ArtCategoryService artCategoryService;
	
	@GetMapping("/subCategories")
	public List<ArtSubCategory> getAllCategories(){
		return artSubCategoryService.getSubCategory();
	}
	
	 @GetMapping("/subcategory")
	    public List<ArtSubCategory> getAllSubCategory(@RequestParam int cid) {
	        return artSubCategoryService.getSubCategoryByCategoryId(cid);
	    }
	 
	 @PostMapping("/addsubcategory")
	 public ArtSubCategory addSubCategory(@RequestBody DummyArtSubCategory dasc) {
		 int catId = dasc.getAcat_id();
		 ArtCategory ac = artCategoryService.getById(catId);
		 
		 ArtSubCategory asc = new ArtSubCategory();
		 asc.setSc_name(dasc.getSc_name());
		 asc.setDescription(dasc.getDescription());
		 asc.setAcat(ac);
		 
		 return artSubCategoryService.addsubCat(asc);
	 }
}
