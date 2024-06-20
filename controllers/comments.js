const comments = require("../data/comments")

const getAllData = (req, res) => {
  res.json(comments)
}

const getDataById = (req, res) => {

  const id = req.params.id
  const foundComment =comments.find((comment) => {
    return comment._id=id
  })
  res.json(foundComment)
}

const createData = (req, res) => {
  const newData = {
    _id: comments.length + 1,     
    body: req.body.body,
    postId: 1
  }
  comments.push(newData)
  res.json(comments)
}

module.exports = {getAllData, getDataById, createData}