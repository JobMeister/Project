var editB = $("#editNow");


var NewText = "JobMeister הוא פלטפורמת הדרושים הטובה ביותר של ישראל וזאת בזכות מערכת התאמת מועמד למעסיק הטובה ביותר. מטרת האתר היא לעזור למועמדים מכלל תחומי התעסוקה למצוא את העבודה הטובה והמתאימה להם, ובמקביל לעזור למעסיקים למצוא במהירות ויעילות את העובדים הטובים והמתאימים ביותר.";

editB.click( function() {
  NewText = $("#Newtext").val();
  localStorage.setItem("About", NewText);
  $("#editP").html(NewText);
  alert("Saved");

  } );  



 


