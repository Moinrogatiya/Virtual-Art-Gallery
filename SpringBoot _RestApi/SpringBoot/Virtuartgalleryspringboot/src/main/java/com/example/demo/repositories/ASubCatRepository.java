package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ASubCategory;

@Repository
public interface ASubCatRepository extends JpaRepository<ASubCategory, Integer> {

}
