package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.PsubCategory;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface ProductSubCategoryRepository extends JpaRepository<PsubCategory, Integer> {

//	@Query("from PsubCategory where pcat_id = :spid")
//	List<PsubCategory> findAllByPCategoryId(int spid);
//	

	
	@Query(value="select * from psub_category where pcat_id = :spid", nativeQuery = true)
	List<PsubCategory> findAllByPCategoryId(int spid);
}
