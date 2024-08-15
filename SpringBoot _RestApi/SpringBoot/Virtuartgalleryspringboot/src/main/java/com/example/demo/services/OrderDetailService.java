package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.OrderDetails;
import com.example.demo.repositories.OrderDetailRepository;

@Service
public class OrderDetailService {
	
	@Autowired
	OrderDetailRepository odRepo;

	public OrderDetails CreateProductOrder(OrderDetails od) {
		return odRepo.save(od);
	}

}
