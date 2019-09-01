package com.tharindu.service;

import com.tharindu.model.Student;
import com.tharindu.repository.StudentRepository;

import java.util.List;

public interface StudentService  {

    Student save(Student student);
    List<Student> getAll();
    void delete(Integer id);

}
