const express = require('express')
const router = express.Router()
// const vehicles = require("../data/vehicles")
const vehicles = require("../controllers/vehicles")


router.get("/vehicles",vehicles.getAllData)


router.get("/vehicles/:id",vehicles.getDataById)

router.post("/vehicles", vehicles.createData)



module.exports = router