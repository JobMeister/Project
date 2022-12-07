function init() {
    SignInSucces()

}

function SignInSucces() {
    const form  = document.getElementById('signup');

    form.addEventListener('submit', (event) => {
        console.log(form[0]);
    });
    // btn_sign.addEventListener("sumbit",function(){
    //     alert("you gay");
    }
    
// }

init();