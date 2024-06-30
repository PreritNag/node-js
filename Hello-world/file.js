const fs=require("fs");
// Sync
 fs.writeFileSync("file1.txt","Hello World");

 //Async
 fs.writeFile("file2.txt","hello my name is prerit",(err)=>{});

 