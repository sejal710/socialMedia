const express = require("express");
require('dotenv').config()

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome To The Home Page")
})

app.listen(process.env.PORT,async() => {
    console.log(`Server is running ${process.env.PORT}`);
})