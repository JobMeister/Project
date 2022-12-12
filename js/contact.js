class contact{
    name;
    email;
    theme;
    content;


    constructor(client_name, client_email, client_theme,client_content){
        this.name = client_name;
        this.email = client_email;
        this.theme = client_theme;
        this.content = client_content;
    } 


};

var i =0;

$("#Send").click(function(){
    Get_msg(i);
    i++;
});

function Get_msg(i){

    localStorage.setItem("Client" + i.toString(), contact($("#name").val(),$("#email").val(),$("#subject").val(),$("#message").val() ));
}




