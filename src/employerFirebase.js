import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import {} from "./main";
import {} from "./emloyeer";

const firebaseConfig = {
  apiKey: "AIzaSyDoC94Xlt0BHfsH_zLp8562xsKMW49mv8s",
  authDomain: "job-meister.firebaseapp.com",
  projectId: "job-meister",
  storageBucket: "job-meister.appspot.com",
  messagingSenderId: "51579629977",
  appId: "1:51579629977:web:eae8590655f4e102e2e308",
  measurementId: "G-W33GWTB6JB",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);
const auth = getAuth();
let logEmail;
let allUsers = [];
let usernumber, useremail, userfirstname, userlastname;
let flag = 0;
let darkflag = 0;
let textflag = 0;
let sended = [];

// onAuthStateChanged(auth,(user)=>{
//   console.log("User status changed",user);

//   if(user==null) {
//     location.href="404.html"
//   }
// })

const adColRef = collection(db, "Ads");
const docAllusers = collection(db, "users");
const sendLinks = collection(db, "Sendedlinks");
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    allUsers.push({ ...doc.data(), id: doc.id });
  });
  let userq = allUsers.length;
  console.log(allUsers);

  for (let index = 0; index < userq; index++) {
    if (allUsers[index].email == logEmail) {
      useremail = allUsers[index].email;
      userfirstname = allUsers[index].firstname;
      userlastname = allUsers[index].lastname;
    }
  }
  document.querySelector("#welcometext").innerHTML =
    "<p id=welcometext class='lead text-muted'>ברוך הבא " +
    userfirstname +
    ", הנה המודעות שפירסמת באתרנו</p>";
});

onAuthStateChanged(auth, (user) => {
  console.log("User status changed", user);
  if (user != null) {
    logEmail = user.email;
  } else {
    location.href = "index.html";
  }
});

const logoutButton = document.querySelector(".logoutBtn");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("signout");
      location.href = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
    });
});

