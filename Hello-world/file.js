const { log } = require("console");
const fs=require("fs");
Sync
 fs.writeFileSync("file1.txt","Hello World");

 Async
 fs.writeFile("file2.txt","hello my name is prerit",(err)=>{});

 const result=fs.readFileSync("./contact.txt","utf-8");
 console.log(result);

fs.readFile("./contact.txt", "utf-8",(err,result)=>{
    if(err){console.log("error",err)}
    else{console.log("result",result)}
});

fs.appendFileSync("./file1.txt",`hello brother`)