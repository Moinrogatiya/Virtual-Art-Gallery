package com.example.demo.entities;

public class DummyArtSubCategory {

	String sc_name;
	String description;
	int acat_id;
	
	public DummyArtSubCategory() {
		super();
	}

	public DummyArtSubCategory(String sc_name, String description, int acat_id) {
		super();
		this.sc_name = sc_name;
		this.description = description;
		this.acat_id = acat_id;
	}

	public String getSc_name() {
		return sc_name;
	}

	public void setSc_name(String sc_name) {
		this.sc_name = sc_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getAcat_id() {
		return acat_id;
	}

	public void setAcat_id(int acat_id) {
		this.acat_id = acat_id;
	}
	
	
	
}
