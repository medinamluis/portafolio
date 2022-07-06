import java.util.Arrays;

//import java.util.List;
//import java.util.ArrayList;

import java.util.Comparator;
import java.util.Random;
  
public class Explore {
 
  public static void main(String[] args) {
    
    String[] friends = new String[3];  // -> [ null, null, null ]
    friends[0] = "Cecy";
    friends[1] = "Beth";
    friends[2] = "Anne";
    
    String[] newFriends = {"Emma", "Flor", "Dina"};  // array literal
    
    String[] otherFriends;
    // otherFriends = {"Gwen", "Hope"}; // --> Error
    otherFriends = new String[]{"Hope", "Gwen"};
    
    // Enhanced for loop over an iterable:
    for (String friend : friends) {
      System.out.printf("Hey %s! The movie starts at 19h.%n", friend);
    }
    
    // Ye olde unhenanced for loop:
    for (int i = 0; i < friends.length; i++) {
      System.out.printf("Hey %s! Correction: it starts at 20h.%n",
                        friends[i]);
    }
    
    // Multidimensional arrays:
    
    int[][] scoreCards = {
      {1, 2, 1, 5, 2, 4, 4, 4, 3, 6, 1, 2, 5, 4, 3, 2, 6, 3},
      {2, 3, 5, 1, 1, 2, 3, 1, 1, 2, 4, 1, 3, 3, 2, 6, 3, 2},
      {4, 4, 2, 1, 2, 2, 1, 4, 2, 2, 2, 3, 2, 5, 8, 1, 2, 2}
    };
    
    for (int i = 0; i < friends.length; i++) {
      System.out.printf("%n%s:%n", friends[i]);
      for (int j = 0; j < scoreCards[i].length; j++) {
        System.out.printf("Score hole %d: %d%n", j+1, scoreCards[i][j]);
      }
    }
    
    // ARRAY'S LENGTH IS IMMUTABLE.
    // To add a new element, create a new array:

    System.out.printf("%nfriends:%n");
    for (String friend : friends) {
      System.out.println(friend);
    }
    
    String[] friendsAndMe = new String[4];
    System.arraycopy(friends,         // source
                     0,               // source position
                     friendsAndMe,    // destination
                     0,               // destination position
                     friends.length); // length (no. of elements to copy)
    System.out.printf("%nfriendsAndMe:%n");
    for (String friend : friendsAndMe) {
      System.out.println(friend);
    }
    
    // alternatively, use import java.util.Arrays at the top and use:
    String[] friendsAndMe2 = Arrays.copyOf(friends,
                                           friends.length + 1);
    System.out.printf("%nfriendsAndMe2:%n");
    for (String friend : friendsAndMe2) {
      System.out.println(friend);
    }
    
    // All of this is a bit messy: fortunately, there are other data structures to make this easier: Lists, and ArrayLists (to study later)
    /*
    // This is using Generic syntax, we'll get to it...
    List<String> friends2 = new ArrayList<>(); 
    System.out.printf("%nfriends2:%n");
    for (String friend : friends2) {
      System.out.println(friend);
    }
    friends2.add("Ben"); // adds "Ben" to the friends list
    System.out.printf("%nfriends2:%n");
    for (String friend : friends2) {
      System.out.println(friend);
    }
    System.out.printf("size? %d%n", friends2.size()); // returns 1
    System.out.printf("contains Ben? %b%n", friends2.contains("Ben")); // returns true
    friends2.remove("Ben");
    System.out.printf("%nfriends2:%n");
    for (String friend : friends2) {
      System.out.println(friend);
    }
    System.out.printf("size? %d", friends2.size()); // returns 0
    */
    
    System.out.println();
    
    // COMPARETO
    
    System.out.printf("Sorting arrays of strings uses comparison of strings:%n");
    System.out.println("Apple".compareTo("Banana"));
    System.out.println("Apple".compareTo("Apple"));
    System.out.println("Banana".compareTo("Apple"));
    System.out.println();

    // SORTING
    
    Arrays.sort(friends);
    System.out.printf("%nfriends:%n");
    for (String friend : friends) {
      System.out.println(friend);
    }
    System.out.println();
    
    // Sort by string length of each name in the list (requires java.utils.Comparator).
    // The argument of the static method .comparing of the Comparator class is a "method reference" indicating
    // how to get the property to compare (the array elements are all strings with the length property):
    String[] diffLengthNames = {"Christine", "Anne", "Bethy",};  // array literal
    Arrays.sort(diffLengthNames,
                Comparator.comparing(String::length).reversed());  // reversed for longer name first
    System.out.printf("%ndiffLengthNames:%n");
    for (String friend : diffLengthNames) {
      System.out.println(friend);
    }
    System.out.println();
    
  }
  
}

public String pickLunchSpot(String... spots) {    // pass zero or more (array) elemnts
  System.out.printf("Random picking %d lunch spots.%n", spots.length);
  Random random = new Random();
  return spots[random.nextInt(spots.length)];
}

pickLunchSpot("Mexican", "Japanese");

/*
Default values for types
------------------------
byte: 0
short: 0
int: 0
long: 0L
float: 0.0f
double: 0.0d
char: '\u0000'
String (or any object): null
boolean: false
*/

/*
Classes Implementing Comparable
-------------------------------
Class	        Natural Ordering
Byte	        Signed numerical
Character	    Unsigned numerical
Long	        Signed numerical
Integer  	    Signed numerical
Short	        Signed numerical
Double	      Signed numerical
Float	        Signed numerical
BigInteger  	Signed numerical
BigDecimal  	Signed numerical
Boolean	      Boolean.FALSE < Boolean.TRUE
File	        System-dependent lexicographic on path name
String	      Lexicographic
Date          Chronological
CollationKey	Locale-specific lexicographic
*/