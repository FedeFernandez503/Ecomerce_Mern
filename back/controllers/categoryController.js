const Category = require("../model/category")
const bcrypt = require('bcrypt')

exports.createCategory = function(req, res) {
    var newCategory = new Category(req.body); //creamos una nueva Categoria en la base de datos
    newCategory.save(function(category, err) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        console.log(newCategory)
        console.log(category)
        return res.json(category); //mostramos la categoria en un json.
      }
    });
}