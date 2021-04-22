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