package com.example.demo.entities;

public class DummyOrderDetails {

	int qty, por_id, p_id;
	String shipping_address;
	
	public DummyOrderDetails() {
		super();
	}

	public DummyOrderDetails(int qty, int por_id, int p_id, String shipping_address) {
		super();
		this.qty = qty;
		this.por_id = por_id;
		this.p_id = p_id;
		this.shipping_address = shipping_address;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getPor_id() {
		return por_id;
	}

	public void setPor_id(int por_id) {
		this.por_id = por_id;
	}

	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
	}

	public String getShipping_address() {
		return shipping_address;
	}

	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}
	
	
	
	
}
