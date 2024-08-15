package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ArtOrder;
import com.example.demo.entities.ArtWork;
import com.example.demo.entities.DummyArtOrder;
import com.example.demo.entities.User;
import com.example.demo.services.ArtOrderService;
import com.example.demo.services.ArtWorkService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/order")
public class ArtOrderController {

	@Autowired
	ArtOrderService aoService;
	
	@Autowired
	UserService uService;
	
	@Autowired
	ArtWorkService awService;
	
	@PostMapping("/addorder")
	public ArtOrder addOrder(@RequestBody DummyArtOrder dao) {
		
		int uid = dao.getUserID();
		User u = uService.getUserById(uid);
		
		int artworkId = dao.getArtworkID();
		ArtWork aw = awService.getArtworkById(artworkId);
		
		ArtOrder ao = new ArtOrder();
		ao.setAor_date(dao.getAor_date());
		ao.setPayment_status(dao.getPayment_status());
		ao.setOrder_status(dao.getOrder_status());
		ao.setUser(u);	
		ao.setArtwork(aw);
		return aoService.addOrder(ao);
	}
}
