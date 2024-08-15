package com.example.demo.entities;

import java.sql.Date;

public class DummyArtOrder {

	Date aor_date;

	int payment_status;

	int order_status;
	
	int userID;
	
	int artworkID;

	public DummyArtOrder(Date aor_date, int payment_status, int order_status, int userID,int artworkID) {
		super();
		this.aor_date = aor_date;
		this.payment_status = payment_status;
		this.order_status = order_status;
		this.userID = userID;
		this.artworkID = artworkID;
	}

	public DummyArtOrder() {
		super();
	}

	public Date getAor_date() {
		return aor_date;
	}

	public void setAor_date(Date aor_date) {
		this.aor_date = aor_date;
	}

	public int getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(int payment_status) {
		this.payment_status = payment_status;
	}

	public int getOrder_status() {
		return order_status;
	}

	public void setOrder_status(int order_status) {
		this.order_status = order_status;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public int getArtworkID() {
		return artworkID;
	}

	public void setArtworkID(int artworkID) {
		this.artworkID = artworkID;
	}
	
	
		
}
