const http=require("http");
const express=require("express");
const myserver=express();
myserver.get("/",(req,res)=>{
    res.send("hello world");
});
myserver.listen(3000,()=>console.log("server started"))