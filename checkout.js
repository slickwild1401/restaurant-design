var firebaseConfig = {
  apiKey: "AIzaSyAQl6KDOAlJepBHBCf6otnL0wArgDhIbrk",
  authDomain: "sparshfood.firebaseapp.com",
  databaseURL: "https://sparshfood-default-rtdb.firebaseio.com",
  projectId: "sparshfood",
  storageBucket: "sparshfood.appspot.com",
  messagingSenderId: "962424506133",
  appId: "1:962424506133:web:d7e8e7b808b63e60044b1c"
};


firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/" + burrito).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey != "purpose") {}
    });
  });
}

getData()


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "login.html";
}