
let flag = 0;
let darkflag = 0;
let textflag = 0;

$(document).ready(function () {
 

  $("#darkBtn").click(function () {
    if (darkflag === 0) {
      $("h1").addClass("whitetext")  

      $("#navbarCollapse").addClass("darkMode");
      $(".navbar").addClass("darkMode");
      $(".nav-item").removeClass("darkMode");
      $(".nav-item").addClass("whitetext");

      $("body").addClass("darkMode");
      $("#bgHead").removeClass("bg-light");

      $("p").removeClass("bg-light");
      
    //   $("#body").removeClass("bg-gray-200");
      

      darkflag = 1;
    } else {
      $("h1").removeClass("whitetext");
      $("body").removeClass("darkMode");

      $("#bgHead").addClass("bg-light");
      
      $("#RealAbout").removeClass("bg-light");
      
      $("#navbarCollapse").removeClass("darkMode");
      $(".navbar").removeClass("darkMode");
      $(".nav-item").removeClass("darkMode");
      $(".nav-item").removeClass("whitetext");

      darkflag = 0;
    }
  });

  $("#largeFont").click(function () {
    if (textflag === 0) {
      $("p").addClass("largeFont");
      $("h1").addClass("largerH");
      // $("body").addClass("mediumFont");
      $(".navG").addClass("mediumFont");

      textflag = 1;
    } else {
      $("p").removeClass("largeFont");
      $("h1").removeClass("largerH");
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

    // $("#accessMenu").toggle("drop");
    return false;
  });

  

 
});
// editB.click( function() {
//   NewText = $("#Newtext").val();
//   localStorage.setItem("About", NewText);
//   $("#editP").html(NewText);
//   alert("Saved");

//   } );

// var num_msg = localStorage.getItem("num_of_msg");
// for (var index = 0; index < num_msg; index++) {
//   let name = localStorage.getItem("Client " + index + " name");
//   let email = localStorage.getItem("Client " + index + " email");
//   let subject = localStorage.getItem("Client " + index + " subject");
//   let message = localStorage.getItem("Client " + index + " message");
//   $("#admin_msg").append("<strong>Number of message is - </strong>" + (index+1));
//   $("#admin_msg").append("<p> Name: " + name + "<br>" +"Email: " + email + "<br>" + "Subject: " + subject + "<br>" + "Message: " + message + "</p>" );

// };

// var num_ads = localStorage.getItem("num_of_ads");

// $("#reports").append("<strong>Number of messeges is - "+  index +"</strong>");
// $("#reports").append("<strong><p>Number of ads is - "+  num_ads +"</strong></p>");
// // $("#reports").append(" <img src="img/adv.png"/> ");
