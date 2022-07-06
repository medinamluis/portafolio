package com.example;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.function.Consumer;

public class Main {
    public static void main(String[] args) {
        List<String> ingredients = Arrays.asList(
                "flour",
                "salt",
                "baking powder",
                "butter",
                "eggs",
                "milk"
        );

        // IMPERATIVE: how?

        // Store state:
        boolean hasEggs = false;

        // Loop to see if the list contains "eggs"
        for (int i = 0; i < ingredients.size(); i++) {
            String ingredient = ingredients.get(i);
            if (ingredient.equals("eggs")) {
                hasEggs = true;
                break;
            }
        }

        // Loop to print out all list elements:
        for (String ingredient : ingredients) {
            System.out.println(ingredient);
         }

        if (hasEggs) {
            System.out.println("Head-up! Contains a potential allergen: eggs");
        }

        // DECLARATIVE: what?

        if (ingredients.contains(("eggs"))) {
            System.out.println("Head-up! Contains a potential allergen: eggs");
        }

        // Loop to print out all elements -- first Java functional programming, <8 (<1.8)
        // We check in the help that the .forEach() of an iterable takes a Consumer (a functional interface shape)
        // as an argument. We then add the template automatically to override the single method.
        // Note the signature of a Consumer: takes string, (passes it to a function), and returns nothing,
        // i.e. void accept(T, t)
        ingredients.forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        });

        // Loop to print out all elements -- using lambdas (as suggested even by the IDE, Java >=1.8)
        /*
        ingredients.forEach((String ingredient) -> {
            System.out.println(ingredient);
        });
        */
        // Simpler:
        /*
        ingredients.forEach(ingredient -> System.out.println(ingredient));
        */
        // Or extracting the lambda function to reuse it:
        /*
        Consumer<String> printer = ingredient -> System.out.println(ingredient);
        ingredients.forEach(printer);
        */
        // Finally, using method reference:
        ingredients.forEach(System.out::println);

        Main.yell("I want it");
        ingredients.forEach(Main::yell);

        Main.yell(null);
    }

    // Another example (Tested in main above):
    public static void yell(String words) {
        // The second argument of requireNonNull is a Supplier, another functional interface shape. Note its signature:
        // does not take arguments and returns a result, i.e. its functional method signature is: T get().
        Objects.requireNonNull(words, () -> "Created issue " + Main.createIssue());
        System.out.printf("%s!%n", words.toUpperCase());
    }

    private static String createIssue() {
        System.out.println("Some external API call to a bug tracker...");
        return "#ABC123";
    }

    // Other functional interfaces:
    // Shape        Functional method signature
    // Function 	R apply(T t) - useful for transformation
    // Predicate	boolean test(T t) - useful for filtering

}