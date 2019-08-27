package com.tharindu.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("student")
public class StudentController {

    @RequestMapping(method = RequestMethod.GET )
    public String getAll(){
        return "student controller";
    }
}
