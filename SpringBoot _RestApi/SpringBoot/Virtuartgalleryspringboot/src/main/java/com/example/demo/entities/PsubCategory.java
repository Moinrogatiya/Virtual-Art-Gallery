package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="psub_category")
public class PsubCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int psub_id;
	String psub_name;
	String description;
	
	@ManyToOne
	@JoinColumn(name="pcat_id")
	ProductCategory pcat ;

	public int getPsub_id() {
		return psub_id;
	}

	public void setPsub_id(int psub_id) {
		this.psub_id = psub_id;
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

	public ProductCategory getPcat() {
		return pcat;
	}

	public void setPcat(ProductCategory pcat) {
		this.pcat = pcat;
	}

	
	
	
}
