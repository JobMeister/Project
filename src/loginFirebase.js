import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'
import{getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import {} from './login' 


    
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

const colRef = collection(db,'Data');
const docRef = doc(db, "users", "eOrS");
const docSnap = await getDoc(docRef);



// auth
const auth = getAuth();


const Flogin = document.querySelector('.Flogin')
Flogin.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = Flogin.email.value
  const password = Flogin.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      Flogin.reset()

      if (docSnap.exists()) {
        if(docSnap.data()=="Employer") {
            location.href="employeer.html"

         }
        else {
            location.href="index.html"

        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      // location.href="index.html"
    })
    .catch(err => {
      console.log(err.message)
    })
})

onAuthStateChanged(auth,(user)=>{
  console.log("User status changed",user);
})