// class contact{
//     name;
//     email;
//     theme;
//     content;


//     constructor(client_name, client_email, client_theme,client_content){
//         this.name = client_name;
//         this.email = client_email;
//         this.theme = client_theme;
//         this.content = client_content;
//     } 


// };

var x = Number(localStorage.getItem("num_of_msg"));    
var i;
if(x == null || i ==0) i =0;
else i=x;

$("#Send").click(function(){
    Get_msg(i);
    i++;
});

function Get_msg(i){
    // var a = new contact($("#name").val(),$("#email").val(),$("#subject").val(),$("#message").val());

    localStorage.setItem("Client " + i + " name", $("#name").val());
    localStorage.setItem("Client " + i + " email", $("#email").val());
    localStorage.setItem("Client " + i + " subject", $("#subject").val());
    localStorage.setItem("Client " + i + " message", $("#message").val());
    
    localStorage.setItem("num_of_msg",i+1);
};




