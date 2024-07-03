const express = require("express");
const users = require(".\\MOCK_DATA.json");
const app = express();
const fs = require("fs");
const PORT = 5000;
// routes

app.get("/users", (req, res) => {
  return res.json(users);
});

app.listen(PORT, () => {
  console.log(`server started at port+${PORT}`);
});
app.use(express.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    console.log("hello")
    // return res.json({mgs:"hello this is server"})
    next();
})
app.use((req, res, next) => {
  console.log("tommy");
 next();
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  //TOOD: create new user
  const body = req.body;
  users.push({ ...body, id: users.length});
  //TODO:save users
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});
app.patch("/api/users", (req, res) => {
  //TOOD:edit the user wit id
  return res.json({ status: "pending" });
});
app.delete("/api/users", (req, res) => {
  //TOOD:delete the user id
  return res.json({ status: "pending" });
});
// custom header
app.get("/api/users", (req, res) => {
    res.setHeader("X-myusername","pokemon X AND y");
    return res.json(users);
});
