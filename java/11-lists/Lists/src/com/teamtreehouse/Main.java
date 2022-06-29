package com.teamtreehouse;

import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Lists are interfaces that take one type parameter <E>
        // Since List is an interface, we cannot use it to create a new List object. Instead, we need to create an
        // instance of a classes that implements the Map interface, e.g. ArrayList
        List<String> groceryLine = new ArrayList<>();  // vs arrays, these Lists can actually be expanded

        // Add:
        groceryLine.add("Jay");
        groceryLine.add("Beth");
        groceryLine.add("Sam");
        System.out.println(groceryLine);

        // Remove:
        groceryLine.remove("Beth");  // by element
        System.out.println(groceryLine);
        groceryLine.remove(1); // by index
        System.out.println(groceryLine);

        // Get by index:
        String jay = groceryLine.get(0);
        System.out.println(jay);

        // Before continue, let's put one of the removed items back:
        groceryLine.add("Sam");
        System.out.println(jay);

        // indexOf:
        int samIndex = groceryLine.indexOf("Sam");  // exists: returns the first occurrence
        System.out.println(samIndex);
        int pamIndex = groceryLine.indexOf("Pam");  // does not exist: -1
        System.out.println(pamIndex);

        // Size -- equivalent to the .length of arrays, but here it's a function since ArrayList can change length:
        System.out.println(groceryLine.size());

        // Loops:
        for (String name : groceryLine) {
            System.out.println(name);
        }

        // Others: clear(), set(), toArray(), etc...
    }
}