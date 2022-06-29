package com.teamtreehouse;

import java.util.Objects;

public class Main {
    public static void main(String[] args) {

        // INSTANTIATION:

        // We can technically create Animal dog, or even Object dog (but in this last case we lose the .makeSound()
        // method):
        // Dog dog = new Dog();
        // dog.makeSound();

        // List of objects (they can be put together because
        // ultimately they are all objects):
        Object[] list = {new Dog("bark"), new DogFood()};

        // CASTING:

        // 1. This creates an incompatible types error:
        // Dog dog = list[0];

        // 2. We need "type casting" ("cast") it, i.e. convert an object to a more specific descendant of that object:
        // Dog dog = (Dog)list[0];  // Note the "(Dog)" -> casting
        // dog.makeSound();  // now we can access it :)

        // 3. Note however that you cannot do this:
        // (Dog)list[0].makeSound(); –> .makeSound() executes before casting

        // 4. An alternative way is:
        // ((Dog)list[0]).makeSound();

        // Following the last option, we loop over the list and call .makeSound() only if the object is of the Animal
        // class (which has the .makeSound() method):
        for (Object object : list ) {
            if (object instanceof Animal) {
                ((Animal)object).makeSound(); // we still need to cast
            }
        }

        // NEW OBJECT TO STUDY THE CLASSES INHERITED FROM OBJECT:

        Dog doggy = new Dog("bark");
        // Class .getClass(); -> getName(), getPackage(), ...
        // String .toString(); -> same result if we only print the object: System.out.println(doggy);
        //                        from the docs, it is recommended that the object overrides this method with its own
        //                        declaration
        // int .hashCode(); -> returns the object's hash code, useful to check if two objects are equal
        // boolean .equals(); -> basically what we wanted to do in the previous line
        System.out.println(doggy);  // equivalent but shorter than System.out.println(doggy.toString());
        //                             unless we redeclare it, as suggested

        // Regarding abstract classes
        // Animal animal = new Animal(); --> error: cannot be instantiated
        // Regarding abstract methods:
        doggy.findFood();

        // OBJECT EQUALITY:

        Dog dog = new Dog("bark");
        Dog doggo = new Dog("woof");
        // test before and after overriding our equality criteria:
        System.out.println(dog.equals(doggo));  // false
        System.out.println(dog.equals(doggy));  // true: same bark sound makes same dog (even though the objects
                                                // --their hashes--- are, formally, different)

    }
}

// Typically, each class goes in each on file.
// All public classes need their own file (adding public
// will throw an error). So, for now, we'll just do this:

// An abstract class cannot be instantiated and can have abstract methods (empty methods that will need to be
// filled in the child classes). To understand an abstract class, think for example that if we are asked to
// draw an animal, we can't draw a generic animal (abstract class), we can only draw a specific type (a child
// class such as Dog)):
abstract class Animal {
    String sound = "";

    // Constructor:
    Animal(String sound) {  // require a sound for Animal
        this.sound = sound;
    }

    // Abstract method:
    abstract void findFood();

    void makeSound() {
        System.out.println(sound);
    }

    // Override the inherited toString() from Object (which would return com.teamtreehouse.Dog@[Hash code])
    // Annotation @Override ensures that we are doing an override, which will throw an error if the class that we
    // want to override does not exist to begin with. Use ctrl+O to add the override template:
    @Override
    public String toString() {
        return getClass().getSimpleName() + ": sound = " + sound;
    }

    // User-defined criteria for object equality based on the value of the object properties
    // (here, the only sound property):

    @Override  // always requires in turn the overriding of the hashCode method (see below):
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Animal animal = (Animal) obj;
        return Objects.equals(sound, animal.sound);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(sound);
    }
}

// Inheritance (extends):

class Dog extends Animal {
    // formally, Animal above is also extending Object, but this
    // is the default, and we do not need to write it explicitly

    // Constructor:
    Dog(String sound) {
        super(sound);  // required keyword by Animal
    }

    @Override
    void findFood() {
        System.out.println("looking for human");
    }

    @Override
    void makeSound() {
        super.makeSound();  // note the super to refer to the parent class
        System.out.println("waves tail");
    }
}

class DogFood {

}