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

  function addUser()
  {
      user_name - document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
  }