package com.tharindu.model;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

@Entity
public class Student {

    @Id
    Integer id;
    String name;
    String city;
    Integer age;
    Integer year;
}
