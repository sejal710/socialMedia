
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    dob : {type:Date},
    bio:{type:String,},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{
    versionKey:false
});

 const UserModel = mongoose.model("User",Schema);
 module.exports = {UserModel} 