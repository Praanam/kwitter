
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDEAivktgvZNp0uoGzbzxddAgD_Tz3mqF0",
      authDomain: "classtest-1c480.firebaseapp.com",
      databaseURL: "https://classtest-1c480-default-rtdb.firebaseio.com",
      projectId: "classtest-1c480",
      storageBucket: "classtest-1c480.appspot.com",
      messagingSenderId: "375400406489",
      appId: "1:375400406489:web:6f6d596c8c03bde9818dc8",
      measurementId: "G-TNKFXXJ71P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
var firebaseConfig = {
      apiKey: "AIzaSyDEAivktgvZNp0uoGzbzxddAgD_Tz3mqF0",
      authDomain: "classtest-1c480.firebaseapp.com",
      projectId: "classtest-1c480",
      storageBucket: "classtest-1c480.appspot.com",
      messagingSenderId: "375400406489",
      appId: "1:375400406489:web:6f6d596c8c03bde9818dc8",
      measurementId: "G-TNKFXXJ71P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

