package com.teamtreehouse;

public class ShopKeeper extends Person implements Seller  {  // Person already implements Chattable

    ShopKeeper(String name) {
        super(name);
    }

    @Override
    public String chat() {
        return "Hi, I'm a ShopKeeper!";
    }

    @Override
    public void sellGoods() {
        // TODO: Implement the sellGoods method
    }
}
