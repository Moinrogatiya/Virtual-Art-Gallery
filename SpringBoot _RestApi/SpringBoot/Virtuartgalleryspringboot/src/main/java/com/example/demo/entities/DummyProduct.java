package com.example.demo.entities;

public class DummyProduct{
	int p_id;
	String p_name ,description;
	float price;
	int  stock_quantity;
	int psub_id;
	int b_id;
	
	public DummyProduct() {
		super();
	}
	
	public DummyProduct(int p_id, String p_name, String description, float price, int stock_quantity,
			int psub_id, int b_id) {
		super();
		this.p_id = p_id;
		this.p_name = p_name;
		this.description = description;
		this.price = price;
		this.stock_quantity = stock_quantity;
		this.psub_id = psub_id;
		this.b_id = b_id;
	}
	
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
	public int getPsub_id() {
		return psub_id;
	}
	public void setPsub_id(int psub_id) {
		this.psub_id = psub_id;
	}
	public int getB_id() {
		return b_id;
	}
	public void setB_id(int b_id) {
		this.b_id = b_id;
	}
	
	
}
