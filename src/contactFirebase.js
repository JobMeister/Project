import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import {} from './main' 
import {} from './contact' 

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


const msgColRef = collection(db,'Messages')


 // get info messages
getDocs(msgColRef).then((snapshot) => {
  let Messages = []
  snapshot.docs.forEach((doc)=>{
      Messages.push({...doc.data(), id:doc.id })
  })
  console.log(Messages);
 
  })
  .catch(err => {
      console.log(err.message);
  })


  // sending data messaages

const messageF = document.querySelector('.contactForm')
messageF.addEventListener('submit', (e) => {
  e.preventDefault()
 

  // add new info to firebase messages
  addDoc(msgColRef,{
    name:messageF.cname.value,
    email:messageF.cemail.value,
    subject:messageF.csubject.value,
    msg:messageF.cmsg.value

  }).then(() =>{
    alert("Success");
  })


})

