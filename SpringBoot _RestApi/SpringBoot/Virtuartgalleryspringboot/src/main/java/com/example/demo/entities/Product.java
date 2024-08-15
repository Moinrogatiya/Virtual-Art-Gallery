package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name ="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int p_id;
	String p_name ,description;
	float price;
	int  stock_quantity;
	byte[] product_img;

	@ManyToOne
	@JoinColumn(name ="psub_id")
	PsubCategory psub;
	
	@ManyToOne
	@JoinColumn(name ="b_id")
	Brand brand;
	
	@OneToMany(mappedBy = "product")
	@JsonIgnoreProperties("p_id")
	Set<OrderDetails> orderdetails;

	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getStock_quantity() {
		return stock_quantity;
	}

	public void setStock_quantity(int stock_quantity) {
		this.stock_quantity = stock_quantity;
	}

	public byte[] getProduct_img() {
		return product_img;
	}

	public void setProduct_img(byte[] product_img) {
		this.product_img = product_img;
	}

	public PsubCategory getPsub() {
		return psub;
	}

	public void setPsub(PsubCategory psub) {
		this.psub = psub;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	
	
}
