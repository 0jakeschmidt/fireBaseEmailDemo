# fireBaseEmailDemo
This website demo's an email capture list on a fully static site using Firebase.

The demo here shows the front end and scripts for making an email collection database on a static website using firebase.

The script is all in javascript and to retrieve the emails the script is all in node.js
The website can be tested locally using express.js the following instructions will walk through how to launch and deploy the website locally.


Instructions for linux
//install node js
$ sudo apt install nodejs
$ sudo apt install npm
 
// in the directory you wish to hold the website files you need to make an init file 
$ npm init

// install express for the local server 
$ npm install express --save

// you will need to change line 6 in the index.js file. the paramter 'blog' is for whatever the name of the directory for your //website files

/*
$ node index.js
should launch the webstie to localhost:3000
now the firebase side will have to be set up
all of the javascript that needs changed is in index.html file for the site.
*/


//after emails are in the database heres how to grab them

//in this file grabEmailsFromDatabase.js change line 8 to match the path where you downloaded your service key
// and change line 12 to match your firebase site name

//from command line run
$ npm install firebase-admin --save
// now run
$ node grabEmailsFromDatabase.js

//this will create a .json and a txt file with the emails from your website
