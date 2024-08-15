package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ArtOrder;
import com.example.demo.repositories.ArtOrderRepository;

@Service
public class ArtOrderService {
	
	@Autowired
	ArtOrderRepository aoRepo;

	public ArtOrder addOrder(ArtOrder ao) {
		return aoRepo.save(ao);
	}

}
