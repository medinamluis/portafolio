package com.teamtreehouse.jobs;

import com.teamtreehouse.jobs.model.Job;
import com.teamtreehouse.jobs.service.JobService;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class App {

  public static void main(String[] args) {
    JobService service = new JobService();
    boolean shouldRefresh = false;
    try {
      if (shouldRefresh) {
        service.refresh();
      }
      List<Job> jobs = service.loadJobs();
      System.out.printf("Total jobs:  %d %n %n", jobs.size());
      explore(jobs);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private static void explore(List<Job> jobs) {
    // Your amazing code below...

    // Imperative vs. Declarative streams:
    /*
    System.out.println("printPortlandJobsImperatively:");
    printPortlandJobsImperatively(jobs);
    System.out.println("printPortlandJobsStream:");
    printPortlandJobsStream(jobs);

    System.out.println("getThreeJuniorJobsImperatively:");
    getThreeJuniorJobsImperatively(jobs).forEach(System.out::println);
    System.out.println("getThreeJuniorJobsStream:");
    getThreeJuniorJobsStream(jobs).forEach(System.out::println);

    System.out.println("getCaptionsImperatively:");
    getCaptionsImperatively(jobs).forEach(System.out::println);
    System.out.println("getCaptionsSteam:");
    getCaptionsSteam(jobs).forEach(System.out::println);

    System.out.println("getSnippetWordCountsImperatively:");
    getSnippetWordCountsImperatively(jobs)
      .forEach((key, value) -> System.out.printf("'%s' occurs %d times %n", key, value)); // takes a BiConsumer (two values)
    System.out.println("getSnippetWordCountsStream:");
    getSnippetWordCountsStream(jobs)
      .forEach((key, value) -> System.out.printf("'%s' occurs %d times %n", key, value));
    */

    // ------------------------------------------------------------------------

    // NOTE: To create a stream from objects that aren't in a collection:
    /*
    Stream.of("hello", "this", "is", "a", "stream")  // takes a varargs (arbitrary no. of elements, or a list)
            .forEach(System.out::println);
    */

    // ------------------------------------------------------------------------

    // REDUCTION OPERATIONS:
    /*
    System.out.println(
      IntStream.of(1, 2, 3, 4)
              .filter(i -> i <4)
              .sum()      // A reduction operation: Returns 6
              // Alternatively:
              //.min()      // A reduction operation. Returns OptionalInt[1] to state that the value is either present or absent (to foresee empty arrays and avoid nulls)
              //.average()  // A reduction operation. Returns OptionalDouble[2.5]
    );

    // Average no. of characters in the companies' names
    System.out.println(
            jobs.stream()
                    .map(Job::getCompany)
                    .mapToInt(String::length)
                    .max()
    );

    // Company with the largest name:
    System.out.println(
      jobs.stream()
              .map(Job::getCompany)
              .max(Comparator.comparingInt(String::length))  // equiv. to (co1, co2) -> co1.length() - co2.length()
    );
    */

    // ------------------------------------------------------------------------

    // OPTIONALS - the absence or presence of a value
    /*
    // Find first occurrence
    String searchTerm = "NotFound";  // "Java", or "NotFound" to test result when element no occurrence found
    Optional<Job> foundJob = luckySearchJob(jobs, searchTerm);

    // These print statements will break if no occurrence is found
    // System.out.println(foundJob);
    // System.out.println(foundJob.isPresent());
    // System.out.println(foundJob.get());

    // This is safe (Imperatively):
    if (foundJob.isPresent()) { // <--- Always check if present when going Imperative to avoid Null Pointer Exceptions...
      System.out.println(foundJob.get().getTitle());
    } else {
      System.out.println("No jobs found");
    }

    // But it can be even improved (Declaratively) -- it will just be skipped if no job is found...
    // if no "else" needed:
    // foundJob.ifPresent(job -> System.out.println(job.getTitle()));
    // with else:

    System.out.println(foundJob
                          .map(Job::getTitle)
                          .orElse("No jobs found"));
    */

    // ------------------------------------------------------------------------

    // RANGES:

    List<String> companies = jobs.stream()
                                  .map(Job::getCompany)
                                  .distinct()   // a stateful intermediate operation -- keeps track of everything that goes through...
                                  .sorted()
                                  .collect(Collectors.toList());
    /*
    displayCompaniesListImperatively(companies);
    System.out.println("");
    displayCompaniesListUsingRange(companies);
    System.out.println("");

    // Infinite Streams. For example, to split results (a large number) into pages with 10 results each:
    int pageSize = 10;
    int numPages = companies.size() / pageSize;
    // The second parameter is a function that will return 1+20=21, 21+20=41, 41+20=62, etc. ad infinitum...
    IntStream.iterate(1, i -> i + pageSize)
            .mapToObj(i -> String.format("%d. %s", i, companies.get(i-1)))
            .limit(numPages)  // you have to specify when to stop! here, the total no. of pages
            .forEach(System.out::println);
    */

    // PURE FUNCTIONS (Do not modify anything OUTSIDE their scope, i.e. do not cause SIDE EFFECTS):
    // Pure function can be memoized, i.e. store their output after running once, since they always return the same output for the same input
    // I/O is considered side effect
    /*
    companies.stream()
            .peek(company -> System.out.println("===>" + company)) // non-pure: takes in a Consumer - a side effect that does not return anything
            .filter(company -> company.startsWith("N"))
            .forEach(System.out::println);  // non-pure: takes in a Consumer - a side effect that does not return anything

    */

    // HIGHER ORDER FUNCTIONS: accept and/or return functions
    /*
    Job firstJob = jobs.get(0);
    System.out.println("First job: " + firstJob);

    Predicate<Job> caJobChecker = job -> job.getState().equals("CA");

    Job caJob = jobs.stream()
            .filter(caJobChecker)
            .findFirst()
            .orElseThrow(NullPointerException::new);


    // Our higher order function:
    emailIfMatches(firstJob, caJobChecker);  // won't send email unless it's in CA
    emailIfMatches(caJob, caJobChecker);     // will always send email since it's in CA by construction
    emailIfMatches(caJob, caJobChecker.and(App::isJuniorJob));   // logically combining several predicates into a single one - won't send email unless it's in CA and junior
    */

    // FUNCTION COMPOSITION
    // From the first 5 job, take their date and change their format into: M / dd / yy

    Function<String, LocalDateTime> dateConverter =
            dateString -> LocalDateTime.parse(dateString, DateTimeFormatter.RFC_1123_DATE_TIME);

    Function<LocalDateTime, String> dateToCustomStringFormatter =
            date -> date.format(DateTimeFormatter.ofPattern("M / d / YY"));

    Function<String, String> dateToCustomStringConverter = dateConverter.andThen(dateToCustomStringFormatter);

    jobs.stream()
        .map(Job::getDateTimeString)
        .limit(5)
        // Replace the following 2 maps...
        //.map(dateConverter)
        //.map(dateToCustomStringFormatter)
        // with...
        // .map(dateConverter.andThen(dateToCustomStringFormatter))
        // or even better, after extracting them into a single composite function...
        .map(dateToCustomStringConverter)
        .forEach(System.out::println);

    // CLOSURES

    // This function composition can also be replaced by a new createDateStringConverter which takes a string and
    // returns a function:
    Function<String, String> converter = createDateStringConverter(DateTimeFormatter.RFC_1123_DATE_TIME, DateTimeFormatter.ISO_DATE);
    jobs.stream()
            .map(Job::getDateTimeString)
            .limit(5)
            .map(converter)
            .forEach(System.out::println);

  }

// ========================================================================

  private static void printPortlandJobsImperatively(List<Job> jobs) {
    for (Job job : jobs) {
      if (job.getState().equals("OR") && job.getCity().equals("Portland")) {
        // remember println is internally calling job.toString()
        System.out.println(job);
      }
    }
  }

  private static void printPortlandJobsStream(List<Job> jobs) {
    // To use the "filter" method on streams. It will still shortcut for each element efficiency if applicable
    // Filter uses the predicate functional interface (takes a parameter, return boolean)
    jobs.stream()
            .filter(job -> job.getState().equals("OR"))
            .filter(job -> job.getCity().equals("Portland"))
            .forEach(System.out::println);
  }

  // ------------------------------------------------------------------------

  public static List<Job>  getThreeJuniorJobsImperatively(List<Job> jobs) {
    List<Job> juniorJobs = new ArrayList<>();
    for (Job job : jobs) {
      if (isJuniorJob(job)) {
        juniorJobs.add(job);
        if (juniorJobs.size() >= 3) {
          break;
        }
      }
    }
    return juniorJobs;
  }

  private static List<Job> getThreeJuniorJobsStream(List<Job> jobs) {
    // We use the "limit" method on streams, a stateful intermediate operation that knows how many
    // occurrences have happened, good for short-circuiting
    return jobs.stream()
            .filter(App::isJuniorJob)
            .limit(3)
            .collect(Collectors.toList());
    // DO NOT DO THESE: RELY ON A SIDE EFFECT (SOMETHING OUTSIDE THE STREAM):
    /*
    List<Jobs> juniorJobs = new ArrayList<>();
    jobs.stream()
      .filter(App::isJuniorJob)
      .limit(3)
      .forEach(juniorJobs::add); // instead of a .collect
    return juniorJobs;
     */
  }

  private static boolean isJuniorJob(Job job) {
    String title = job.getTitle().toLowerCase();
    return title.contains("junior") || title.contains("jr");
  }

  // ------------------------------------------------------------------------

  public static List<String>  getCaptionsImperatively(List<Job> jobs) {
    List<String> captions = new ArrayList<>();
    for (Job job : jobs) {
      if (isJuniorJob(job)) {
        captions.add(job.getCaption());
        if (captions.size() >= 3) {
          break;
        }
      }
    }
    return captions;
  }

  private static List<String> getCaptionsSteam(List<Job> jobs) {
    // To use the "map"
    // Map uses the function functional interface (takes a parameter, return a parameter)
    // Note the method reference inference in map:
    //     While isJuniorJob is static method lf the App class,
    //     getCaption is not. To be able to run, it needs to be run
    //     on an instance job of Job. This  instantiation is
    //     precisely inferred implicitly by the method reference
    return jobs.stream()
            .filter(App::isJuniorJob)
            //.map(job -> job.getCaption())  which can be rewritten as follows:
            .map(Job::getCaption)
            .limit(3)
            .collect(Collectors.toList());
  }

  // ------------------------------------------------------------------------

  public static Map<String, Long> getSnippetWordCountsImperatively(List<Job> jobs) {

    Map<String, Long> wordCounts = new HashMap<>();

    for (Job job : jobs) {
      // Split in the not-a-word characters:
      String[] words = job.getSnippet().split("\\W+");
      for (String word : words) {
        if (word.length() == 0) {
          continue;
        }
        String lWord = word.toLowerCase();
        Long count = wordCounts.get(lWord);
        if (count == null) {
          count = 0L;
        }
        wordCounts.put(lWord, ++count);
      }
    }
    return wordCounts;
  }

  public static Map<String, Long> getSnippetWordCountsStream(List<Job> jobs) {
    // To use the "flatMap"
    // Data structure for testing:
    // 0. Job / snippet / This is a job
    // 1. Job / snippet / Also a job
    return jobs.stream()
            .map(Job::getSnippet)
            .map(snippet -> snippet.split("\\W+"))
            // from the above, we get an array of words that we must FLATTEN!
            .flatMap(Stream::of)   // i.e. words -> Stream.of(words)
            .filter(word -> word.length() > 0)
            .map(String::toLowerCase)
            .collect(Collectors.groupingBy(
                    Function.identity(),      // Replaces the common word -> word,
                    Collectors.counting()
            ));
  }

  // ------------------------------------------------------------------------

  private static Optional<Job> luckySearchJob(List<Job> jobs, String searchTerm) {
    // To study optionals
    Optional<Job> foundJob = jobs.stream()
            .filter(job -> job.getTitle().contains(searchTerm))
            .findFirst();  // a terminal operation
    return foundJob;
  }

  // ------------------------------------------------------------------------

  private static void displayCompaniesListImperatively(List<String> companies) {
    for (int i = 0; i < 20; i++) {
      System.out.printf("%d. %s %n", i + 1, companies.get(i));
    }
  }

  private static void displayCompaniesListUsingRange(List<String> companies) {
    // use .range instead of .rangeClosed to exclude the max (20)
    IntStream.rangeClosed(1, 20)
            .mapToObj(i -> String.format("%d. %s", i, companies.get(i-1)))
            .forEach(System.out::println);
  }

  // ------------------------------------------------------------------------

  public static void emailIfMatches(Job job, Predicate<Job> checker) {
    // A higher order  function: We only want a boolean parameter (hence the Predicate) to determine if the email will
    // be sent. The specific criteria to determine that boolean choice (what makes a job match?) are left out of the
    // function, and will be assessed by a(n arrow) function passed as the Predicate -> higher order function
    if (checker.test(job)) {
      System.out.println("Sending email about " + job);
      // email instructions to be added here
    }
  }

  public static Function<String, String> createDateStringConverter(DateTimeFormatter inFormatter, DateTimeFormatter outFormatter) {
    // To study closures. Returns a function.
    int variableStoredInLexicalScope = 0;    // Imagine we want to count the jobs. This variable is stored in lexical scope since the function will need it whenever we call .apply on it
    //variableStoredInLexicalScope += 1;   // It must be FINAL or EFFECTIVELY FINAL, otherwise we are asked to do so (here, using the IDE's help, define a new variable (based on the original) that indeed is effectively final -> prevents breaking pure function principle
    //int finalVariableStoredInLexicalScope = variableStoredInLexicalScope;
    return dateString -> {
                            return variableStoredInLexicalScope + LocalDateTime.parse(dateString, inFormatter).format(outFormatter);
                          //return finalVariableStoredInLexicalScope + LocalDateTime.parse(dateString, inFormatter).format(outFormatter);
                            // Modifying the original variableStoredInLexicalScope here with
                            //variableStoredInLexicalScope += 1;
                            // and attempting to use it in
                            //      return variableStoredInLexicalScope + LocalDateTime.parse(dateString, inFormatter).format(outFormatter);
                            // is not going to be a good idea -> the IDE will suggest to change:
                            //      int variableStoredInLexicalScope = 0;   --->    final int[] variableStoredInLexicalScope = {0};
                            // and then
                            //      return variableStoredInLexicalScope[0] + LocalDateTime.parse(dateString, inFormatter).format(outFormatter);
                            // This variable is gonna keep changing in parallel processes....
    };
  }

}


