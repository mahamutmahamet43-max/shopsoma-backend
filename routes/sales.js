const express = require("express")
const router = express.Router()

const Sale = require("../models/Sale")

// Get sales
router.get("/:shop", async (req, res) => {
  try {
    const sales = await Sale.find({ shop: req.params.shop })
    res.json(sales)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Add sale
router.post("/", async (req, res) => {
  try {
    const sale = new Sale(req.body)
    await sale.save()
    res.json(sale)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router