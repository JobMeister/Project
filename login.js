// function init() {

// }

function loginSuccses(form) {

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
