package com.tharindu.model;


import javax.persistence.*;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
   private String name;
   private String city;
   private Integer age;
   private Integer year;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
         if(name == null || name.trime().length()==0){
            throw new RuntimeException("Invalide  name");
        }
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        if(city == null || city.trime().length()==0){
            throw new RuntimeException("Invalide city name");
        }
        this.city = city;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        if(age<0){
            throw new RuntimeException("Age must be greater than 0");
        }
        this.age = age;
    }

    public Integer getYear() {
        
        return year;
    }

    public void setYear(Integer year) {
        if(year<0 || year >4){
            throw new RuntimeException("Year must be in the range 0 and 4");
        }
        this.year = year;
    }


}
