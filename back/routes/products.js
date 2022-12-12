const route = require("express").Router();
const productHandlers = require('../controllers/productController.js');

    route.post('/crearProducto', productHandlers.crearProducto);
    route.get('/getProduct', productHandlers.getProduct);
    route.get('/productCategory', productHandlers.productCategory);
    route.post('/getProductName', productHandlers.getProductName)

    

module.exports = route;