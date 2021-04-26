//firebase things
var firebaseConfig = {
    apiKey: "AIzaSyDiuF9MIhMXO-k19gbO2rE1Wm5RgkmEpxc",
    authDomain: "let-s-chat-3888c.firebaseapp.com",
    databaseURL: "https://let-s-chat-3888c-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-3888c",
    storageBucket: "let-s-chat-3888c.appspot.com",
    messagingSenderId: "843875845502",
    appId: "1:843875845502:web:a6cce62feb98444b579f2f",
    measurementId: "G-1QVRM8R1B1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //functions
  
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");

function logOut() {
    window.location.replace = "index.html";
}
function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData; 
    //Start code 
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag ="<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
    message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
    like_button = "<button class = 'btn btn-warning' id = '" + firebase_message_id + "' value = '" + like+ "' onclick = 'updateLike(this.id)'>";
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: " + like + "</span><button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    //End code 
} }); }); } 
getData();

function updateLike(message_id) {
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});
}

function logout() {
  local_storage.removeItem("user_name") ;
  local_storage.removeItem("room_name");
  window.location.replace = "index.html";
}