const fs=require("fs");

// const os=require("os");
// console.log(os.cpus().length);

console.log("1");
//Blocking...

// const blocking=fs.readFileSync("contact.txt","utf-8");
// console.log(blocking)
// console.log("2");

//non-blocking
fs.readFile("contact.txt","utf-8",(err,result)=>{
    if(err){console.log("error",err)}
    else{console.log("result",result)}
})
console.log("3");