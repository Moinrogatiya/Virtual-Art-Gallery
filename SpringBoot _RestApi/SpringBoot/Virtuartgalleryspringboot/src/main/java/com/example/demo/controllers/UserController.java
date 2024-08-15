package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	UserService uService;
	
	@GetMapping("/getusers")
	public List<User> getAllUsers(){
		return uService.getAllUsers();
	}
	
	 @GetMapping("/getuserbyrole")
	    public List<User> getUsersByRole(@RequestParam int roleId) {
	        return uService.getUsersByRole(roleId);
	    }
}
