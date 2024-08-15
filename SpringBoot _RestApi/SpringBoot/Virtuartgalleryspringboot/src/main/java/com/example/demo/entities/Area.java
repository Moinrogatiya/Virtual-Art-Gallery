package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="area")
public class Area { 
	@Id 
	@Column(name = "area_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int area_id;
	
	@Column(name = "area_name")
	String area_name;
	
	@Column(name = "pincode")
	int pincode;
	
	@ManyToOne
	@JoinColumn(name ="city_id")
	City city;
	
//	@OneToMany(mappedBy = "area")
//	@JsonIgnoreProperties("area_id")
//	Set<User> user;

	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public String getArea_name() {
		return area_name;
	}

	public void setArea_name(String area_name) {
		this.area_name = area_name;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}
	
}
