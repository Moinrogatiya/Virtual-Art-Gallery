package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_order")
public class ProductOrder {

	@Id
	@Column(name = "por_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int por_id;

	Date por_date;

	@ManyToOne
	@JoinColumn(name = "user_id")
	User user;

	float amount;
	int order_status;
	int payment_status;

	public int getPor_id() {
		return por_id;
	}

	public void setPor_id(int por_id) {
		this.por_id = por_id;
	}

	public Date getPor_date() {
		return por_date;
	}

	public void setPor_date(Date por_date) {
		this.por_date = por_date;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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
