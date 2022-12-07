const route = require("express").Router();
const productHandlers = require('../controllers/productController.js');

    route.post('/crearProducto', productHandlers.crearProducto);
    route.get('/getProduct', productHandlers.getProduct);
    route.get('/getCategory', productHandlers.getCategory);
    

module.exports = route;