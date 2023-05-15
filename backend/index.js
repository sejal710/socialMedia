const express = require("express");
const {connection} = require("./db")
const {userRouter} = require("./router/user.router")
require('dotenv').config()

const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());

app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Welcome To The Home Page")
})

app.listen(process.env.PORT,async() => {
    console.log(`Server is running ${process.env.PORT}`);
    try{
        await connection;
        console.log("DB is connected")

    }
    catch(e){
        console.log(e.message)
    }
})