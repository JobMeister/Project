import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import{getAuth, signInWithEmailAndPassword } from 'firebase/auth'

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
      location.href="index.html"
    })
    .catch(err => {
      console.log(err.message)
    })
})
