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

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class = 'room_name' id= '+Room_names' onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
 //End code
 });});}
getData();


function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}