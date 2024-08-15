package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artist;
import com.example.demo.services.ArtistService;

@RestController
@RequestMapping("/artist")
public class ArtistController {

	@Autowired
	ArtistService artistService;
	
	
}
