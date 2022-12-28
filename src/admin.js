let msg = false;
let edit = false;
let flag=0;
let darkflag=0;
let textflag=0;



$(document).ready(function(){
  $("#admin_msg").hide();
  $("#editdiv").hide();
  $("#accessMenu").hide();
  $("#reports").hide();
  $("#admin_conads").hide();
  $("#not_admin_conads").hide();




  $("#darkBtn").click(function(){
    if(darkflag === 0) {
      $("#body").addClass("darkMode");
      $("#body").removeClass("bg-gray-200")
      $("#pagesDark").addClass("text-white");
      $("#adminDark").addClass("text-white");
   

      darkflag =1;
  }
  else {
    $("#body").addClass("bg-gray-200");
    $("#body").removeClass("darkMode");
    $("#pagesDark").removeClass("text-white");
      $("#adminDark").removeClass("text-white");
    darkflag =0;
  }
  });


  $("#largeFont").click(function(){
    if(textflag === 0) {
      $("p").addClass("largeFont");
      $("h1").addClass("largerH");
      $("body").addClass("largeFont");
      $(".navG").addClass("mediumFont");

      textflag =1;
  }
  else {
    $("p").removeClass("largeFont");
    $("h1").removeClass("largerH");
    $("body").removeClass("largeFont");
    $(".navG").removeClass("mediumFont");

    textflag =0;
  }
  });





  $("#acessability").click(function(){
    if(flag === 0) {$("#acessability").addClass("widthAccess");
    flag = 1;
  
  }
    else { $("#acessability").removeClass("widthAccess");
    flag =0;
}
    
    
    $("#accessMenu").toggle('drop');
    return false;
  });

  $("#logout").click(function(){
    alert("Logged out successfully");
  });

  $("#reportsBtn").click(function(){

   
    $("#editdiv").hide();
    $("#admin_msg").hide();
    $("#not_admin_conads").hide();
    $("#admin_conads").hide();
    $("#reports").toggle('drop');


    return false;
  
})
  
  $("#msg_btn").click(function(){

      $("#editdiv").hide();
      $("#reports").hide();
      $("#not_admin_conads").hide();
      $("#admin_conads").hide();
      $("#admin_msg").toggle('drop');

      return false;
    
  })

  $("#edit_btn").click(function(){
    
      $("#admin_msg").hide();
      $("#reports").hide();
      $("#not_admin_conads").hide();
      $("#admin_conads").hide();
      $("#editdiv").toggle('drop');


      return false;
    
  })
  $("#confirm_ads").click(function(){
    $("#admin_conads").toggle('drop');
    $("#not_admin_conads").hide();
    $("#editdiv").hide();
    $("#admin_msg").hide();
    $("#reports").hide();
    return false;
  
})
$("#notconfirm_ads").click(function(){
  $("#admin_conads").hide();
  $("#editdiv").hide();
  $("#admin_msg").hide();
  $("#reports").hide();
  $("#not_admin_conads").toggle('drop');
  return false;

})




var editB = $("#editNow");

var NewText = "JobMeister הוא פלטפורמת הדרושים הטובה ביותר של ישראל וזאת בזכות מערכת התאמת מועמד למעסיק הטובה ביותר. מטרת האתר היא לעזור למועמדים מכלל תחומי התעסוקה למצוא את העבודה הטובה והמתאימה להם, ובמקביל לעזור למעסיקים למצוא במהירות ויעילות את העובדים הטובים והמתאימים ביותר.";
})



 


