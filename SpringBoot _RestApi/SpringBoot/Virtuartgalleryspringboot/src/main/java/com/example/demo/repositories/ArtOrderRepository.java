package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.ArtOrder;

@Transactional
@Repository
public interface ArtOrderRepository extends JpaRepository<ArtOrder, Integer> {

}
