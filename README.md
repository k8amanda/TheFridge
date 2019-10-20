# TheFridge
KATE IS A KOOL KUKUMBER 
***NOTES***
-The file App_final_deal.js is the file to use to run the code.
-To run postgres server: Download PostgreSQL. To instantiate the database tables:
    sudo -i -u postgres psql TheFridge < PostgreSQL_Scripts/fridge_database_init.sql
 - To initialize values in the database:
    sudo -i -u postgres psql TheFridge < PostgreSQL_Scripts/populate_fridge.sql
- To run the NodeJS server, download NodeJS and NPM. 
    cd NodeJS_Server; node app.js

If you cannot download PostgreSQL, functional demo not connected to the database can be run with the file app_demo.js.

Overview
The Fridge is a system that allows you to keep track of all perishable foods in your fridge before they expire. No more moldy berries!

Input all of your perishables and their expiration dates into your Fridge. You can add and delete items at your whim.

How we Built it
We used mainly React-native for the front and back end as well as postgreSQL for the database. We began by creating 3 separate one page documents to get the style and format of all our pages; these pages were the default Home screen to open your Fridge, the Fridge screen which holds all items and expiry dates you have inputted, and the Add screen where you can submit another food item while still being able to see all items you currently have.

Once we had each individual page functional and structured, we combined them into one javascript file, each under a different class. This was so we could link the pages with navigation. Finally, we connected all three pages with the database. The trickiest parts of the build was the installation of everything revolving around the software of react-native. The navigation and notification systems in particular are not created at the developers expense (@Paul).

Our Main Goal
Our main goal for this event was to get something that could actually work as an app. We are proud to say that we achieved this! Our app adds, deletes, and displays your list of food and expiration dates, so you drink the milk a week early instead of a week late.

Next in Store for The Fridge
Notifications, and more notifications. The notification system was a challenge to fully implement, so we hope to be able to incorporate this in the near future so that you will be able to get pinged some default or user-set number of times before your food expires. Being reminded about your food will keep those unfortunate smells out of your kitchen!

Another challenge we hope to solve in the future is creating a Recipe Book. We would have an offline database of recipes and recommend to the user the closest matching recipes to the ingredients they have in their Fridge.

In the future, we would like to implement a social media aspect of this application. This page would be called Potluck and it would allow you to plan a dinner party with your friends. You would make a menu based on the collective ingredients you all have. This would involve creating a system for usernames and passwords, another page for Profiles where users could seek each other out, and possibly implementing a group messaging system for users to discuss their dinner plans!

Technologies
React-native, Postgresql, node.js, Photoshop, Snack, Git Bash


Created by: James Cameron, Andrew Cervantes, Kate Hanson, Paul Roche, and Andrew Wang
