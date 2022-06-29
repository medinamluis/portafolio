package com.teamtreehouse;

public class Main {
    public static void main(String[] args) {

        // Create objects:
        ShopKeeper shopKeeper = new ShopKeeper("Larry");
        Teacup teacup = new Teacup();
        String treehouse = "Treehouse";

        // Loop through Objects to make them chat (if applicable,
        // and we need to cast them into Chattable first):
        Object[] objects = {shopKeeper, teacup, treehouse};

        for (Object object : objects) {
            if (object instanceof Chattable) {
                String response = ((Chattable) object).chat();
                System.out.println(response);
            }
        }

        // Loop through Chattables:
        Chattable[] chattables = {shopKeeper, teacup};

        for (Chattable chattable: chattables) {
            String response = chattable.chat();
            System.out.println(response);
        }

    }
}