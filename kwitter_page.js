//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
childData = childSnapshot.val();
if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
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
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

