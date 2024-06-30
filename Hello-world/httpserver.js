
const http=require("http");
const myserver=http.createServer((req,res)=>{
    console.log("new req rec.");
    res.end("hello world"); 
}); 
myserver.listen(8000,()=>console.log("server started"));
