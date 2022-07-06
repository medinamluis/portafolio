package com.teamtreehouse.vending;

import org.junit.*;

// Static imports: imported static methods from Assert will be accessed simply by their name,
// e.g. fail(), instead of Assert.fail())
import static org.junit.Assert.*;

// First, go to File > Project Structure > Modules > Dependencies and change JUnit4's Scope from Test to Provided (still needed?)


public class CreditorTest {

    // FIXTURES: to annotate methods that set things up every time an instance of the CreditorTest class is
    // created to run a single test case, e.g. all our test create a new Creditor(), so... DRY:

    private Creditor creditor;

    @Before  // Runs before a test. There's also a @BeforeClass, that run before ALL tests.
    public void setUp() throws Exception {
        // No need to import the Creditor object:
        creditor = new Creditor();

    }

    // There's also @After / @AfterClass (AKA tear-down) which run after each test / all tests, respectively,
    // to clean up e.g. removing created test files

    // TEST CASES

    // Quick note: Tests should be F.I.R.S.T.:
    // F - Fast.
    // I - Isolated: make sure you are only testing what you intend to test.
    // R -  Repeatable: Every test run should return the same results.
    // S - Self-verifying. If tests are passing, you should feel safe that things are good to go to production.
    //     If they are failing, you should fix them, and trust that something indeed is broken. Trust trust trust.
    // T - Timely. Write tests either before or as you write code.

    @Test(expected = AssertionError.class)   // we expect a fail(), so it passes
    public void testFail() throws Exception {
        // force a fail (method from org.junit.Assert)
        fail();
    }

    @Test
    public void addingFundsIncrementsAvailableFunds() throws Exception {
        // ARRANGE:
        // Creditor creditor = new Creditor();  --> extracted in the @BeforeClass fixture

        // (best practice: blank line as separator here)

        // ACT:
        creditor.addFunds(25);
        creditor.addFunds(25);
        // comment the line above to see the test fail. It'll show this:
        // java.lang.AssertionError:
        // Expected :50
        // Actual   :25

        // (best practice: blank line as separator here)

        // ASSERT (expected value, actual value):
        assertEquals(50, creditor.getAvailableFunds());
    }

    @Test
    public void refundingReturnsAllAvailableFunds() throws Exception {
        // ARRANGE:
        //Creditor creditor = new Creditor();   --> extracted in the @BeforeClass fixture
        creditor.addFunds(10);

        // ACT:
        int refund = creditor.refund();

        // ASSERT:
        assertEquals(10, refund);
        // We could be tempted to check that the remaining funds are 0 after refund:
        // assertEquals(0, creditor.getAvailableFunds());
        // but it is better to keep cases separate: what if one passes and the other fails – also, the test name
        // might not be the best one now either... So, just make a new one: refundingResetsAvailableFundsToZero
    }

    @Test
    public void refundingResetsAvailableFundsToZero() throws Exception {
        //Creditor creditor = new Creditor();  --> extracted in the @BeforeClass fixture

        creditor.addFunds(10);

        creditor.refund();
        assertEquals(0, creditor.getAvailableFunds());
        assert
    }

    @Test(expected = NotEnoughFundsException.class)
    public void deductBeyondFunds() throws Exception {
        creditor.addFunds(10);

        creditor.deduct(20);
    }


}