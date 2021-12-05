// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDXAPeg6J-na9k3wOJ88TTaJ6SXTRODcVY",
    authDomain: "kwitter-project-9da02.firebaseapp.com",
    databaseURL: "https://kwitter-project-9da02-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-9da02",
    storageBucket: "kwitter-project-9da02.appspot.com",
    messagingSenderId: "644436927172",
    appId: "1:644436927172:web:715fa837b7aa283979df91"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
 function addroom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             porpose:"adding room name"
       });
       localStorage.setItem("roomname",room_name);
       window.location="kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
