package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Brand;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer> {

}
