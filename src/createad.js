

let flag = 0;
let darkflag = 0;
let textflag = 0;

$(document).ready(function () {
  $("#accessMenu").hide();


  $("#darkBtn").click(function () {
    if (darkflag === 0) {
      $("h1").addClass("whitetext"); 
      $("h4").addClass("whitetext");
      $("body").addClass("darkMode");
      $(".footS").removeClass("bg-light");
      $(".bgdark").removeClass("bg-light");


      darkflag = 1;
    } else {
      $("h1").removeClass("whitetext");
      $("h4").removeClass("whitetext");
      $("body").removeClass("darkMode");
      $(".footS").addClass("bg-light");
      $(".bgdark").addClass("bg-light");

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

    $("#accessMenu").toggle("drop");
    return false;
  });

  

 
});