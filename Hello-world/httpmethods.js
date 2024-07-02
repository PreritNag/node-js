const http = require("http");
const fs = require("fs");
const url = require("url");
const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url}`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myurl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myurl.query.myname;
        res.end(`Hi,${username}`);
        break;
      case "/search":
        const search = myurl.query.mysearch;
        res.end(`searching for ${search}`);
        break;
    case "\login":
        if(res.method==="GET"){
            res.end("login page")
            elseif(res.method==="POST"){
                //DB Query            
            res.end("login succes")
            }
        }
      default:
        res.end("404Page");
        break;
    }
  });
});
myserver.listen(8002, () => console.log("server started"));
