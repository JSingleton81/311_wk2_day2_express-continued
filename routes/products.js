const express = require('express')
const router = express.Router()
// const products = require("../data/products")
const products = require("../controllers/products")

router.get("/products",products.getAllData)
router.get("/products/:id",products.getDataById)

router.post("/products", products.createData)



module.exports = router

