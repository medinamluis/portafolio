package com.teamtreehouse;

public class Main {
    public static void main(String[] args) {
        Milk milk = new Milk();
        Oranges oranges = new Oranges();

        // Box has a generic <T> (type), which is used to specify the type of objects it admits
        // <Milk> (or <Orange>) can be shorted as simply <> on the r.h.s. when the l.h.s. already specified the type
        Box<Milk> boxOfMilk = new Box<>();
        Box<Oranges> boxOfOranges = new Box<>();

        // OK:
        boxOfMilk.add(milk);
        boxOfOranges.add(oranges);
        // Not OK: will be highlighted by the IDE as an error (wrong types)
        // boxOfMilk.add(oranges);
        // boxOfOranges.add(milk);

        /*
        After adding types, casting is no longer needed:
        // Remember to cast the result of .remove()
        // If we added oranges to boxOfMilk and vice versa,
        // the following won't work:
        ((Milk) boxOfMilk.remove()).drink();
        ((Oranges) boxOfOranges.remove()).juggle();
        replace with:
        */
        boxOfMilk.remove().drink();
        boxOfOranges.remove().juggle();

        // Adding again but with a method using types:

        debugAdd(milk, boxOfMilk);
        debugAdd(oranges, boxOfOranges);
    }

    // Types can also be added to methods (not only classes):
    static <T> void debugAdd(T item, Box<T> box) {   // An item of type T, and a Box box of type T elements
        System.out.println("Type: " + item.getClass().getSimpleName());
        box.add(item);
    }
}