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

  
