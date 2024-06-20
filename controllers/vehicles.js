const vehicles = require("../data/vehicles")

const getAllData = (req, res) => {
  res.json(vehicles)
}

const getDataById = (req, res) => {

  const id = req.params.id
  const foundVehicle =vehicles.find((vehicle) => {
    return vehicle._id=id
  })
  res.json(foundVehicle)
}

const createData = (req, res) => {
  const newData = {
    _id: vehicles.length + 1,     
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew

  }
  vehicles.push(newData)
  res.json(vehicles)
}

module.exports = {getAllData, getDataById, createData}
