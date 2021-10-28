//YOUR FIREBASE LINKS


const firebaseConfig = {
      apiKey: "AIzaSyBP6hDm-NovTKVi42GecBT7R1EdLKQnuI4",
      authDomain: "kwitter-f06a6.firebaseapp.com",
      databaseURL: "https://kwitter-f06a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-f06a6",
      storageBucket: "kwitter-f06a6.appspot.com",
      messagingSenderId: "774900860377",
      appId: "1:774900860377:web:148f25b1bcac3e66d4c5c8"
};

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['likes'];
                        name_width_tag = "<h4>" + name + "<img class = 'user_tick' src='tick.png'> </h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value= " + like + "onclick=updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

                        row = name_width_tag + message_width_tag + like_button + span_width_tag;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}

getData();