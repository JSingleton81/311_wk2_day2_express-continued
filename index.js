const express = require("express");
const app = express();
const contactRoutes = require("./routes/contacts")
const vehicleRoutes = require("./routes/vehicles")
const commentsRoutes = require("./routes/comments")
const productsRoutes = require("./routes/products")
// const contacts = require("./data/contacts")
// const vehicles = require("./data/vehicles")
// const comments = require("./data/comments")
// const products = require("./data/products")


// console.log(contacts)

const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(express.json())
app.use(contactRoutes)
app.use(vehicleRoutes)
app.use(commentsRoutes)
app.use(productsRoutes)
// app.use(users)

app.get("/hello",(req, res) => {
  res.send("hello world")
})









app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
