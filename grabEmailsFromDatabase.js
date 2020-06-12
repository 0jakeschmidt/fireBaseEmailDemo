
//$ npm install firebase-admin --save
var admin = require("firebase-admin");
const fs = require('fs');


// you will need to download a key and replace this path
var serviceAccount = require("/home/user/Downloads/serviceaccountkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yourfirebasename.firebaseio.com",
  databaseAuthVariableOverride: null
});

var db = admin.database();
var ref = db.ref("/emails");
ref.orderByChild("email").on("value", function(snapshot) {

let info = snapshot.val();
parseMe(info);
let data = JSON.stringify(info,null,2);
fs.writeFileSync('emails.json', data);
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});



let writeStream = fs.createWriteStream('emails.txt');


function parseMe(obj)
{
  var keys = Object.keys( obj );
 for( var i = 0,length = keys.length; i < length; i++ ) {
     console.log(obj[ keys[ i ]].email);
     writeStream.write(obj[ keys[ i ]].email +"\n");
 }
}