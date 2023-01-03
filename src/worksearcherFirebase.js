import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged, reload } from "firebase/auth";
import {} from "./main";
import {} from "./createad";

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
let Thum = "0";
let Loc = "0";
let Per = "0";
let adsNum;
let allUsers = [];
let AdsArray =["id1","id2"];
console.log(AdsArray);
let usernumber, useremail, userfirstname, userlastname;
// console.log(Userid);

// onAuthStateChanged(auth,(user)=>{
//   console.log("User status changed",user);

//   if(user==null) {
//     location.href="404.html"
//   }
// })

const adColRef = collection(db, "Ads");
const docAllusers = collection(db, "users");
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
    "<p id=welcometext class='h2 mb-4 mb-md-5 text-black text-center mt-3'>שלום  " +
    userfirstname +
    ", חפש את המשרה המועדפת עלייך</p>";
});
// const docUef = doc(db,"users",Userid[0]);
// const Thisuser = getDoc(docUef);
// console.log(Thisuser.data());

onAuthStateChanged(auth, (user) => {
  console.log("User status changed", user);
  if (user != null) {
    logEmail = user.email;
  } 
  else {
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

const selectElement = document.querySelector(".ChooseThum");
selectElement.addEventListener("change", (event) => {
  Thum = event.target.value;
});

const selectElement2 = document.querySelector(".ChooseLoc");
selectElement2.addEventListener("change", (event) => {
  Loc = event.target.value;
});
const selectElement3 = document.querySelector(".ChoosePer");
selectElement3.addEventListener("change", (event) => {
  Per = event.target.value;
});

var adSize;
getDocs(adColRef).then((snapshot) => {
    let Ads = [];
    let ids2 = [];
    let Savetoid;
    let allUsers2 = [];
    snapshot.docs.forEach((doc) => {
      Ads.push({ ...doc.data(), id: doc.id });
    });
    getDocs(docAllusers).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        allUsers2.push({ ...doc.data(), id: doc.id });
      });
      let userQuantity = allUsers2.length;
      for (let index = 0; index < userQuantity; index++) {
        ids2[index] = allUsers2[index].id;
        if (allUsers2[index].email == logEmail) {
          Savetoid=index;
      }
    }
    console.log(ids2);
    adSize = Ads.length;
    let flag = 0;
    let flagStart = 0;
    const SearchBtn = document.getElementById("SearchBtn");
    SearchBtn.addEventListener("click", function () {
      if (SearchBtn) {
        console.log(Thum);
        console.log(Loc);
        console.log(Per);
        // if(Thum=="0" && Loc===null && Per===null) {
        //   flag=0;
        //   alert("flag="+flag);
        //   flagStart=1;
        //   Running1();
        // }
        if (Thum != "0" && Loc != "0" && Per != "0") {
          flag = 1;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else if (Thum != "0" && Loc != "0" && Per == "0") {
          flag = 2;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else if (Thum != "0" && Loc == "0" && Per != "0") {
          flag = 3;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else if (Thum == "0" && Loc != "0" && Per != "0") {
          flag = 4;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else if (Thum != "0" && Loc == "0" && Per == "0") {
          flag = 5;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else if (Thum == "0" && Loc != "0" && Per == "0") {
          flag = 6;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else if (Thum == "0" && Loc == "0" && Per != "0") {
          flag = 7;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        } else {
          flag = 0;
          alert("flag=" + flag);
          flagStart = 1;
          Running1();
        }
      }
    });
    if (flagStart == 0) {
      Running1();
    }
    function Running1() {
      $(".Added").remove();
      for (let index = 0; index < adSize; index++) {
        console.log(flag);
        switch (flag) {
          case 0:
            if (Ads[index].accepted == true) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case0");
            break;
          case 1:
            if (
              Ads[index].accepted == true &&
              Ads[index].location == Loc &&
              Ads[index].dep == Thum &&
              Ads[index].percent == Per
            ) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case1");
            break;
          case 2:
            if (
              Ads[index].accepted == true &&
              Ads[index].location == Loc &&
              Ads[index].dep == Thum
            ) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case2");
            break;
          case 3:
            if (
              Ads[index].accepted == true &&
              Ads[index].dep == Thum &&
              Ads[index].percent == Per
            ) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case3");
            break;
          case 4:
            if (
              Ads[index].accepted == true &&
              Ads[index].location == Loc &&
              Ads[index].percent == Per
            ) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case4");
            break;
          case 5:
            if (Ads[index].accepted == true && Ads[index].dep == Thum) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case5");
            break;
          case 6:
            if (Ads[index].accepted == true && Ads[index].location == Loc) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case6");
            break;
          case 7:
            if (Ads[index].accepted == true && Ads[index].percent == Per) {
              $("#try2").append(
                "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/dist/img/occpics/occ" +
                  Ads[index].imgid +
                  ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                  Ads[index].title +
                  "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                  Ads[index].des +
                  "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                  index +
                  "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalWS'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
              );
            }
            console.log("case7");
            break;
          // default:
          //   console.log(`Sorry, we are out of ${expr}.`);
        }
      }
      for (let index = 0; index < adSize; index++) {
        const buttonE2 = document.getElementById("view" + index);
        if (buttonE2) {
          buttonE2.addEventListener("click", function () {
            document.querySelector("#WStitle").innerHTML = Ads[index].title;
            console.log("yougay");
            if (Ads[index].company == null) {
              document.querySelector("#WScompany").innerHTML = "חסוי";
            } 
            else {
              document.querySelector("#WScompany").innerHTML =
                Ads[index].company;
            }
            document.querySelector("#WSlocation").innerHTML =
              Ads[index].location;
            document.querySelector("#WSdescribe").innerHTML = Ads[index].des;
            document.querySelector("#WSreq").innerHTML = Ads[index].req;
            document.querySelector("#WSdep").innerHTML = Ads[index].dep;
            document.querySelector("#WSpercent").innerHTML = Ads[index].percent;
            document.querySelector("#WSimg").src =
              "/dist/img/occpics/occ" + Ads[index].imgid + ".jpeg";
              adsNum=index;
            const updateViews = doc(db, "Ads",Ads[index].id);
            updateDoc(updateViews, {
              viewsCount: increment(1),
          });
            });
      }
    }
  }
    const buttonS = document.getElementById("saveButton");
            if (buttonS) {
              buttonS.addEventListener("click", function () {
                console.log("Saveeeee"+adsNum)
                console.log(ids2[Savetoid]);
                // const upDoc=doc(db,"users",ids2[Savetoid]);
                // let arr = [];
                const addSaveA=collection(db,'SavedAds');
                console.log(logEmail);
                console.log(Ads[adsNum].id);
                 addDoc(addSaveA,{
                   Saveremail:logEmail,
                  idOfAds:Ads[adsNum].id,
                }).then (()=>{
                  console.log("המשרה נשמרה בהצלחה");
                })
              })
            }
  })
})
  .catch((err) => {
    console.log(err.message);
  });

