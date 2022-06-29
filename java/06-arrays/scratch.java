// To test this in jshell, load it with "/open scratch.java":

public String pickLunchSpot(String... spots) {    // pass zero or more (array) elemnts
  if (spots.length != 0) {
    System.out.printf("Random picking %d lunch spots.%n", spots.length);
    Random random = new Random();
    return spots[random.nextInt(spots.length)];
  }
  else {
    return "No one suggested anything";
  }
}

// Type this then in jshell:
// pickLunchSpot("Mexican", "Japanese", "Italian");
// pickLunchSpot();
