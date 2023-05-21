const express = require("express");
const app = express();
const fs = require("fs");



app.get("/",(req,res) =>{
    res.send("Welcome to the web application!");
})

app.post("/api/users", (req,res) => {
    const user = req.body;
    fs.writeFileSync("users.json", JSON.stringify(user));
    res.send("User information saved successfully!");
})

app.get("/api/users", (req,res) => {
    const userData = fs.readFileSync("user.json", "utf8");
    const users = JSON.parse(userData);
    res.json(users);
})


const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running at port Number ${port}`);
})