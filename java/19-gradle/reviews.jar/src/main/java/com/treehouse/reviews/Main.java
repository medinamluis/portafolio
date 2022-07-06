package com.treehouse.reviews;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            CSVPrinter printer = new CSVPrinter(System.out, CSVFormat.EXCEL);
            printer.printRecord("Craig", "Denis", 5, "Love it!");
            // Another review (note the comma in the comment: a potential edge case):
            printer.printRecord("Chris", "Rama", 4, "Pretty good, would be better with an annotation or two");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
