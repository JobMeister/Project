<<<<<<< HEAD
import { initializeApp } from 'firebase/app'
=======
import { initializeApp } from "firebase/app";
>>>>>>> 356a307c3c552bf125e7375b5834e208cd8c9800
import {
  getFirestore,
  collection,
  getDocs,
<<<<<<< HEAD
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import {} from './main'
import {} from './contact'
=======
  addDoc, 
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {} from './main' 
import {} from './contact' 
>>>>>>> 356a307c3c552bf125e7375b5834e208cd8c9800

const firebaseConfig = {
  apiKey: 'AIzaSyDoC94Xlt0BHfsH_zLp8562xsKMW49mv8s',
  authDomain: 'job-meister.firebaseapp.com',
  projectId: 'job-meister',
  storageBucket: 'job-meister.appspot.com',
  messagingSenderId: '51579629977',
  appId: '1:51579629977:web:eae8590655f4e102e2e308',
  measurementId: 'G-W33GWTB6JB',
}

// init firebase
const app = initializeApp(firebaseConfig)

// init services
<<<<<<< HEAD
const db = getFirestore(app)
const auth = getAuth()

const msgColRef = collection(db, 'Messages')
const colRef = collection(db, 'Data')
const docAllusers = collection(db, 'users')
const nav1 = document.getElementById('nav1')
const nav2 = document.getElementById('nav2')
const nav3 = document.getElementById('nav3')
var oldData
let logEmail
let allUsers = []
let usernumber, useremail, userfirstname, userlastname
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    allUsers.push({ ...doc.data(), id: doc.id })
=======
const db = getFirestore(app);
const auth = getAuth();

const msgColRef = collection(db,'Messages')
const colRef = collection(db, "Data");
const docAllusers = collection(db, "users");
const nav1= document.getElementById('nav1');
const nav2= document.getElementById('nav2');
const nav3= document.getElementById('nav3');
var oldData;
let logEmail;
let allUsers = [];
let usernumber, useremail, userfirstname, userlastname;
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    allUsers.push({ ...doc.data(), id: doc.id });
  });
  let userq = allUsers.length;
  console.log(allUsers);

  for (let index = 0; index < userq; index++) {
    if (allUsers[index].email == logEmail) {
      useremail = allUsers[index].email;
    }
  }
});

onAuthStateChanged(auth, (user) => {
  console.log("User status changed", user);
  if (user != null) {
    logEmail = user.email;
    console.log(logEmail);
    getDocs(docAllusers).then((snapshot) => {
      let allUsers = []
      snapshot.docs.forEach((doc)=>{
        allUsers.push({...doc.data(), id:doc.id })
      })
      let userq=allUsers.length;
      console.log(allUsers);
      for (let index = 0; index < userq; index++) {
        if(allUsers[index].email==logEmail) {
            if(allUsers[index].eOrS=="Employer") {
                nav1.style.display='none';
                nav2.style.display = 'block';
                nav3.style.display = 'none';
                break;
            }
            else {
                nav1.style.display='none';
                nav2.style.display = 'none';
                nav3.style.display = 'block';
                break;
            }
          }
        }
       })
  } 
  else {
    nav1.style.display='block';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
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
const logoutButton2 = document.querySelector(".logoutBtn2");
logoutButton2.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("signout");
      location.href = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
    });
});


 // get info messages
getDocs(msgColRef).then((snapshot) => {
  let Messages = []
  snapshot.docs.forEach((doc)=>{
      Messages.push({...doc.data(), id:doc.id })
>>>>>>> 356a307c3c552bf125e7375b5834e208cd8c9800
  })
  let userq = allUsers.length
  console.log(allUsers)

  for (let index = 0; index < userq; index++) {
    if (allUsers[index].email == logEmail) {
      useremail = allUsers[index].email
    }
  }
})

onAuthStateChanged(auth, (user) => {
  console.log('User status changed', user)
  if (user != null) {
    logEmail = user.email
    console.log(logEmail)
    getDocs(docAllusers).then((snapshot) => {
      let allUsers = []
      snapshot.docs.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id })
      })
      let userq = allUsers.length
      console.log(allUsers)
      for (let index = 0; index < userq; index++) {
        if (allUsers[index].email == logEmail) {
          if (allUsers[index].eOrS == 'Employer') {
            nav1.style.display = 'none'
            nav2.style.display = 'block'
            nav3.style.display = 'none'
            break
          } else {
            nav1.style.display = 'none'
            nav2.style.display = 'none'
            nav3.style.display = 'block'
            break
          }
        }
      }
    })
  } else {
    nav1.style.display = 'block'
    nav2.style.display = 'none'
    nav3.style.display = 'none'
  }
})

const logoutButton = document.querySelector('.logoutBtn')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      alert('signout')
      location.href = 'index.html'
    })
    .catch((err) => {
      console.log(err.message)
    })
})
const logoutButton2 = document.querySelector('.logoutBtn2')
logoutButton2.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      alert('signout')
      location.href = 'index.html'
    })
    .catch((err) => {
      console.log(err.message)
    })
})

// get info messages
getDocs(msgColRef)
  .then((snapshot) => {
    let Messages = []
    snapshot.docs.forEach((doc) => {
      Messages.push({ ...doc.data(), id: doc.id })
    })
    console.log(Messages)
  })
  .catch((err) => {
    console.log(err.message)
  })

// sending data messaages

const messageF = document.querySelector('.contactForm')
messageF.addEventListener('submit', (e) => {
  e.preventDefault()

  // add new info to firebase messages
  addDoc(msgColRef, {
    name: messageF.cname.value,
    email: messageF.cemail.value,
    subject: messageF.csubject.value,
    msg: messageF.cmsg.value,
  }).then(() => {
    alert('Success')
  })
  messageF.reset()
})
