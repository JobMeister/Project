let msg = false;
let edit = false;

$("#admin_msg").hide();
$("#editdiv").hide();

$(document).ready(function(){
  
  $("#msg_btn").click(function(){

   
      $("#admin_msg").toggle('drop');
      $("#editdiv").hide();
      return false;
    
  })

  $("#edit_btn").click(function(){
    
      $("#editdiv").toggle('drop');
      $("#admin_msg").hide();

      return false;
    
  })

})

var editB = $("#editNow");

var NewText = "JobMeister הוא פלטפורמת הדרושים הטובה ביותר של ישראל וזאת בזכות מערכת התאמת מועמד למעסיק הטובה ביותר. מטרת האתר היא לעזור למועמדים מכלל תחומי התעסוקה למצוא את העבודה הטובה והמתאימה להם, ובמקביל לעזור למעסיקים למצוא במהירות ויעילות את העובדים הטובים והמתאימים ביותר.";

editB.click( function() {
  NewText = $("#Newtext").val();
  localStorage.setItem("About", NewText);
  $("#editP").html(NewText);
  alert("Saved");

  } );

var num_msg = localStorage.getItem("num_of_msg");
for (let index = 0; index < num_msg; index++) {
  let name = localStorage.getItem("Client " + index + " name");
  let email = localStorage.getItem("Client " + index + " email");
  let subject = localStorage.getItem("Client " + index + " subject");
  let message = localStorage.getItem("Client " + index + " message");
  $("#admin_msg").append("<strong>Number of message is - </strong>" + (index+1));
  $("#admin_msg").append("<p> Name: " + name + "<br>" +"Email: " + email + "<br>" + "Subject: " + subject + "<br>" + "Message: " + message + "</p>" );
  
};





 


