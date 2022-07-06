package com.teamtreehouse;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;


public class Prompter {
    private BufferedReader mReader;
    private Set<String> mCensoredWords;

    public Prompter() {
        mReader = new BufferedReader(new InputStreamReader(System.in));
        loadCensoredWords();
    }

    private void loadCensoredWords() {
        mCensoredWords = new HashSet<String>();
        Path file = Paths.get("resources", "censored_words.txt");
        List<String> words = null;
        try {
            // It was set at level 7 upon load, changed to 18 (default)
            words = Files.readAllLines(file);
        } catch (IOException e) {
            System.out.println("Couldn't load censored words");
            e.printStackTrace();
        }
        mCensoredWords.addAll(words);
    }

    public void run(Template tmpl) {
        List<String> words = null;
        try {
            words = promptForWords(tmpl);
        } catch (IOException e) {
            System.out.println("There was a problem prompting for words");
            e.printStackTrace();
            System.exit(0);
        }
        // TODO:csd - Print out the results that were gathered here by rendering the template  --- DONE
        String results = tmpl.render(words);
        System.out.printf("%nYour TreeStory:%n%n   '%s'%n", results);
    }



    /**
     * Prompts user for each of the blanks
     *
     * @param tmpl The compiled template
     * @return
     * @throws IOException
     */
    public List<String> promptForWords(Template tmpl) throws IOException {
        List<String> words = new ArrayList<String>();
        for (String phrase : tmpl.getPlaceHolders()) {
            String word = promptForWord(phrase);
            words.add(word);
        }
        return words;
    }


    /**
     * Prompts the user for the answer to the fill in the blank.  Value is guaranteed to be not in the censored words list.
     *
     * @param phrase The word that the user should be prompted.  eg: adjective, proper noun, name
     * @return What the user responded
     */
    public String promptForWord(String phrase) {
        // TODO:csd - Prompt the user for the response to the phrase, make sure the word is censored, loop until you get a good response. -- DONE
        String word = null;
        System.out.printf("> Give me a(s) %s: ", phrase);

        try {
            word = mReader.readLine();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }

        if (mCensoredWords.contains(word)) {
            System.out.printf("That's a censored word. Try again%n");
            word = promptForWord(phrase);
        }
        return word;
    }

    public String promptForStory() {
        String story = null;
        System.out.printf("%nType here your story template:%n");
        try {
            story = mReader.readLine();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
        System.out.println("");
        return story;
    }

}
