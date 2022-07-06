package com.teamtreehouse;

import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
	// write your code here
        // TODO:csd - Instantiate a new Prompter object and prompt for the story template --- DONE
        Prompter prompter = new Prompter();
        System.out.printf("%nPlease enter a story template with placeholders in between two double scores, e.g.:%n");
        String storyExample = "Thanks __name__ for helping me out.  You are really a __adjective__ __noun__ and I owe you a __noun__.";
        System.out.printf("   '%s'%n", storyExample);
        String story = prompter.promptForStory();
        Template tmpl = new Template(story);
        // TODO:csd - Use the prompter object to have it do the prompting, censoring and outputting.  Call Prompter.run -- DONE
        /*List<String> fakeResults = Arrays.asList(
                "friend",
                "talented",
                "java programmer",
                "high five");*/
        // TODO:csd - This should really happen in the Prompter.run method, let's get these implemetation details out of the main method -- DONE
        /*String results = tmpl.render(fakeResults);
        System.out.printf("Your TreeStory:%n%n %s %n", results);*/
        prompter.run(tmpl);
    }
}
