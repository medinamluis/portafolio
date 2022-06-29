public class Example {
 
  public static void main(String[] args) {
    // Your amazing code goes here...
    System.out.println("We are making a new PEZ Dispenser");
    
    /*
    PezDispenser dispenser = new PezDispenser();  // no need to import PezDispenser  when the package is in the same folder
    
    // we are able to access and/or modify the charachterName field of the dispenser class becase they are in the same folder if we don't mark the field as private --> changed in PezDispenser.java as private
    // System.out.printf("The dispenser is %s%n", dispenser.characterName);
    // dispenser.characterName = "Darth Vader";
    
    // If the field is private, we cannot even access it. 
    // System.out.printf("The dispenser is %s%n", dispenser.characterName); 
    // instead, access it via a get-type method defined in the class:
    System.out.printf("The dispenser is %s%n", dispenser.getCharacterName()); 
    */
    
    // Now requiring arguments at class initialization:
    PezDispenser dispenser = new PezDispenser("Luke"); 
    System.out.printf("The dispenser is %s%n", dispenser.getCharacterName()); 
    
    // Try changing field with a method created for it:
    // It will run unless the field name is declared as final, which has now been done 
    // so we comment it out now
    /*
    String before = dispenser.swapCharacterName("Leia");
    System.out.printf("The dispenser was %s but switched to %s%n", before, dispenser.getCharacterName()); 
    */
    
    // Access class-level variables (defined in the class as "public static final"):
    System.out.printf("FUN FACT: There are %d PEZ in every dispenser!%n", PezDispenser.MAX_PEZ);
    
    // Check that dispenser is empty and fill it:
    if (dispenser.isEmpty()) {
      System.out.printf("Dispenser is empty.%n");
      System.out.println("Filling the dispenser...");
      dispenser.fill();
    }
    if (!dispenser.isEmpty()) {
      System.out.printf("Dispenser is not empty.%n");
    }
    
    // Testing incremend/decrement operators:
    while (dispenser.dispense()) {
      System.out.println("Here's one!");
    }
    if (dispenser.isEmpty()) {
      System.out.printf("All PEZ have been dispensed :(%n");
    }
    
    // Test the new fill method (method overloading) which calls for an integer parameter):
    dispenser.fill(3);
    dispenser.fill(1);
    System.out.println("Filled in two steps: 3 + 1");
    while (dispenser.dispense()) {
      System.out.println("Here's one!");
    }
    
    // Try and catch the exception built (throw) in fill()
    try {
        dispenser.fill(200);
        System.out.println("This line will never happen!");
    } catch (IllegalArgumentException iae) {
        System.out.printf("Whoa there! There was an error: %s%n", iae.getMessage());
    }
    
    
  }

}