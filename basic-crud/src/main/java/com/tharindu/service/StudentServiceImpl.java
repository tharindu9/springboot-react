package com.tharindu.service;

import com.tharindu.model.Student;
import com.tharindu.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Student findById(Integer id) {
        Optional<Student> student = this.studentRepository.findById(id);
        if(student.isPresent())
            return student.get();
        else
            return null;
    }
}
