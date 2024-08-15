package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.ArtWork;

@Transactional
@Repository
public interface ArtWorkRepository extends JpaRepository<ArtWork, Integer> {

	@Modifying
	@Query("update ArtWork set art_photo = :photo where id = :aid")
	public int uploadPhoto(int aid, byte[] photo);

}
