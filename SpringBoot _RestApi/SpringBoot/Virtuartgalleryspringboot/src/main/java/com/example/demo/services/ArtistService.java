package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Artist;
import com.example.demo.repositories.ArtistRepository;

@Transactional
@Service
public class ArtistService {

	@Autowired
	ArtistRepository artistRepo;
	
	@Autowired
	UserService uservice;

	public Artist getArtistById(int u_id) {
		return artistRepo.findById(u_id).get();
	}
}
