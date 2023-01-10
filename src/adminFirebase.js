import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import {} from "./admin";
import {} from "./main";

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

// collection ref
 //pdf import
          //or directly in browser
          const outputTypes = jsPDFInvoiceTemplate.OutputType;
          const jsPDF = jsPDFInvoiceTemplate.jsPDF();
          // 
const colRef = collection(db, "Data");
const msgColRef = collection(db, "Messages");
const adColRef = collection(db, "Ads");
const usersColRef = collection(db, "users");
var oldData;

getDocs(colRef)
  .then((snapshot) => {
    let Data = [];
    snapshot.docs.forEach((doc) => {
      Data.push({ ...doc.data(), id: doc.id });
    });
    console.log(Data);
    oldData = Data[0].id;
  })
  .catch((err) => {
    console.log(err.message);
  });

// sending data

const editAb = document.querySelector(".editbtn");
editAb.addEventListener("submit", (e) => {
  e.preventDefault();

  getDocs(colRef)
    .then((snapshot) => {
      let Data = [];
      snapshot.docs.forEach((doc) => {
        Data.push({ ...doc.data(), id: doc.id });
      });
      oldData = Data[0].id;
    })
    .catch((err) => {
      console.log(err.message);
    });

  // delete old about data
  const docRef = doc(db, "Data", oldData);
  deleteDoc(docRef).then(() => {
    editAb.reset();
  });

  // add new data for about
  addDoc(colRef, {
    dataAbout: editAb.ntext.value,
  }).then(() => {
    alert("Success");
  });
  $("#editP").html(editAb.ntext.value);
});

var size;

// get messages to display in admin panel & admin num of messages report
//
getDocs(msgColRef)
  .then((snapshot) => {
    let Messages = [];
    snapshot.docs.forEach((doc) => {
      Messages.push({ ...doc.data(), id: doc.id });
    });
    size = Messages.length;
    console.log(Messages);

    for (let index = 0; index < size; index++) {
      let indexR = index + 1;
      $("#admin_msg").append(
        "<p class='border border-dark py-2 px-2 bg-white'>" +
          "<strong> Message number: " +
          indexR +
          "</strong>" +
          "<br>" +
          "Name: " +
          Messages[index].name +
          "<br>" +
          "Email: " +
          Messages[index].email +
          "<br>" +
          "Subject: " +
          Messages[index].subject +
          "<br>" +
          "Message: " +
          Messages[index].msg +
          "<br><strong>email to respond: " +
          "<a href ='mailto:"+
          Messages[index].email +
          "'>" +
          Messages[index].email +
          "</a></strong></p>"
      );
    }

    $("#reports").append(
      "<button class='buttonadmin btn btn-outline-dark me-2'>Number of messages is - " + size + "</button>"
      // "<strong>Number of messages is - " + size + "</strong>"
      );
    const pdf1btn = document.querySelector(".buttonadmin");
    pdf1btn.addEventListener("click", () => {
      var myState = {
          pdf: null,
          currentPage: 1,
          zoom: 1
           }
          jsPDFInvoiceTemplate.default( propsObject );
          var pdfObject = jsPDFInvoiceTemplate(props); //returns number of pages created
          var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
          var props= {
            outputType: OutputType.Save,
            returnJsPDFDocObject: true,
            fileName: "Invoice 2021",
            orientationLandscape: false,
            compress: true,
            logo: {
                src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
                type: 'PNG', //optional, when src= data:uri (nodejs case)
                width: 53.33, //aspect ratio = width/height
                height: 26.66,
                margin: {
                    top: 0, //negative or positive num, from the current position
                    left: 0 //negative or positive num, from the current position
                }
              }
          };
           var pdfCreated = jsPDFInvoiceTemplate.default({ ...parameters });
    });
    
  })
  .catch((err) => {
    console.log(err.message);
  });

// getting data for num of ads
var adSize;
getDocs(adColRef)
  .then((snapshot) => {
    let Ads = [];
    snapshot.docs.forEach((doc) => {
      Ads.push({ ...doc.data(), id: doc.id });
    });
    adSize = Ads.length;
    $("#reports").append(
      "<button class='buttonadmin btn btn-outline-dark me-2'>Number of ads is - " + adSize + "</button>"
      // "<br><strong>Number of ads is - " + adSize + "</strong>"
    );
  })
  .catch((err) => {
    console.log(err.message);
  });

const logoutButton = document.querySelector(".logoutBtn");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("user signed out");
      location.href = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// get ads to display in admin panel as not confirm
