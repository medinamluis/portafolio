public class Thing {
  public static final String ANSI_RESET = "\u001B[0m";
  public static final String ANSI_RED = "\u001B[31m";
  public static final String ANSI_GREEN = "\u001B[32m";
  
  public static void explore(String assumption, boolean result) {
    StringBuilder sb = new StringBuilder();
    
    if (result) {
      sb.append(String.format("%sYAY! %s", ANSI_GREEN, ANSI_RESET));
      
    } else {
      sb.append(String.format("%sWHAT?%s", ANSI_RED, ANSI_RESET));
    }
    
    sb.append("  ");
    sb.append(assumption);
    
    if (!result) {
      sb.append(" (Your assumption is incorrect)");
    }
    
    System.out.println(sb.toString());
  }
  
  public static void main(String[] args) {
    // Your assumptions here
    
    System.out.printf("%nPrimitives%n");
    
    int firstNumber = 12;
    int secondNumber = 12;
    explore("Primitives use double equals", firstNumber == secondNumber);
    
    System.out.printf("%nObjects%n");
    
    Object firstObject = new Object();
    Object secondObject = new Object();
    explore("Objects work just like primitives", firstObject == secondObject);
    explore("Objects references use double equals to chech if they refer to the same object in memory, seemingly equal object are not equal", firstObject != secondObject);
    
    Object sameObject = firstObject;
    explore("Objects references must refer to the same object to use double equals", firstObject == sameObject);
    
    System.out.printf("%nObjects: Strings%n");
    
    String firstString = "Craig";
    String secondString = "Craig";
    explore("Strings are objects and work like objects", firstObject != secondString);
    explore("String literals are actually referring to the same object", firstString == secondString);
    
    String differentString = new String("Craig");
    explore("String objects that contains the same character but point to different objects cannot use double equals", firstString != differentString);
    
    String anotherString = new String("Craig");
    explore("String interning, .intern(), adds to the same string pool where literals live, so you get back the same reference", anotherString.intern() == firstString);
    explore("All objects should use .equals() to check equality", firstString.equals(differentString));
  }
}