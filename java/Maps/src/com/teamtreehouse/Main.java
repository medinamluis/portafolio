package com.teamtreehouse;

import java.util.Map;
import java.util.HashMap;

public class Main {
    public static final String BREAKFAST = "breakfast";
    public static final String LUNCH = "lunch";
    public static final String DINNER = "dinner";

    public static void main(String[] args) {
        // Maps are interfaces that takes two type parameters <K, V>
        // Since Map is an interface, we cannot use it to create a new Map object. Instead, we need to create an
        // instance of a classes that implements the Map interface, e.g. HashMap
        Map<String, String> meals = new HashMap<>();

        // Put (a good practice is to pre-declare the keys as constant strings --see above-- and then use those
        // to declare/access the keys, to prevent typos which will go undetected as errors):
        meals.put(BREAKFAST, "Waffles");
        meals.put(LUNCH, "Gyros");
        meals.put(DINNER, "Enchiladas");
        System.out.println(meals);

        // Retrieve item for a given key:
        System.out.println(meals.get(DINNER));

        // Remove:
        String lunch = meals.remove(LUNCH);   // removes and return the removed value
        System.out.println(meals);
        System.out.println("lunch = " + lunch);

        // containsKey and containsValue:
        boolean hasLunch = meals.containsKey("lunch");
        boolean hasGyros = meals.containsValue("Gyros");
        System.out.println("hasLunch = " + hasLunch);
        System.out.println("hasGyros = " + hasGyros);

        // size:
        int size = meals.size();
        System.out.println("size = " + size);

        // You cannot have duplicated keys:
        meals.put(DINNER, "Pudding");  // will override the original value of "dinner"
        System.out.println(meals);
    }
}