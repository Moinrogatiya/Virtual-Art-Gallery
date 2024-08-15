package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Brand;
import com.example.demo.entities.DummyProduct;
import com.example.demo.entities.Product;
import com.example.demo.entities.PsubCategory;
import com.example.demo.services.BrandService;
import com.example.demo.services.ProductService;
import com.example.demo.services.ProductSubCategoryService;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	ProductService pService;
	
	@Autowired
	BrandService brandService;
	
	@Autowired
	ProductSubCategoryService pscService;
	
	@PostMapping("/addproduct")
	public Product addProduct(@RequestBody DummyProduct dproduct) {
		
		int bId = dproduct.getB_id();
		Brand b = brandService.getBrandById(bId);
		
		int psId = dproduct.getPsub_id();
		PsubCategory psc = pscService.getProductSubCategoryById(psId);
		
		Product p = new Product();
		p.setP_id(dproduct.getP_id());
		p.setP_name(dproduct.getP_name());
		p.setDescription(dproduct.getDescription());
		p.setPrice(dproduct.getPrice());
		p.setStock_quantity(dproduct.getStock_quantity());
		p.setPsub(psc);
		p.setBrand(b);
		
		return pService.addProduct(p);
	}
	
	@GetMapping("/allproducts")
	public List<Product> getAllProduct(){
		return pService.getAllProduct();
	}
}
