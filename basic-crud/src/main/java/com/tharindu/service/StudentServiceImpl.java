package com.tharindu.service;

import com.tharindu.model.Student;
import com.tharindu.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student save(Student student){
      return this.studentRepository.save(student);
    }

    @Override
    public List<Student> getAll(){
        return this.studentRepository.findAll();
    }

    @Override
    public void delete(Integer id){
        this.studentRepository.deleteById(id);
    }
}
