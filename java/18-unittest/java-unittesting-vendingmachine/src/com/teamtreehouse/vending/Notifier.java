package com.teamtreehouse.vending;


public interface Notifier {  // to notify upon sell
    // Constructor dependency injection (DI): allows to easy switch implementation as needed (best practice).
    void onSale(Item item);
}
