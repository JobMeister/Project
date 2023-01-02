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

const auth = getAuth();
let allUsers = [];
let logEmail,logCompany;

const docAllusers = collection(db,'users')
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc)=>{
    allUsers.push({...doc.data(), id:doc.id })
  })
  let userq=allUsers.length;
  console.log(allUsers);
  for (let index = 0; index < userq; index++) {
    if(allUsers[index].email==logEmail) {
      logCompany=allUsers[index].Company;
    }
  }
})
// sending data messaages

const adForm = document.querySelector('.adF')
adForm.addEventListener('submit', (e) => {
  e.preventDefault()
  

  // add new info to firebase messages
  addDoc(adColRef,{
    company:logCompany,
    emailofemployer:logEmail,
    des:adForm.desc.value,
    location:adForm.Adloc.value,
    percent:adForm.MainOccupation.value,
    dep:adForm.MainOccupation1.value,
    imgid:whichnumber(adForm.MainOccupation1.value),
    req:adForm.reqs.value,
    title:adForm.title.value,
    accepted:false

  }).then(() =>{
    alert("Success");
    location.href="employeer.html"
  })
})
function whichnumber(x){
  switch(x){
    case "אבטחה,שמירה ובטחון":
      return 1;
    case "אומנות בידור ומדיה":
      return 2;
    case "אופנה וטקסטיל":
      return 3;
    case "בניין,בינוי ושיכון":
        return 4;
    case "בתי קפה,מסעדות ואירועים":
      return 5;
    case "הוראה,חינוך והדרכה":
      return 6;
    case "הנדסה":
      return 7;
    case "חשמל ואלקטרוניקה" :
      return 8;
    case "יופי,טיפוח וספא":
      return 9;
    case "יזמות":
      return 10;
    case "ייצור ותעשייה":
      return 11;
    case"כספים וכלכלה":
    return 12;
    case "מדעי החברה":
      return 13;
    case "מחסנאות":
      return 14;
    case "מכירות":
      return 15;
    case "מערכות מידע":
      return 16;
    case "משאבי אנוש":
        return 17; 
    case"משפטים":
      return 18;
    case "נדל״ן":
      return 19;
    case "נהגים ושליחים":
      return 20;
    case "סטונדטים":
        return 21;
    case"ספורט,כושר ואורח חיים":
        return 22; 
    case"רכב ומכונאות":
        return 23; 
    case"רפואה":
       return 24;
    case"שירות לקוחות":
        return 25;
    case "תוכנה":
        return 26;
    case"תיירות ומלונאות":
        return 27; 
  }
}



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

  onAuthStateChanged(auth,(user)=>{
    console.log("User status changed",user);
    if(user!=null) {
      logEmail = user.email;
      alert(logEmail)
    }
    if(user==null) {
      location.href="index.html"
    }
  })