var adSize;
var countAds = 0;
getDocs(adColRef)
  .then((snapshot) => {
    let Ads = [];
    snapshot.docs.forEach((doc) => {
      Ads.push({ ...doc.data(), id: doc.id });
    });
    adSize = Ads.length;
    console.log(Ads);
    for (let index = 0; index < adSize; index++) {
      let indexR = index + 1;
      if (Ads[index].emailofemployer == useremail) {
        countAds++;
        $("#try1").append(
          "<div class='col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
            Ads[index].imgid +
            ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
            Ads[index].title +
            "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
            Ads[index].des +
            "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='delbtn" +
            index +
            "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#exampleModal'>מחיקה</button><button id='view" +
            index +
            "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modal2'>צפה</button></div>" +
            (Ads[index].accepted == true
              ? "<small class='text-success'>מאושר ✔</small>"
              : "<small class='text-danger'>ממתין לאישור</small>") +
            "<small class='text-muted'>"+Ads[index].Date+"</small></div></div></div></div>"
        );
      }
    }
    document.querySelector("#adC").innerHTML = countAds;
    getDocs(sendLinks).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        sended.push({ ...doc.data(), id: doc.id });
      });
      console.log(sended);
    });
    for (let index = 0; index < adSize; index++) {
      const buttonE = document.getElementById("delbtn" + index);
      const buttonE2 = document.getElementById("view" + index);
      const buttonBell = document.getElementById("bell");
      const notfimodal = document.getElementById("modalNoti");
      if (buttonE) {
        buttonE.addEventListener("click", function () {
          var buttonD = document.getElementById("YesDelete");
          if (buttonD) {
            buttonD.addEventListener("click", function () {
              console.log("the index is:", index);
              console.log(Ads[index]);
              var docDelAds = doc(db, "Ads", Ads[index].id);
              deleteDoc(docDelAds).then(() => {
                location.reload();
              });
            });
          }
        });
      }
      if (buttonE2) {
        buttonE2.addEventListener("click", function () {
          document.querySelector("#Mtitle").innerHTML = Ads[index].title;
          if (Ads[index].company == null) {
            document.querySelector("#Mcompany").innerHTML = "חסוי";
          } else {
            document.querySelector("#Mcompany").innerHTML = Ads[index].company;
          }
          document.querySelector("#Mlocation").innerHTML = Ads[index].location;
          document.querySelector("#Mdescribe").innerHTML = Ads[index].des;
          document.querySelector("#Maccepted").innerHTML =
            Ads[index].accepted == true
              ? "<small class='text-success'>אושר ופורסם באתרנו ✔</small>"
              : "<small class='text-danger'>ממתין לאישור האדמין </small>";
          document.querySelector("#Mreq").innerHTML = Ads[index].req;
          document.querySelector("#Mviews").innerHTML =
            Ads[index].viewsCount + " <i class='fa-regular fa-eye'></i>";
          document.querySelector("#Mdep").innerHTML = Ads[index].dep;
          document.querySelector("#Mpercent").innerHTML = Ads[index].percent;
          document.querySelector("#Mimg").src =
            "/dist/img/occpics/occ" + Ads[index].imgid + ".jpeg";
        });
      }

      $(document).ready(function () {
        var down = false;

        $("#bell").click(function (e) {
          var color = $(this).text();
          if (down) {
            
            $("#box").css("height", "0px");
            $("#box").css("opacity", "0");
            down = false;
          } else {
            $("#box").css("height", "auto");
            $("#box").css("opacity", "1");
            down = true;
          }
          console.log("checkbell");
          let sendedLength = sended.length;
          console.log(sendedLength);
          let userNotifCount = 0;
          // for (let i = 0; i < sendedLength; i++) {
          if (sended[index].emailofemployer == useremail) {
            userNotifCount++;
            console.log("chgeckit" + index);
            $("#box").append(
              "<div id='added2' class='added2 notifications-item' data-bs-toggle='modal' data-bs-target='#modalNoti'> <img src='/dist/img/occpics/occ" +
                Ads[index].imgid +
                ".jpeg' alt='img'> <div class='text mx-2'><h6>המשתמש " +
                sended[index].nameOfsender +
                " הגיש קורות חיים למשרתך</h6<p> לחץ כאן על מנת לראות פרטים</p> </div></div>"
            );
            "/dist/img/occpics/occ" + Ads[index].imgid + ".jpeg";
            // if (notfimodal) {
            //   document.querySelector("#Mnotfirst").innerHTML = 0;
            //   document.querySelector("#Mnotlast").innerHTML = 0;
            //   document.querySelector("#Mnotage").innerHTML = 0;
            //   document.querySelector("#Mnotgender").innerHTML = 0;
            //   document.querySelector("#Mnotocc").innerHTML = 0;
            //   document.querySelector("#Mnotemail").innerHTML =
            //     sended[index].emailOfSender;
            //   document.querySelector("#Mnotlink").innerHTML =
            //     sended[index].downloadLink;
            //   document.querySelector("#Mnotimg").src =
            //     "/dist/img/occpics/occ" + Ads[index].imgid + ".jpeg";
            // }
          }
          $("#Added2").remove();
          $(".Added2").remove();
          $("#bell").click(function () {
            $("#box").removeClass(".added");
          });
          document.querySelector("#notifcount").innerHTML = userNotifCount;
          // }
        });
      });
      
      // });
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

$("#darkBtn").click(function () {
  if (darkflag === 0) {
    $("#body").addClass("darkMode");
    $("#body").removeClass("bg-gray-200");
    $("#divDark").addClass("text-white");
    $("#adminDark").addClass("text-white");

    darkflag = 1;
  } else {
    $("#body").addClass("bg-gray-200");
    $("#body").removeClass("darkMode");
    $("#divDark").removeClass("text-white");
    $("#adminDark").removeClass("text-white");
    darkflag = 0;
  }
});

$("#largeFont").click(function () {
  if (textflag === 0) {
    $("p").addClass("largeFont");
    $("h1").addClass("largerH");
    $("body").addClass("largeFont");
    $(".navG").addClass("mediumFont");

    textflag = 1;
  } else {
    $("p").removeClass("largeFont");
    $("h1").removeClass("largerH");
    $("body").removeClass("largeFont");
    $(".navG").removeClass("mediumFont");

    textflag = 0;
  }
});

$("#acessability").click(function () {
  if (flag === 0) {
    $("#acessability").addClass("widthAccess");
    flag = 1;
  } else {
    $("#acessability").removeClass("widthAccess");
    flag = 0;
  }

  $("#accessMenu").toggle("drop");
  return false;
});
