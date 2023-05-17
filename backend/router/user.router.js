const express = require("express");
const userRouter = express.Router();
const {UserModel} = require('../model/user.model');

userRouter.get('/',async(req,res) => {
    try{
        let data = await UserModel.find();
        res.send({User:data})
    }
    catch(e){
        res.send({Message:e.messge})
    }
})

userRouter.post('/register', async (req, res) => {
    const { name, email, password, bio, dob } = req.body;
    try {
      const user = new UserModel({ name, email, password, bio, dob });
      await user.save();
      res.send({ User: user });
    } catch (error) {
      res.status(400).json({ Message: error.message });
    }
  });

  module.exports = {
    userRouter
}