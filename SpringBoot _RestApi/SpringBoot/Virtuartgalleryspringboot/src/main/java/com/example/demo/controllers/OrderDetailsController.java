package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyOrderDetails;
import com.example.demo.entities.DummyProductOrder;
import com.example.demo.entities.OrderDetails;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductOrder;
import com.example.demo.services.OrderDetailService;
import com.example.demo.services.ProductOrderService;
import com.example.demo.services.ProductService;

@RestController
@RequestMapping("/porder")
public class OrderDetailsController {
	
	@Autowired
	OrderDetailService odService;
	
	@Autowired
	ProductService pService;
	
	@Autowired
	ProductOrderService poService;
	
	@PostMapping("/createproductorder")
	public OrderDetails createProductOrder(@RequestBody DummyOrderDetails dod) {
		
		int pId = dod.getP_id();
		Product p = pService.getProductById(pId); 
		
		int poId = dod.getPor_id();
		ProductOrder po = poService.getProductOrderById(poId);
		
		OrderDetails od = new OrderDetails();
		od.setQty(dod.getQty());
		od.setShipping_address(dod.getShipping_address());
		od.setPorder(po);
		od.setProduct(p);
		
		return odService.CreateProductOrder(od);
	}
	
	
	
}
