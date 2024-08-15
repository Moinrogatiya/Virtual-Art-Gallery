package com.example.demo.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	int  id ;
	
	@Column(name = "first_name")
	String first_name;
	
	@Column(name = "last_name")
	String last_name;
	
	@Column(name = "email_id")
	String email_id;
	
	@Column(name = "contact")
	String contact;
	
	@Column(name = "username")
	String username;
	
	@Column(name = "password")
	String password;
	
	@Column(name = "address")
	String address; 
	
	@Column(name = "profile_photo")
	byte[] profile_photo;
	
	@Column(name = "status")
	boolean status;
	
	@ManyToOne
	@JoinColumn(name ="area_id")
	Area area;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role;
	
//	@OneToOne
//	@JsonIgnoreProperties("u_id")
//	Set<Artist> artists;

	public int getId() {
		return id;
	}

	public void setId(int u_id) {
		this.id = u_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public byte[] getProfile_photo() {
		return profile_photo;
	}

	public void setProfile_photo(byte[] profile_photo) {
		this.profile_photo = profile_photo;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Area getArea_id() {
		return area;
	}

	public void setArea_id(Area area_id) {
		this.area = area_id;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	
	
}
