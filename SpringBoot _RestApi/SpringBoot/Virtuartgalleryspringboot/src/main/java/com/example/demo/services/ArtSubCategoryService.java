package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ArtSubCategory;
import com.example.demo.repositories.ArtSubCategoryRepository;

@Service
public class ArtSubCategoryService {
	
	@Autowired
	ArtSubCategoryRepository artSubCategoryRepository;

	public List<ArtSubCategory> getSubCategory() {
		return artSubCategoryRepository.findAll();
	}

	public  List<ArtSubCategory> getSubCategoryByCategoryId(int scid) {
		return artSubCategoryRepository.findAllByCategoryId(scid) ;
	}
	
	public ArtSubCategory getById(int scid) {
		return artSubCategoryRepository.findById(scid).get();
	}

	public ArtSubCategory addsubCat(ArtSubCategory asc) {
		return artSubCategoryRepository.save(asc);
	}
	
}