getDocs(adColRef).then((snapshot) => {
  let ads = [];
  snapshot.docs.forEach((doc) => {
    ads.push({ ...doc.data(), id: doc.id });
  });
  size = ads.length;
  console.log(ads);
  let ids = [];
  let counter1 = 0;
  for (let index = 0; index < size; index++) {
    let indexR = index + 1;
    ids[index] = ads[index].id;
    if (ads[index].accepted === false) {
      $("#NotConfirm").append(
        "<p  class='border border-dark py-2 px-2 bg-white' >" +
          "<strong> ad number: " +
          indexR +
          "</strong>" +
          "<br>" +
          "Email of Employer: " +
          ads[index].emailofemployer +
          "<br>" +
          "company name: " +
          ads[index].company +
          "<br>" +
          "Title: " +
          ads[index].title +
          "<br>" +
          "description: " +
          ads[index].des +
          "<br>" +
          "location: " +
          ads[index].location +
          "<br>" +
          "percent: " +
          ads[index].percent +
          "<br>" +
          "Main Occupation : " +
          ads[index].dep +
          "<br>" +
          "requiements: " +
          ads[index].req +
          "<br>" +
          "</p>" +
          "<button id='delbtn" +
          index +
          "' class='btn btn-outline-danger me-2'>delete</button>" +
          "<button id='Acceptbtn" +
          index +
          "' class='btn btn-outline-success'>Accept</button>"
      );
      counter1++;
    }
  }
  let updatename = document.querySelector("#notconfirm1");
  updatename.innerHTML = counter1 + "  " + "מודעות שלא אושרו";

  console.log(ids);
  for (let index = 0; index < size; index++) {
    if (ads[index].accepted === false) {
      const button = document.getElementById("delbtn" + index);
      button.addEventListener("click", function () {
        const docDel = doc(db, "Ads", ids[index]);
        deleteDoc(docDel);
      });
      const button2 = document.getElementById("Acceptbtn" + index);
      button2.addEventListener("click", function () {
        const updDoc = doc(db, "Ads", ids[index]);
        updateDoc(updDoc, {
          accepted: true,
        });
      });
    }
  }
});

getDocs(adColRef).then((snapshot) => {
  let ads = [];
  snapshot.docs.forEach((doc) => {
    ads.push({ ...doc.data(), id: doc.id });
  });
  size = ads.length;
  console.log(ads);
  let counter2 = 0;
  let ids = [];
  for (let index = 0; index < size; index++) {
    let indexR = index + 1;
    ids[index] = ads[index].id;
    if (ads[index].accepted === true) {
      $("#Confirm").append(
        "<p  class='border border-dark py-2 px-2 bg-white' >" +
          "<strong> ad number: " +
          indexR +
          "</strong>" +
          "<br>" +
          "Email of Employer: " +
          ads[index].emailofemployer +
          "<br>" +
          "company name: " +
          ads[index].company +
          "<br>" +
          "Title: " +
          ads[index].title +
          "<br>" +
          "description: " +
          ads[index].des +
          "<br>" +
          "location: " +
          ads[index].location +
          "<br>" +
          "percent: " +
          ads[index].percent +
          "<br>" +
          "Main Occupation : " +
          ads[index].dep +
          "<br>" +
          "requiements: " +
          ads[index].req +
          "</p>" +
          "<button id='delbtn" +
          index +
          "' class='btn btn-outline-danger me-2'>delete</button>"
      );
      counter2++;
    }
  }
  let updatename = document.querySelector("#confirm1");
  updatename.innerHTML = counter2 + "  " + "מודעות שאושרו";
  for (let index = 0; index < size; index++) {
    if (ads[index].accepted === true) {
      const button = document.getElementById("delbtn" + index);
      button.addEventListener("click", function () {
        const docDel = doc(db, "Ads", ids[index]);
        deleteDoc(docDel);
      });
    }
  }
});

onAuthStateChanged(auth, (user) => {
  console.log("User status changed", user);
  if (user == null) {
    location.href = "index.html";
  }
});

