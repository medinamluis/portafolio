package com.teamtreehouse.lambdas;

import java.util.List;
import java.util.Collections;
import java.util.Comparator;

public class Main {

    // SORTING LIST OF OBJECTS BASED STRINGS:

    // 1. Old-fashion sorting of arrays using anonymous inline lass
    public static  void usingAnonymousInlineClass() {
        List<Book> books = Books.all();
        // The second argument in Collections.sort is a Comparator class (interface of abstract class) with a single
        // abstract method telling specifying how to sort: requires the override of the compare method (in here,
        // based on book titles) -- CHECK 06-arrays PROJECT:
        Collections.sort(books,
                         new Comparator<Book>() {
                            @Override
                            public int compare(Book b1, Book b2) {
                                // Use the .compareTo() String method:
                                return b1.getTitle().compareTo(b2.getTitle());
                            }
                        }
        );

        for (Book book : books) {
            System.out.println(book);
        }
    }

    // 2. New: using lambdas (anonymous functions outside of classes):

    // 2.1 Long form:
    public static  void usingLambdasInLongForm() {
        List<Book> books = Books.all();
        Collections.sort(books,
                        (Book b1, Book b2) -> { return b1.getTitle().compareTo(b2.getTitle()); } );

        for (Book book : books) {
            System.out.println(book);
        }
    }

    // 2.1 Short form:
    public static  void usingLambdasInShortForm() {
        List<Book> books = Books.all();
        Collections.sort(books, (b1, b2) -> b1.getTitle().compareTo(b2.getTitle()) );

        // The for loop can actually be replaced with the forEach for Colletions:
        books.forEach(book -> System.out.println(book));
    }

    // 3. Alternatively to lambda functions, we can use method references:

    public static  void usingMethodReferences() {
        List<Book> books = Books.all();
        // The second argument is the Comparator.comparing static method (method reference) with a) a function (e.g.
        // a lambda) indicating how to get the property to compare, or b) a method reference indicating the same
        // (in the form C::m, i.e. use the method m of the class C to perform the comparison):
        //Collections.sort(books, Comparator.comparing(b -> b.getTitle()) );
        Collections.sort(books, Comparator.comparing(Book::getTitle) );

        // Method references also work for parameters:
        books.forEach(System.out::println);
    }

    public static void main(String[] args) {
        System.out.printf("%n* usingAnonymousInlineClass:%n");
        usingAnonymousInlineClass();
        System.out.printf("%n* usingLambdasInLongForm:%n");
        usingLambdasInLongForm();
        System.out.printf("%n* usingLambdasInShortForm:%n");
        usingLambdasInShortForm();
        System.out.printf("%n* usingMethodReferences:%n");
        usingLambdasInShortForm();
    }
}