import java.io.Console;

public class Greeter {

  public static void main(String[] args) {
    Console console = System.console();
    // TODO:  1. Create a new String named place and assign it a value of your choosing.
    String place = "NY";
    
    // TODO:  2. Using the provided console object, 
    //           prompt the user "What is your first name?" and store that in a variable
    String name = console.readLine("What is your first name? ");
    
    // TODO:  3. Print out to the console "Hello <FIRST_NAME>!  Welcome to <PLACE>."
    console.printf("Hello %s! Welcome to %s.\n", name, place);
  }
  

}