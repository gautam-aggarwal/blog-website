import express from "express";
import bodyParser from "body-parser";
import { title } from "process";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
});
app.get("/reddit",(req,res)=>{
    res.render("reddit.ejs")
});
app.get("/google",(req,res)=>{
    res.render("google.ejs")
});
app.get("/trolls",(req,res)=>{
    res.render("trolls.ejs")
});
app.get("/newthings",(req,res)=>{
    res.render("newthings.ejs")
});
app.get("/webstartups",(req,res)=>{
    res.render("webstartups.ejs")
});
app.get("/philosophy",(req,res)=>{
    res.render("philosophy.ejs")
});
app.get("/die",(req,res)=>{
    res.render("die.ejs")
});
app.get("/stuff",(req,res)=>{
    res.render("stuff.ejs")
});
app.get("/equity",(req,res)=>{
    res.render("equity.ejs")
});
app.get("/union",(req,res)=>{
    res.render("union.ejs")
});
app.get("/hacker",(req,res)=>{
    res.render("hacker.ejs")
});
app.get("/judgements",(req,res)=>{
    res.render("judgements.ejs")
});
app.get("/microsoft",(req,res)=>{
    res.render("microsoft.ejs")
});
app.get("/notstartup",(req,res)=>{
    res.render("notstartup.ejs")
});

app.get("/wise",(req,res)=>{
    res.render("wise.ejs")
});
app.get("/founders",(req,res)=>{
    res.render("founders.ejs")
});
app.get("/art",(req,res)=>{
    res.render("art.ejs")
});
app.get("/student",(req,res)=>{
    res.render("student.ejs")
});
app.get("/island",(req,res)=>{
    res.render("island.ejs")
});

app.get("/create",(req,res)=>{
    res.render("create.ejs")
});
app.post("/submit",(req,res)=>{
    const titl=req.body["title"];
    const bdy=req.body["blogbody"];
    res.render("submit.ejs",{
        title:titl,
        blogbody:bdy,
    })
});

app.listen(port,()=>{
    console.log(`The server is listening to port ${port}`)
})