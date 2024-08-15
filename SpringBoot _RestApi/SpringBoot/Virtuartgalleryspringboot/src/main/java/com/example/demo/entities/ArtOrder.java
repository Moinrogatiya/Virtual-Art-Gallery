package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="art_order")
public class ArtOrder {

	@Id
	@Column(name = "aor_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int aor_id ;
	
	@Column(name = "aor_date")
	Date aor_date;
	
	int  payment_status;
	
	int order_status;
	
	@OneToOne
	@JoinColumn(name = "artwork_id")
	ArtWork artwork;
	
	
	@OneToOne
	@JoinColumn(name = "user_id")
	User user;

	public int getAor_id() {
		return aor_id;
	}

	public void setAor_id(int aor_id) {
		this.aor_id = aor_id;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ArtWork getArtwork() {
		return artwork;
	}

	public void setArtwork(ArtWork artwork) {
		this.artwork = artwork;
	}	
	
}
