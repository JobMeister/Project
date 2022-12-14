const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html")

});

app.get("/about.html", function(req,res){
    res.sendFile(__dirname+"/about.html")
});

app.get("/signup.html", function(req,res){
    res.sendFile(__dirname+"/signup.html")
});

app.get("/index.html", function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.get("/login.html", function(req,res){
    res.sendFile(__dirname+"/login.html")
});

app.get("/contact.html", function(req,res){
    res.sendFile(__dirname+"/contact.html")
});

app.get("/admin.html", function(req,res){
    res.sendFile(__dirname+"/admin.html")
});
app.listen("3000",function(req,res){
    console.log("Site is on.")
})


