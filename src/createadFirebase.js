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

// collection ref

const adColRef = collection(db,'Ads');


// sending data messaages

const adForm = document.querySelector('.adF')
adForm.addEventListener('submit', (e) => {
  e.preventDefault()
 

  // add new info to firebase messages
  addDoc(adColRef,{
    des:adForm.desc.value,
    location:adForm.loc.value,
    percent:adForm.MainOccupation.value,
    dep:adForm.MainOccupation1.value,
    req:adForm.reqs.value,
    title:adForm.title.value,
    accepted:false

  }).then(() =>{
    alert("Success");
  })


})

onAuthStateChanged(auth,(user)=>{
  console.log("User status changed",user);
})