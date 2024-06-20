const products = require("../data/products")

const getAllData = (req, res) => {
  res.json(products)
}

const getDataById = (req, res) => {

  const id = req.params.id
  const foundProduct =products.find((product) => {
    return product._id=id
  })
  res.json(foundProduct)
}

const createData = (req, res) => {
  const newData = {
    _id: products.length + 1,     
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  }
  products.push(newData)
  res.json(products)
}

module.exports = {getAllData, getDataById, createData}