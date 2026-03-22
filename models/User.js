const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

username:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
},

role:{
type:String,
default:"shop"
},

subscription:{
type:Boolean,
default:false
},

subscriptionEnd:{
type:Date,
default:null
}

})

module.exports = mongoose.model("User",userSchema)