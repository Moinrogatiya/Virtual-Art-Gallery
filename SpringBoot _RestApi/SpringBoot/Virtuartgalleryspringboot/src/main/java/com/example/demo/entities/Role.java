package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "role")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "role_id")
	int role_id ;
	@Column(name = "role_name")
	String role_name ;
	
	
//	@OneToMany(mappedBy = "role")
//	@JsonIgnoreProperties("role_id")
//	Set<User> user;
	
	
	public int getRole_Id() {
		return role_id;
	}
	public void setRole_Id(int role_Id) {
		this.role_id = role_Id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
	
}
