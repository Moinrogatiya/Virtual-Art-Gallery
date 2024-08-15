package com.example.demo.entities;

public class DummyArtWork {

	int art_id ;
	float amount;
	String art_name;
	String description;
	String dimension;
	float weight;
	int u_id;
	int sub_cat_id;
	
	public DummyArtWork() {
		super();
	}
	
	public DummyArtWork(int art_id, float amount, String art_name, String description,
			String dimension, float weight, int u_id, int sub_cat_id) {
		super();
		this.art_id = art_id;
		this.amount = amount;
		this.art_name = art_name;
		this.description = description;
		this.dimension = dimension;
		this.weight = weight;
		this.u_id = u_id;
		this.sub_cat_id = sub_cat_id;
	}
	
	public int getArt_id() {
		return art_id;
	}
	public void setArt_id(int art_id) {
		this.art_id = art_id;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getArt_name() {
		return art_name;
	}
	public void setArt_name(String art_name) {
		this.art_name = art_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDimension() {
		return dimension;
	}
	public void setDimension(String dimension) {
		this.dimension = dimension;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public int getSub_cat_id() {
		return sub_cat_id;
	}
	public void setSub_cat_id(int sub_cat_id) {
		this.sub_cat_id = sub_cat_id;
	}
	
	
	
}
