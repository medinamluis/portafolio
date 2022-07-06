package com.teamtreehouse.vending;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AlphaNumericChooserTest {

    private AlphaNumericChooser chooser;

    @Before
    public void setUp() throws Exception {
        chooser = new AlphaNumericChooser(26, 10);
    }

    @Test  // Happy path (intended usage, vs. edge cases)
    public void validInputReturnsProperLocation() throws Exception {
        // Note that we will throw an Exception (best practice) and not the specific InvalidLocationException
        AlphaNumericChooser.Location loc = chooser.locationFromInput("B4");

        // Useful to put a message to differentiate in case there is an error:
        assertEquals("proper row", 1, loc.getRow());  // Row B = index 1
        assertEquals("proper column", 3, loc.getColumn());  // Column 4 = index 3
    }

    @Test(expected = InvalidLocationException.class)  // we expect the InvalidLocationException
    public void choosingWrongInputIsNotAllowed() throws Exception {
        chooser.locationFromInput("WRONG");  // with the expected in @Test, now it will fail with the correct type of input
    }

    @Test(expected = InvalidLocationException.class)
    public void choosingLargerThanMaxIsNotAllowed() throws Exception {
        chooser.locationFromInput("B52");
    }


}