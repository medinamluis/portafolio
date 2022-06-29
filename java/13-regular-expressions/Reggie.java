import java.io.Console;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

// Test e.g. in https://regex101.com/

class Reggie {
  public static void main(String[] args) {
    Console console = System.console();
    
    // TEST:
    String zipCode = console.readLine("Enter your zip code: ");
    if (zipCode.matches("^\\d{5}(-\\d{4})?$")) {
      // Note the scaped "\\" for the regular expression
      // Only 5 digits: nothing else nor nothing after (except for the optional dash-4-characters below)
      // Then a dash separating the optional 4 digits (use ()?)
      System.out.printf("%s is a valid zip code %n", zipCode);
    } else {
      System.out.printf("%s is not a valid zip code %n", zipCode);
    }
    
    // SPLIT:
    String skills = "JavaScript, HTML, CSS, and Java";
    for (String skill : skills.split("\\W+(and\\W+)?")) {
      // Split at any sequence of non-word characters (at least one character), incl.* the sequence "and" (followed by one ore more non-word characters) - *optional:
      System.out.printf("Skill: %s%n", skill);
    }
    
    // PATTERN.COMPILE and PATTERN.MATCHER:
    
    // Find the full word that contains a substring (the 'sh' sounds):
    String script = "Surely capturing shushy words shall show how beneficial Regular Expresions actually are. Procastination is not the destination, should we talk about shiny things?";
    // Pass your regex to the .compile static method of Pattern: here, any word character before and after the indicated 2-character patterns - external parenthesis for full word. As second optional character, set the case insentive flag:
    Pattern pattern = Pattern.compile("(\\w*(sh|ti|su|ci|tu|si)\\w*)", 
                                      Pattern.CASE_INSENSITIVE);
    // Helper class to keep track of matches (pass your string to be tested):
    Matcher matcher = pattern.matcher(script);
    // returns true if there's a pattern that is a match and moves to the next state
    while (matcher.find()) {
      // Example of result:
      // surely
      // --      <- matcher.group 2
      // ------  <- matcher.group 1
      System.out.printf("'%s' is a shushy word because of '%s'.%n",
                        matcher.group(1), matcher.group(2));
    }
    
  }
}

/* ----------------------------------------------------------

.			Any (one) character
X*			Zero or more of X
			.*       Any character(s), incl. no character

Character classes:
[]        	Character class: any character in the specified list
			[abc]     All a, b, and c single characters
			[a-z]     Range: All single characters a to z
			[A-Za-z]  Range: All single characters A to Z and a to z
[^X]		Negation (in classes): any except X

Predefined character classes:
\d 			Digit
\w          Word character: [A-Za-z_0-9]
\W          Non-word character: [^\w]

Quantiifiers:
X?			X, zero or once (i.e. optional)
X+          X, one ore more times
X{n}		X exactly n times

Boundary matchers:
^			Beginning of line (only when at the beggining, otherwise is Negation)
$			End of line

Logical operators
XY			X followed by Y
|			Or
()			Groupping (capturing group)

---------------------------------------------------------- */