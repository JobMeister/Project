// let x=Number(localStorage.getItem("keynumber"));
// let count;
// if(x==null || x==0)
//     count=0;
// else
//     count=x;

// function SignUpCheck() {
//     for (let i = 1; i <=9; i++) { 
//         document.querySelector("#msg"+i).innerHTML="";
//     }
//     let inputFirstname= document.getElementById("S_firstname").value;
//     let inputLastname= document.getElementById("S_lastname").value;
//     let inputEmail= document.getElementById("S_email").value;
//     let inputPassword= document.getElementById("S_password").value;
//     let inputSelect= document.getElementById("S_select").value;
//     let inputCompany= document.getElementById("S_company").value;
//     let inputAge=document.getElementById("S_age").value;
//     let inputGender=document.getElementById("S_gender").value;
//     let inputOcc=document.getElementById("S_MainOccupation").value;
//     if(inputFirstname=="") {
//         document.querySelector("#msg1").innerHTML="אנא הכנס שם פרטי";
//         return false;
//     }
//     if(inputLastname=="") {
//         document.querySelector("#msg2").innerHTML="אנא הכנס שם משפחה";
//         return false;
//     }
//     if(inputEmail=="") {
//         document.querySelector("#msg3").innerHTML="אנא הכנס כתובת מייל";
//         return false;
//     }
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//         if (reg.test(inputEmail) == false) 
//         {
//             document.querySelector("#msg3").innerHTML="כתובת מייל לא תקינה";
//             return false;
//         }
//     if(inputPassword=="") {
//         document.querySelector("#msg4").innerHTML="אנא הכנס סיסמא";
//         return false
//     }
//     if(inputSelect=="")  {
//         document.querySelector("#msg5").innerHTML="בחר סוג משתמש";
//         return false;
//     }
//     if(inputSelect==1) {
//         if(inputCompany=="") {
//             document.querySelector("#msg6").innerHTML="אנא הכנס שם חברה";
//             return false;
//         }
//     }
//     if(inputSelect==2) {
//         if(inputAge=="") {
//             document.querySelector("#msg7").innerHTML="אנא הכנס גיל";
//             return false;
//         }
//         if(inputGender=="") {
//             document.querySelector("#msg8").innerHTML="אנא בחר מין";
//             return false;
//         }
//         if(inputOcc=="") {
//             document.querySelector("#msg9").innerHTML="אנא בחר תחום עיסוק עיקרי";
//             return false;
//         }
//     }
//     return true;
// }
    
// function SignUpSucces() {
//     let inputFirstname= document.getElementById("S_firstname").value;
//     let inputLastname= document.getElementById("S_lastname").value;
//     let inputEmail= document.getElementById("S_email").value;
//     let inputPassword= document.getElementById("S_password").value;
//     let inputSelect= document.getElementById("S_select").value;
//     let inputCompany= document.getElementById("S_company").value;
//     let inputAge=document.getElementById("S_age").value;
//     let inputGender=document.getElementById("S_gender").value;
//     let inputOcc=document.getElementById("S_MainOccupation").value;
//     if(SignUpCheck()==true) {
//         localStorage.setItem("first name"+count,inputFirstname);
//         localStorage.setItem("last name"+count,inputLastname);
//         localStorage.setItem("email"+count, inputEmail);
//         localStorage.setItem("password"+count,inputPassword);
//         if(inputSelect==1){
//             localStorage.setItem("company name"+count,inputCompany)
//         }
//         if(inputSelect==2) {
//             localStorage.setItem("age"+count,inputAge);
//             if(inputGender==1) 
//                 localStorage.setItem("gender"+count,"Man");
//             else
//                 localStorage.setItem("gender"+count,"Woman");
//             localStorage.setItem("main occupation"+count,"Catgory-"+inputOcc);
//             }

//         count++;  
//         localStorage.setItem("keynumber",count);
//         alert ("Registery successfully"); 
//         window.location = "login.html"; // Redirecting to other page.
//     }

// }


const Box_work1= document.getElementById('div-E');
const Box_work2= document.getElementById('div-WS');

function DisplayDivBySelector(val) {
  if(val==1) {
      if(Box_work2.style.display == 'block') {
          Box_work2.style.display = 'none';
      }
      Box_work1.style.display = 'block';
  }
  else if(val==2){
      if(Box_work1.style.display == 'block') {
          Box_work1.style.display = 'none';
      }
      Box_work2.style.display = 'block';
  }
  else {
      Box_work1.style.display = 'none';
      Box_work2.style.display = 'none';
  }
}

$(document).ready(function () {
  $("#accessMenu").hide();

  $("#darkBtn").click(function () {
    if (darkflag === 0) {
      $("#navbarCollapse").addClass("darkMode");
      $(".navbar").addClass("darkMode");
      $(".nav-item").addClass("whitetext");
        $(".loginbtn").removeClass("btn-outline-dark")
        $(".loginbtn").addClass("bg-white")
        $("h1").addClass("whitetext");
        $("h5").addClass("whitetext");
        $("p").removeClass("text-black"); 
        $("p").addClass("whitetext");
        $(".container").addClass("darkMode");
        $(".bgdark").addClass("darkMode");
        $(".bgdark").removeClass("bg-light");
        $(".bgf").addClass("darkMode")
        $("body").addClass("darkMode");


      darkflag = 1;
    } else {
      $("#navbarCollapse").removeClass("darkMode");
      $(".navbar").removeClass("darkMode");
      $(".nav-item").removeClass("whitetext");
      $(".loginbtn").removeClass("bg-white")
      $(".loginbtn").addClass("btn-outline-dark")
      $("h1").removeClass("whitetext");
      $("h5").removeClass("whitetext");
      $("p").addClass("text-black"); 
      $("p").removeClass("whitetext");
      $(".container").removeClass("darkMode");
      $("body").removeClass("darkMode");
      $(".bgdark").addClass("bg-light");
      $(".bgdark").removeClass("darkMode");
      $(".bgf").removeClass("darkMode")


      darkflag = 0;
    }
  });

  $("#largeFont").click(function () {
    if (textflag === 0) {
      $("p").addClass("largeFont");
      $("h1").addClass("largerH");
      $(".form-label").addClass("largerH3");
      $("h4").addClass("largerH2");
      // $("body").addClass("mediumFont");
      $(".navG").addClass("mediumFont");

      textflag = 1;
    } else {
      $("p").removeClass("largeFont");
      $("h1").removeClass("largerH");
      $(".form-label").removeClass("largerH3");
      $("h4").removeClass("largerH2");
      $("body").removeClass("largeFont");
      $(".navG").removeClass("mediumFont");

      textflag = 0;
    }
  });

  $("#acessability").click(function () {
    if (flag === 0) {
      $("#acessability").addClass("widthAccess");
      
      flag = 1;
    } else {
      $("#acessability").removeClass("widthAccess");
      flag = 0;
    }

    $("#accessMenu").toggle("drop");
    return false;
  });
});




