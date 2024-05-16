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

function nextpage()
{
    window.location="checkout.html";
}


function addMenu2(){
      console.log("check4")
      burger = document.getElementById("burger").value;
      firebase.database().ref("/").child("burger").update({
            purpose: "adding burger"
      });
      localStorage.setItem("burger", burger);
}
function addMenu3(){
      pizza = document.getElementById("pizza").value;
      firebase.database().ref("/").child("pizza").update({
            purpose: "adding pizza"
      });
      localStorage.setItem("pizza",pizza);
}
function addMenu4(){
      console.log("check4")
      burrito_bowl = document.getElementById("burrito_bowl").value;
      firebase.database().ref("/").child("burrito_bowl").update({
            purpose: "adding burrito_bowl"
      });
      localStorage.setItem("burrito_bowl", burrito_bowl);
}
function addMenu5(){
      console.log("check5")
      tandoori = document.getElementById("tandoori").value;
        firebase.database().ref("/").child("tandoori").update({
              purpose: "adding tandoori"
        });
        localStorage.setItem("tandoori", tandoori);
}
function addMenu1(){
      console.log("check6")
      pesto_pasta = document.getElementById("pesto_pasta").value;
        firebase.database().ref("/").child("pesto_pasta").update({
              purpose: "adding pesto_pasta"
        });
        localStorage.setItem("pesto_pasta", pesto_pasta);
}
function addMenu6(){
     
      dumplings = document.getElementById("dumplings").value;
        firebase.database().ref("/").child("dumplings").update({
              purpose: "adding dumplings"
        });
        localStorage.setItem("dumplings", dumplings);
}
function addMenu7(){
      
       lemon_tea = document.getElementById("lemon_tea").value;
        firebase.database().ref("/").child("lemon_tea").update({
              purpose: "adding lemon_tea"
        });
        localStorage.setItem("lemon_tea", lemon_tea);
}
function addMenu8(){
      console.log("check8")
      wine = document.getElementById("wine").value;
       firebase.database().ref("/").child("wine").update({
             purpose: "adding wine"
       });
       localStorage.setItem("wine", wine);
}
function addMenu9(){
      
      coca_cola = document.getElementById("coca_cola").value;
       firebase.database().ref("/").child("coca_cola").update({
             purpose: "adding coca_cola"
       });
       localStorage.setItem("coca_cola", coca_cola);
}
function addMenu10(){
      
      ice_cream = document.getElementById("ice_cream").value;
       firebase.database().ref("/").child("ice_cream").update({
             purpose: "adding ice_cream"
       });
       localStorage.setItem("ice_cream", ice_cream);
}
function addMenu11(){
      
      lava_cake = document.getElementById("lava_cake").value;
       firebase.database().ref("/").child("lava_cake").update({
             purpose: "adding lava_cake"
       });
       localStorage.setItem("lava_cake", lava_cake);
}
function addMenu12(){
      
      cheesecake = document.getElementById("cheesecake").value;
       firebase.database().ref("/").child("cheesecake").update({
             purpose: "adding cheesecake"
       });
       localStorage.setItem("cheesecake", cheesecake);
}




