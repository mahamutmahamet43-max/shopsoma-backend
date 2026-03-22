const mongoose = require("mongoose")

const saleSchema = new mongoose.Schema({

shop:{
type:String,
required:true
},

product:{
type:String
},

customer:{
type:String
},

quantity:{
type:Number
},

total:{
type:Number
},

debt:{
type:Number,
default:0
},

date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Sale",saleSchema)