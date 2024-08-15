package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ArtWork;
import com.example.demo.repositories.ArtWorkRepository;

@Service
public class ArtWorkService {

	@Autowired
	ArtWorkRepository artworkRepo;

	public ArtWork uploadArtWork(ArtWork aw) {
		return artworkRepo.save(aw);
	}

	public boolean upload(int aid, byte[] photo) {
		if(artworkRepo.uploadPhoto(aid,photo)==1) {
			return true;
		}
		else {
		return false;
		}
	}
}
