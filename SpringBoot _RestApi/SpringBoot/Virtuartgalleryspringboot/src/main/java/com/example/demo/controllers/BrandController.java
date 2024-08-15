package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Brand;
import com.example.demo.services.BrandService;


@RestController
@RequestMapping("/brand")
@CrossOrigin(origins = "http://localhost:3000")
public class BrandController {
	@Autowired
	BrandService bservice;
	
	@GetMapping("/getallbrand")
	public List<Brand> getAll(){
		return bservice.getAll();
	}
	
	@PostMapping("/addbrand")
	public Brand addbrands(@RequestBody Brand b) {
		return bservice.addBrand(b);
	}
	
}
