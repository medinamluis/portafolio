package com.teamtreehouse;

import java.util.Set;
import java.util.TreeSet;

// RUN AS:
// "treehouse:~/workspace$ clear && javac com/teamtreehouse/Systemizer.java && java com.teamtreehouse.Systemizer"
// Notes:
// 1. What we really pass to java is the class name (hence the dots).
// 2. From a different location, say it can be run as "java -cp ~/workspace/ com.teamtreehouse.Systemizer". -cp stands for class path.
// 3. javac is compiles to java bytcode, and be run on any machine with a JVN implementation (java command further compiles into machine code specific for the machine).


public class Systemizer {
  
  // RETRIEVE SYSTEM PROPERTIES:
  
  public static void main(String[] args) {
    System.out.printf("This is the classpath: %s %n",
                      System.getProperty("java.class.path"));  // It outputs "." (default) or "/home/treehouse/workspace/" when run from a different path
    
    // Set (alphabetically ordered) with all the system properties -- useful when making the code dynamic
    // based on what the JVM is:
    Set<String> propNames = new TreeSet<String>( System.getProperties().stringPropertyNames() );
    for (String propName : propNames) {
      System.out.printf("%s is %s%n",
                        propName,
                        System.getProperty(propName));
    }
    
    
    
    
  }
}
  