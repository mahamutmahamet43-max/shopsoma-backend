const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt")

const User = require("../models/User")

// REGISTER
router.post("/register", async (req,res)=>{

try{

const {name,username,password} = req.body

const exist = await User.findOne({username})

if(exist){
return res.json({success:false,message:"Username already exists"})
}

const hashed = await bcrypt.hash(password,10)

const user = new User({

name,
username,
password:hashed,
role:"shop"

})

await user.save()

res.json({success:true})

}catch(err){

console.log(err)
res.json({success:false})

}

})


// LOGIN
router.post("/login", async (req,res)=>{

try{

const {username,password} = req.body

const user = await User.findOne({username})

if(!user){
return res.json({success:false,message:"User not found"})
}

const match = await bcrypt.compare(password,user.password)

if(!match){
return res.json({success:false,message:"Wrong password"})
}

res.json({success:true,user})

}catch(err){

console.log(err)
res.json({success:false})

}

})

module.exports = router