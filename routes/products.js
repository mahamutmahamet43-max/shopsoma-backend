const express = require("express")
const router = express.Router()

const Product = require("../models/Product")

// GET PRODUCTS
router.get("/:shop", async (req,res)=>{

const products = await Product.find({shop:req.params.shop})

res.json(products)

})

// ADD PRODUCT
router.post("/", async (req,res)=>{

const product = new Product(req.body)

await product.save()

res.json(product)

})

// DELETE PRODUCT
router.delete("/:id", async (req,res)=>{

await Product.findByIdAndDelete(req.params.id)

res.json({success:true})

})

module.exports = router