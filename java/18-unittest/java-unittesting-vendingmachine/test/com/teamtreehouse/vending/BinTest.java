package com.teamtreehouse.vending;

import org.junit.Before;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

public class BinTest {

    private Bin bin;

    @Before
    public void setUp() throws Exception {
        bin = new Bin(10);
    }

    @Test(expected = IllegalArgumentException.class)
    public void restockingWithDifferentItemsIsNotAllowed() {
        bin.restock("Cheetos", 1, 100, 50);
        bin.restock("Doritos", 1, 100, 50);
    }

    // "C.O.R.R.E.C.T." TESTS:

    //C - What happens when the unit receives data that doesn't Conform to the expected format?

    @Test
    public void whenEmptyPriceIsZero() throws Exception {
        assertEquals(0, bin.getItemPrice());
    }

    @Test
    public void whenEmptyNameIsNull() throws Exception {
        assertNull(bin.getItemName());
    }

    // O - Is the Ordering of values in Lists being returned in the expected order (lists)?
    //
    // R - What happens if you go below the minimum or over the maximum value allowed?
    //
    // R - Does this unit Reference any other code from another unit? Is that other code unit tested?

    @Test(expected = IllegalArgumentException.class)
    public void overstockingNotAllowed() throws Exception {
         bin.restock("Fritos", 1000, 100, 50);  // max is 10
    }

    @Test(expected = IllegalArgumentException.class)
    public void constructingLargerThanAlphabetNotAllowed() throws Exception {
        new AlphaNumericChooser(27,10);
    }

    // E - Remember that Existence is important in most units. Are things allowed to be null? What happens if they are?
    //
    // C - Cardinality: the possible no. of elements in a group. Related to existence, always check what happens when
    //     "0-1-n": there are 0  / there's a single value / multiple values.
    //
    // T - Time, relative/absolute: applications require things to happen in certain order. What happens if it doesn't?

}