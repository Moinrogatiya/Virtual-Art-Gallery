package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyProductOrder;
import com.example.demo.entities.ProductOrder;
import com.example.demo.entities.User;
import com.example.demo.services.ProductOrderService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/porder")
public class ProductOrderController {

	@Autowired
	ProductOrderService poService;
	
	@Autowired
	UserService uService;
	
	@PostMapping("/productorder")
	public ProductOrder addOrder(@RequestBody DummyProductOrder dpo) {
		
		int userId = dpo.getUser_id();
		User u = uService.getUserById(userId);
		
		ProductOrder po = new ProductOrder();
		po.setPor_date(dpo.getPor_date());
		po.setAmount(dpo.getAmount());
		po.setOrder_status(dpo.getOrder_status());
		po.setPayment_status(dpo.getPayment_status());
		po.setUser(u);
		
		return poService.addOrder(po);
	}
}
