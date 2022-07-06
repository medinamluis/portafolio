package com.teamtreehouse.vending;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class VendingMachineTest {

    private VendingMachine machine;

    public class NotifierSub implements Notifier {
        @Override
        public void onSale(Item item) {  // we need to override onSale since Notifier is an interface
            return;  // we won't really do anything here (e.g. don't want to send a notification, for example)
        }

    }

    @Before
    public void setUp() throws Exception {
        Notifier notifier = new NotifierSub();
        machine = new VendingMachine(notifier, 10, 10, 10);
        machine.restock("A1", "Twinkies", 10, 30, 75);
    }

    // Test happy path:

    @Test
    public void vendingWhenStockedReturnsItem() throws Exception {
        machine.addMoney(75);

        Item item = machine.vend("A1");  // we'll see that when we run we'll have gone through our implementation of notifier.onSale

        assertEquals("Twinkies", item.getName());
    }
}