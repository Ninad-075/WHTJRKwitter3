//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBP6hDm-NovTKVi42GecBT7R1EdLKQnuI4",
      authDomain: "kwitter-f06a6.firebaseapp.com",
      databaseURL: "https://kwitter-f06a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-f06a6",
      storageBucket: "kwitter-f06a6.appspot.com",
      messagingSenderId: "774900860377",
      appId: "1:774900860377:web:148f25b1bcac3e66d4c5c8"
};

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                    console.log("Room Name - " + Room_names);
                    row = "<div class = 'room_name' id=" + Room_names + "onClick='redirectToRoomName(this.id)' >#" +Room_names + "</div><hr>";
                    document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name" , room_name);
           window.location = "kwitter_msg.html"
}   

      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name" , name)
           window.location = "kwitter_msg.html"
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }