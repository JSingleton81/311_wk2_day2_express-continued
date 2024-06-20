const express = require('express')
const router = express.Router()
// const contacts = require("../data/contacts")
const contacts = require("../controllers/contacts")


router.get("/contacts", contacts.getAllData)
router.get("/contacts/:id",contacts.getDataById)

router.post("/contacts", contacts.createData)


module.exports = router
