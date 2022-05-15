const firebaseConfig = {
    apiKey: "AIzaSyAmhe0unBQkpou9U09jkAgp4zJ8iXWjJ1E",
    authDomain: "letschatwebapp-7a12e.firebaseapp.com",
    projectId: "letschatwebapp-7a12e",
    storageBucket: "letschatwebapp-7a12e.appspot.com",
    messagingSenderId: "730954886084",
    appId: "1:730954886084:web:54a96f27b991a829a59291"
  };
firebase.initializeApp(firebaseConfig);
    
function getData() {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(
        function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;

            function addUser(){
                user_name= document.getElementById("user_name").value;
                firebase.database().ref("/").child(user_name).update({
                purpose : "adding user"
                });
            }

        });});}
getData();



user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_room.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}