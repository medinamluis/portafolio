class PezDispenser {
  
  /*
  // "field" or member variable --> fields express state
  // Encapsulated with "private" modifiers: not even instances will be able to access/modify it
  private String characterName = "Yoda";
  
  // To let consumers see the field, use a "public" method that returns its value
  // methods express behaviour
  public String getCharacterName() {
    return characterName;
  }
  */
  
  // The "static" modifier allows access to the variable from the class itself, and not only an instance of it --> class-level variable (just like, e.g. Integer.MAX_VALUE)
  public static final int MAX_PEZ = 12;
  // Always start declaring a new variable as private, and only change to public if needed
  private int pezCount; 

  
  // To allow initialize the object with a given field value, use the constructor method:
  // First, initialize the variable but do not assign any value yet. To name the variable,
  // we can follow alternatively "m" convention, we call it mCharacterName (see below)
  // Use "final" modifier to only allow assigning the variable a value ONLY ONCE (to prevent modification,
  // which can happen even if its private when we use a function like swapCharacterName defined
  // defined below)
  private final String characterName; 
  
  // CONSTRUCTOR method: no type, and use the same name of the class:
  
  public PezDispenser(String characterName) {
      // we can omit the this., but it allows it to be more explicit and
      // differentiate the two characterName
      this.characterName = characterName;
      // another convention (e.g. in Android) is appending an "m" to your
      // private member variables to avoid naming collisions:
      // mCharacterName = mCharacterName;
      
      // Set initial value of the pezCount field
      pezCount = 0;
  }
  
  // the getter function for the character name remains the same:
  public String getCharacterName() {
    return characterName;  // or mCharacterName
  }
  
  // it will not work once we added final to the private characterName:
  /*
  public String swapCharacterName(String characterName) {
      String originalCharacterName = this.characterName;  // save copy or original
      this.characterName = characterName;  // override name with new
      return originalCharacterName;  // return original
  }
  */
  
  // When a method does not return anything, mark it as "void"
  // (it will even crash if a return is added):
  public void fill() {
    // pezCount = MAX_PEZ;
    // taking profit of the new fill(int) - see below:
    fill(MAX_PEZ);
  }
  
  public boolean isEmpty() {
    return pezCount == 0;
  }
  
  public boolean dispense() {
    boolean wasDispensed = false;
    if (!isEmpty()) {
      // --/++ as prefix (postfix) decreases (increases) pezCount
      // by 1 and returns the modified (original) value
      pezCount--; 
      wasDispensed = true;
    }
    return wasDispensed;      
  }
  
  // "Method overloading": a method is considered different if they accept different parameters.
  // Here, we will fill the container with only by requested amount:
  public void fill(int pezAmount) {
    int newAmount = pezCount + pezAmount;
    // Handle exceptions:
    if (newAmount > MAX_PEZ) {
      throw new IllegalArgumentException("Too many PEZ!");
    }
    // If the condition above was met, the code excited at this point already. 
    // So, it is save to simply assign the new value  - we now that newAmount <= MAX_PEZ:
    pezCount = newAmount;
  }
  
  
}