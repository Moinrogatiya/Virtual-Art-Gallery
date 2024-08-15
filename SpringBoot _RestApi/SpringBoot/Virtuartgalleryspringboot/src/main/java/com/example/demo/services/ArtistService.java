package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Artist;
import com.example.demo.entities.User;
import com.example.demo.repositories.ArtistRepository;

@Transactional
@Service
public class ArtistService {

	@Autowired
	ArtistRepository artistRepo;
	
	@Autowired
	UserService uservice;
	
	/*public Artist getById(int uid) {
		User u = uservice.getUserById(uid);
		return artistRepo.findById(u).get();
	}*/
	
//	public Artist getById(User u) {
//		//User u = uservice.getUserById(u);
//		return artistRepo.findById(u).get();
//	}
}
