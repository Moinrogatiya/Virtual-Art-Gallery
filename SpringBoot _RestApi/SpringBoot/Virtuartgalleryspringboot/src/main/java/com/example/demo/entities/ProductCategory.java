package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="product_category")
public class ProductCategory {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int pcat_id;
	String pcat_name;
	String description;
	
	public int getPcat_id() {
		return pcat_id;
	}
	public void setPcat_id(int pcat_id) {
		this.pcat_id = pcat_id;
	}
	public String getPcat_name() {
		return pcat_name;
	}
	public void setPcat_name(String pcat_name) {
		this.pcat_name = pcat_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
