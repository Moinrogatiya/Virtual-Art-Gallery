package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="artist")
public class Artist {
	
	 
	 @Id
	 @Column(name="id")
	 @MapsId
	 int id;
	 
	 @OneToOne(optional = false)
	 @JoinColumn(name="id")
	 User u;
	 
	 String about;
	 
//	 @OneToMany(mappedBy = "artist")
//	 @JsonIgnoreProperties("art_id")
//	 Set<ArtWork> artwork;
	 
	 
	public User getU_id() {
		return u;
	}
	public void setU_id(User u_id) {
		this.u = u_id;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	} 
	 
}
