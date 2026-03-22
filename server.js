require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/products")
const salesRoutes = require("./routes/sales")

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/sales", salesRoutes)

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("✅ MongoDB Connected")
})
.catch(err=>{
    console.log("❌ MongoDB Error:", err)
})

// Test route
app.get("/",(req,res)=>{
    res.send("Shop System API Running 🚀")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("🚀 Server running on port",PORT)
})