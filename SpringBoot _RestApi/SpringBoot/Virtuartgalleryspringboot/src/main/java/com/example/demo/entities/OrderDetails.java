package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="order_details")
public class OrderDetails {
	
	@Id
	@Column(name = "od_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int od_id ;
	
	int qty;
	String shipping_address;
	
	@ManyToOne
	@JoinColumn(name="por_id")
	private ProductOrder porder;
	
	
	@ManyToOne
	@JoinColumn(name ="p_id")
	private Product product;

	
	

	public int getOd_id() {
		return od_id;
	}


	public void setOd_id(int od_id) {
		this.od_id = od_id;
	}


	public int getQty() {
		return qty;
	}


	public void setQty(int qty) {
		this.qty = qty;
	}


	public String getShipping_address() {
		return shipping_address;
	}


	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}


	public ProductOrder getPorder() {
		return porder;
	}


	public void setPorder(ProductOrder porder) {
		this.porder = porder;
	}


	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
	}
	
	
	
	
}
