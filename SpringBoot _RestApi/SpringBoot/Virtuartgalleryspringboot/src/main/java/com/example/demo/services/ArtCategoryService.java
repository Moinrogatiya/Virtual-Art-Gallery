package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ArtCategory;
import com.example.demo.repositories.ArtCategoryRepository;

@Service
public class ArtCategoryService {
	
	@Autowired
	ArtCategoryRepository artCategoryRepository;

	public List<ArtCategory> getCategory() {
		return artCategoryRepository.findAll();
	}

	public ArtCategory addCategory(ArtCategory ac) {
		return artCategoryRepository.save(ac);
	}

	public ArtCategory getById(int catId) {
		return artCategoryRepository.findById(catId).get();
	}


}
