package com.teamtreehouse;

class Box<T> {  // <T, U, etc.> denotes the generic types T, U, etc. admissible for the class.
                // The type T can be restricted to a certain type, e.g. to objects that extend, let's say,
                // from class Food: <T extends Food>, or to objects that use a given interface Edible:
                // <T extends Edible>, or a both: <T extends Food & Edible>
    private T contents;  // Use T where we would traditionally use Object

    void add(T thing) {
        if (contents == null) {
            contents = thing;
        } else {
            System.out.println("The box is full.");
        }
    }

    T remove() {
        if (contents == null) {
            System.out.println("The box is empty.");
            return null;
        } else {
            T thing = contents;
            contents = null;
            return thing;
        }
    }
}
