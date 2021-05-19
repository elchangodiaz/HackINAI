package com.hack.inai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hack.inai.service.IService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/inai")
public class InfoController {
	
	@Autowired
	IService consultasService;

    @GetMapping(value = "/consulta")
    public ResponseEntity getConsulta(){
    	return  new ResponseEntity(consultasService.getCsv(), HttpStatus.FOUND);
    }
    
	
}
