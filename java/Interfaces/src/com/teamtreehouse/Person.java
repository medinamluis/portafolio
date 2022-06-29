package com.teamtreehouse;

// "Composition inheritance": create class implementing functionality coded into interfaces instead of
// adding functionality to classes and then inheriting from them
public class Person implements Chattable {  // the Chattable interface defines the chat method
    String name;

    Person(String name) {
        this.name = name;
    }

    // Override chat(). Also, since it is public in Chattable, we need to also make it public here
    @Override
    public String chat() {
        return "Hi, I am a Person!";
    }
}
