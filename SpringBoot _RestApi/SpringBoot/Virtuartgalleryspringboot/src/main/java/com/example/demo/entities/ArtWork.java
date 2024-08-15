package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="artwork")
public class ArtWork {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int art_id ;
	float amount;
	String art_name;
	byte[] art_photo;
	String description;
	String dimension;
	float weight;
	
	@ManyToOne
	@JoinColumn(name ="artist_id",referencedColumnName = "id")
	Artist artist;
	
	@ManyToOne
	@JoinColumn(name ="sc_id")
	ArtSubCategory subcat;

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

	public byte[] getArt_photo() {
		return art_photo;
	}

	public void setArt_photo(byte[] art_photo) {
		this.art_photo = art_photo;
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

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	public ArtSubCategory getSubcat() {
		return subcat;
	}

	public void setSubcat(ArtSubCategory sc_id) {
		this.subcat = sc_id;
	}
	
	
}
