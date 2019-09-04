package com.tharindu.controllers;


import com.tharindu.model.Student;
import com.tharindu.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @RequestMapping(method = RequestMethod.GET )
    public List<Student> getAll(){
        return studentService.getAll();
    }

    @RequestMapping(method = RequestMethod.POST )
    public Student save(@RequestBody  Student student){
        return studentService.save(student);
    }

    @RequestMapping(value = "/id" ,method = RequestMethod.DELETE )
    public void delete(@PathVariable Integer id){
         studentService.delete(id);
    }
}
