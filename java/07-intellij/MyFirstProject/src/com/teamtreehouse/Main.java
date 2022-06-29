package com.teamtreehouse;

import com.teamtreehouse.data.Person;

public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");
        Person person = new Person("Luis");
        String name = person.getName();
        System.out.println(name);
    }
}