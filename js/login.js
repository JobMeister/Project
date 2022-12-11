
function loginSuccses(form) {
        let x=Number(localStorage.getItem("keynumber"));
        for (let i = 0; i <=x; i++) { 
          if(form.username.value===localStorage.getItem("email"+i) && form.password.value===localStorage.getItem("password"+i)) {
                alert ("Login successfully"); 
                window.location = "admin.html"; // Redirecting to other page.
                return true;
          }
      }
        if(form.username.value === "Admin" && form.password.value === "12345"){
            alert ("Login successfully"); 
            window.location = "admin.html"; // Redirecting to other page.
            return true;
          }
          else{
            document.querySelector("#Alert_massage").innerHTML="Wrong password/username";
            return false;
          }
}
