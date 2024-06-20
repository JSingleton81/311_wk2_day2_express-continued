const contacts = require("../data/contacts")

const getAllData = (req, res) => {
  res.json(contacts)
}

const getDataById = (req, res) => {

  const id = req.params.id
  const foundContact =contacts.find((contact) => {
    return contact._id=id
  })
  res.json(foundContact)
}

const createData = (req, res) => {
  const newData = {
    _id: contacts.length + 1,     
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar

  }
  contacts.push(newData)
  res.json(contacts)
}

module.exports = {getAllData, getDataById, createData}