const express = require('express')
const router = express.Router()
// const comments = require("../data/comments")
const comments = require("../controllers/comments")

router.get("/comments",comments.getAllData)
router.get("/comments/:id", comments.getDataById)

router.post("/comments", comments.createData)


module.exports = router