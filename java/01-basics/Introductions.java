import java.io.Console;  // I/O
 
public class Introductions {
  
    public static void main(String[] args) {
        Console console = System.console();
        // Welcome to the Introductions program!  Your code goes below here
        String firstName = console.readLine("What's your name? ");
        console.printf("Hello World!\n");
        console.printf("My name is %s!\n", firstName);
  }
}