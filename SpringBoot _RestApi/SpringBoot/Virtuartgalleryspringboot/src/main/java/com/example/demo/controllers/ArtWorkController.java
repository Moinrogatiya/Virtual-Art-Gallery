package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.ArtSubCategory;
import com.example.demo.entities.ArtWork;
import com.example.demo.entities.DummyArtWork;
import com.example.demo.entities.User;
import com.example.demo.services.ArtSubCategoryService;
import com.example.demo.services.ArtWorkService;
import com.example.demo.services.ArtistService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/artwork")
public class ArtWorkController {
	@Autowired
	UserService uservice;
	
	@Autowired
	ArtWorkService artworkService;
	
	@Autowired
	ArtistService artistService;
	
	@Autowired
	ArtSubCategoryService artSubCategoryService;
	
	@PostMapping("/uploadartwork")
	public ArtWork uploadArtWork(@RequestBody DummyArtWork artwork){
		
		int u_id = artwork.getU_id();
		User u = uservice.getUserById(u_id);
		//Artist a = artistService.getById(u);
		
		int sub_cat_id = artwork.getSub_cat_id();
		ArtSubCategory subcat = artSubCategoryService.getById(sub_cat_id);
		
		ArtWork aw = new ArtWork();
		aw.setArt_id(artwork.getArt_id());
		aw.setAmount(artwork.getAmount());
		aw.setArt_name(artwork.getArt_name());
		aw.setDescription(artwork.getDescription());
		aw.setDimension(artwork.getDimension());
		aw.setWeight(artwork.getWeight());
		aw.setSubcat(subcat);
		//aw.setArtist(a);
		
		return artworkService.uploadArtWork(aw);
	}
	
	@PostMapping(value="/uploadartimage/{aid}",consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable("aid") int aid,@RequestBody MultipartFile file) {
		boolean flag = true;
		try
		{
			flag = artworkService.upload(aid, file.getBytes());
		}
		catch(Exception e)
		{
			flag = false;
		}
		
		return flag;
	}
	
}
