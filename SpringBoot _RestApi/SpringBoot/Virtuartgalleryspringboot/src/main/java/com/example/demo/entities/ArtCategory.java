package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="art_category")
public class ArtCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int acat_id;
	String acat_name;
	String description;
	
//	@OneToMany(mappedBy="acat")
//	@JsonIgnoreProperties("acat_id")
//	Set<ASubCategory> subcat;
	
	
	public int getAcat_id() {
		return acat_id;
	}
	public void setAcat_id(int acat_id) {
		this.acat_id = acat_id;
	}
	public String getAcat_name() {
		return acat_name;
	}
	public void setAcat_name(String acat_name) {
		this.acat_name = acat_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
