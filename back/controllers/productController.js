const Product = require("../model/product")
const bcrypt = require('bcrypt')

exports.crearProducto = function(req, res) {
    var newProduct = new Product(req.body); //creamos un nuevo producto en la base de datos
    newProduct.save(function(product, err) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        console.log(newProduct)
        console.log(product)
        return res.json(product); //mostramos el producto en un json.
      }
    });
}
exports.getProduct = async function(req, res) {
  try {
  const algo = await Product.find() 
  res.json(algo)
  } catch {
    res.status(401).json({ message: 'Fallo a la hora de logearse Usuario o contraseña es incorrecta' });
  }
};
exports.getCategory = async function(req, res) {
  try { 
  const olga = await Product.find({categories: "Procesadores"})
  res.json(olga) 
  } catch {
    res.status(401).json({ message: 'Fallo a la hora'})
  }
};