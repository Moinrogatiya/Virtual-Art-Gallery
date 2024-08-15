package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ProductOrder;
import com.example.demo.repositories.ProductOrderRepository;

@Service
public class ProductOrderService {
	
	@Autowired
	ProductOrderRepository poRepo;

	public ProductOrder addOrder(ProductOrder po) {
		return poRepo.save(po);
	}

	public ProductOrder getProductOrderById(int poId) {
		return poRepo.findById(poId).get();
	}

}
