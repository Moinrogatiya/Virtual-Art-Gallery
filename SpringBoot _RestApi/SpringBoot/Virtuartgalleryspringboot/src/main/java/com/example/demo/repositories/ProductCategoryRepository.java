package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ProductCategory;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {
	
	
	
}
