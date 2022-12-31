import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import{getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import {} from './main' 
import {} from './createad'

    
const firebaseConfig = {
  apiKey: "AIzaSyDoC94Xlt0BHfsH_zLp8562xsKMW49mv8s",
  authDomain: "job-meister.firebaseapp.com",
  projectId: "job-meister",
  storageBucket: "job-meister.appspot.com",
  messagingSenderId: "51579629977",
  appId: "1:51579629977:web:eae8590655f4e102e2e308",
  measurementId: "G-W33GWTB6JB"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init services
const db = getFirestore(app);
const auth = getAuth();
let logEmail;
let allUsers = []
let usernumber,useremail,userfirstname,userlastname;


// onAuthStateChanged(auth,(user)=>{
//   console.log("User status changed",user);
  
//   if(user==null) {
//     location.href="404.html"
//   }
// })


const adColRef = collection(db,'Ads'); 
const docAllusers = collection(db,'users')
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc)=>{
    allUsers.push({...doc.data(), id:doc.id })
  })
  let userq=allUsers.length;
  console.log(allUsers);
  for (let index = 0; index < userq; index++) {
    if(allUsers[index].email==logEmail) {
        useremail = allUsers[index].email;
        userfirstname=allUsers[index].firstname;
        userlastname=allUsers[index].lastname;
    }
  }
})

onAuthStateChanged(auth,(user)=>{
  console.log("User status changed",user);
  if(user!=null) {
    logEmail = user.email;
    alert(logEmail);
  }
  else {
    location.href="index.html";
  }
})

const logoutButton = document.querySelector('.logoutBtn')
  logoutButton.addEventListener('click', () => {
   signOut(auth)
      .then(() => {
       alert("signout")
        location.href="index.html"
     })
     .catch(err => {
        console.log(err.message)
     })
  })

  

  var adSize;
  getDocs(adColRef).then((snapshot) => {
    let Ads = []
    snapshot.docs.forEach((doc)=>{
        Ads.push({...doc.data(), id:doc.id })
    })
    adSize = Ads.length;
    console.log(Ads);
    for (let index = 0; index < adSize; index++) {
      let indexR=index+1;
      if(Ads[index].emailofemployer==useremail) {
      $("#try1").append("<div class='col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='img/asif1clear.png' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" + Ads[index].title + "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +  Ads[index].des +"</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='delbtn"+index+"' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#exampleModal'>מחיקה</button><button id='view"+index+"' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#exampleModalCenter'>צפה</button></div><small class='text-muted'>לפני שעה</small></div></div></div></div>"
      );
    }
  }
  for (let index = 0; index < adSize; index++) {
    const buttonE = document.getElementById('delbtn'+index);
    if(buttonE) {
      buttonE.addEventListener('click', function() {
        console.log("yougay");
        var buttonD= document.getElementById('YesDelete');
        if(buttonD) {
          buttonD.addEventListener('click', function() {
          console.log("the index is:",index);
          console.log(Ads[index]);
          var docDelAds=doc(db,'Ads',Ads[index].id)
          deleteDoc(docDelAds).then(() => {
            location.reload()
            })
          })
        }
      })
    }
    
    const buttonE2 = document.getElementById('view'+index);
    if(buttonE2) {
      buttonE2.addEventListener('click', function() {
        console.log("younotgay");
      })
    }
   }
    })
    .catch(err => {
      console.log(err.message);
    })
    