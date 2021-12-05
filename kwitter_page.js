//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img src='tick.png' class = 'user_tick'> </h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id +" onclick='updatelike(this.id)' value="+like+"";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row = name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();
function updatelike(message_id){
    console.log("clicked on like button - " + message_id);
     button_id = message_id; 
     likes = document.getElementById(button_id).value; 
     updated_likes = Number(likes) + 1; 
     console.log(updated_likes); 
     firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
