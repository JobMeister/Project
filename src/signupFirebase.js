import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import{getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {} from './signup'
    
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

// const colRef = collection(db,'Data');
const auth = getAuth();


// sign up
const signUpForm = document.querySelector('.Fsignup')
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault()

const email = signUpForm.email.value
const password = signUpForm.password.value
const firstname = signUpForm.firstname.value
const lastname = signUpForm.lastname.value
const EmployerOrSearcher = signUpForm.EmployerOr.value

if(EmployerOrSearcher == '1') {
 
  var Company = signUpForm.Company.value
  var eOrS = "Employer"

 createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // Signed in 
      const user = cred.user;
      addDoc(collection(db, "users" ), { firstname ,lastname,email,password,Company,eOrS});
      window.alert("משתמש נרשם בהצלחה!");
    })
  
}

if(EmployerOrSearcher == '2') {
 
  var age = signUpForm.age.value
  var gender = signUpForm.gender.value
  var Occ = signUpForm.MainOcc.value
  var eOrS = "Work Searcher"
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // Signed in 
      const user = cred.user;
      addDoc(collection(db, "users" ), { firstname ,lastname,email,password,age,gender,Occ,eOrS});
      window.alert("משתמש נרשם בהצלחה!");
    })
  
}

})

onAuthStateChanged(auth,(user)=>{
  console.log("User status changed",user);
})