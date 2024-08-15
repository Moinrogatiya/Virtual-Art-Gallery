package com.example.demo.entities;

import java.sql.Date;

public class DummyProductOrder {

	Date por_date;
	int user_id;
	float amount;
	int order_status;
	int payment_status;
	
	public DummyProductOrder(Date por_date, int user_id, float amount, int order_status, int payment_status) {
		super();
		this.por_date = por_date;
		this.user_id = user_id;
		this.amount = amount;
		this.order_status = order_status;
		this.payment_status = payment_status;
	}

	public DummyProductOrder() {
		super();
	}

	public Date getPor_date() {
		return por_date;
	}

	public void setPor_date(Date por_date) {
		this.por_date = por_date;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public int getOrder_status() {
		return order_status;
	}

	public void setOrder_status(int order_status) {
		this.order_status = order_status;
	}

	public int getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(int payment_status) {
		this.payment_status = payment_status;
	}
	
}