// show users on admin panel
getDocs(usersColRef).then((snapshot) => {
  let usersAarray = [];
  snapshot.docs.forEach((doc) => {
    usersAarray.push({ ...doc.data(), id: doc.id });
  });
  size = usersAarray.length;
  console.log(usersAarray);
  let ids = [];
  for (let index = 0; index < size; index++) {
    let indexR = index + 1;
    ids[index] = usersAarray[index].id;
    if (usersAarray[index].eOrS == "Employer") {
      $("#deleteusers").append(
        "<p  class='border border-dark py-2 px-2 bg-white' >" +
          "first name: " +
          usersAarray[index].firstname +
          "<br>" +
          "last name: " +
          usersAarray[index].lastname +
          "<br>" +
          "email: " +
          usersAarray[index].email +
          "<br>" +
          "company: " +
          usersAarray[index].Company +
          "<br>" +
          "user type: " +
          usersAarray[index].eOrS +
          "<br>" +
          "passeord: " +
          usersAarray[index].password +
          "<br>" +
          "</p>" +
          "<button id='deluserbtn" +
          index +
          "' class='btn btn-outline-danger me-2'>delete</button>"
      );
    } else {
      if (usersAarray[index].eOrS == "Work Searcher") {
        $("#deleteusers").append(
          "<p  class='border border-dark py-2 px-2 bg-white' >" +
            "first name: " +
            usersAarray[index].firstname +
            "<br>" +
            "last name: " +
            usersAarray[index].lastname +
            "<br>" +
            "email: " +
            usersAarray[index].email +
            "<br>" +
            "age: " +
            usersAarray[index].age +
            "<br>" +
            "user type: " +
            usersAarray[index].eOrS +
            "<br>" +
            "passeord: " +
            usersAarray[index].password +
            "<br>" +
            "</p>" +
            "<button id='deluserbtn" +
            index +
            "' class='btn btn-outline-danger me-2'>delete</button>"
        );
      }
    }
  }
  console.log(ids);
  for (let index = 0; index < size; index++) {
    const button = document.getElementById("deluserbtn" + index);
    if (button) {
      console.log(index);
      button.addEventListener("click", function () {
        const docDel = doc(db, "users", ids[index]);
        deleteDoc(docDel);
        alert("user deleted");
      });
    }
  }
});

// const pdfObject = jsPDFInvoiceTemplate(props); //returns number of pages created
// var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created

// var props = {
//     outputType: OutputType.Save,
//     returnJsPDFDocObject: true,
//     fileName: "Invoice 2021",
//     orientationLandscape: false,
//     compress: true,
//     logo: {
//         src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
//         type: 'PNG', //optional, when src= data:uri (nodejs case)
//         width: 53.33, //aspect ratio = width/height
//         height: 26.66,
//         margin: {
//             top: 0, //negative or positive num, from the current position
//             left: 0 //negative or positive num, from the current position
//         }
//     },
//     stamp: {
//         inAllPages: true, //by default = false, just in the last page
//         src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
//         type: 'JPG', //optional, when src= data:uri (nodejs case)
//         width: 20, //aspect ratio = width/height
//         height: 20,
//         margin: {
//             top: 0, //negative or positive num, from the current position
//             left: 0 //negative or positive num, from the current position
//         }
//     },
//     business: {
//         name: "Business Name",
//         address: "Albania, Tirane ish-Dogana, Durres 2001",
//         phone: "(+355) 069 11 11 111",
//         email: "email@example.com",
//         email_1: "info@example.al",
//         website: "www.example.al",
//     },
//     contact: {
//         label: "Invoice issued for:",
//         name: "Client Name",
//         address: "Albania, Tirane, Astir",
//         phone: "(+355) 069 22 22 222",
//         email: "client@website.al",
//         otherInfo: "www.website.al",
//     },
//     invoice: {
//         label: "Invoice #: ",
//         num: 19,
//         invDate: "Payment Date: 01/01/2021 18:12",
//         invGenDate: "Invoice Date: 02/02/2021 10:17",
//         headerBorder: false,
//         tableBodyBorder: false,
//         header: [
//           {
//             title: "#", 
//             style: { 
//               width: 10 
//             } 
//           }, 
//           { 
//             title: "Title",
//             style: {
//               width: 30
//             } 
//           }, 
//           { 
//             title: "Description",
//             style: {
//               width: 80
//             } 
//           }, 
//           { title: "Price"},
//           { title: "Quantity"},
//           { title: "Unit"},
//           { title: "Total"}
//         ],
//         table: Array.from(Array(10), (item, index)=>([
//             index + 1,
//             "There are many variations ",
//             "Lorem Ipsum is simply dummy text dummy text ",
//             200.5,
//             4.5,
//             "m2",
//             400.5
//         ])),
//         additionalRows: [{
//             col1: 'Total:',
//             col2: '145,250.50',
//             col3: 'ALL',
//             style: {
//                 fontSize: 14 //optional, default 12
//             }
//         },
//         {
//             col1: 'VAT:',
//             col2: '20',
//             col3: '%',
//             style: {
//                 fontSize: 10 //optional, default 12
//             }
//         },
//         {
//             col1: 'SubTotal:',
//             col2: '116,199.90',
//             col3: 'ALL',
//             style: {
//                 fontSize: 10 //optional, default 12
//             }
//         }],
//         invDescLabel: "Invoice Note",
//         invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//     },
//     footer: {
//         text: "The invoice is created on a computer and is valid without the signature and stamp.",
//     },
//     pageEnable: true,
//     pageLabel: "Page ",
// };