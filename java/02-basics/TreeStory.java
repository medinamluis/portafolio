import java.io.Console;
 
public class TreeStory {
    
    public static void main(String[] args) {
        Console console = System.console();
        /*  Some terms:
            noun - Person, place or thing
            verb - An action
            adjective - A description used to modify or describe a noun
            Enter your amazing code here!
        */
        /*
        String name = console.readLine("Your name: ");
        String adjective = console.readLine("An adjective: ");
        console.printf("%s is very %s\n", name, adjective);
        */
      
        // int age = 12;  // primitive data type
        String ageAsString = console.readLine("How old are you? ");
        int age = Integer.parseInt(ageAsString);  // "casting": switch between data types (with a wrapper/boxed type's static method)
      
        if (age < 13) {
          console.printf("Sorry, you must be at least 13 to use this program.%n");   // %n new line (portable accross platforms, preferred in Java vs. \n for Unix-like systems only)
          System.exit(0);  // status code 0 means that the system ended intentionally normally
        }
      
        String name = console.readLine("Enter a name:  ");
        String adjective = console.readLine("Enter an adjective:  ");
      
        // Initialize variables (so we can test it in the while condition at the 1st trial)
        String noun;  
        boolean isInvalidWord;
        String invalidWords = "dorkjerk";
        do {
          noun = console.readLine("Enter a noun:  ");
          //isInvalidWord = noun.equalsIgnoreCase("dork") || noun.equalsIgnoreCase("jerk");
          // alernatiively:
          isInvalidWord = invalidWords.contains(noun.toLowerCase());
          if (isInvalidWord) {
              console.printf("That language is not allowed. Exiting.%n");
              //System.exit(0);
          }
        } while(isInvalidWord);
      
        String adverb = console.readLine("Enter an adverb:  ");
        String verb = console.readLine("Enter a verb ending with -ing:  ");
        console.printf("Your TreeStory:%n---------------%n");
        console.printf("%s is a %s %s. ", name, adjective, noun);
        console.printf("They are always %s %s.%n", adverb, verb);
    }
    
}