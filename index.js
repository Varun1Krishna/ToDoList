import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const tasks1=[];
const tasks2=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("index.ejs",{task:tasks1});
})

app.post("/addtask",(req,res)=>{
    const task=req.body["newtask"];
    tasks1.push(task);
    res.redirect("/");
})

app.post("/addtask2",(req,res)=>{
    const task=req.body["newtask"];
    tasks2.push(task);
    res.redirect("/work");
})

app.get("/work",(req,res)=>{
    res.render("index2.ejs",{task:tasks2});//change the index file create a new one and copy the contents of previous into that  -vk
})
app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})