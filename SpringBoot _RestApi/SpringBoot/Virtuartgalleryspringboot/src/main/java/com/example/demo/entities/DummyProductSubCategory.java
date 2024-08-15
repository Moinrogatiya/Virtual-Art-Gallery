package com.example.demo.entities;

public class DummyProductSubCategory {
	
	String psub_name;
	String description;
	int pcat_id;
	
	public DummyProductSubCategory() {
		super();
	}

	public DummyProductSubCategory(String psub_name, String description, int pcat_id) {
		super();
		this.psub_name = psub_name;
		this.description = description;
		this.pcat_id = pcat_id;
	}

	public String getPsub_name() {
		return psub_name;
	}

	public void setPsub_name(String psub_name) {
		this.psub_name = psub_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPcat_id() {
		return pcat_id;
	}

	public void setPcat_id(int pcat_id) {
		this.pcat_id = pcat_id;
	}
	
}
