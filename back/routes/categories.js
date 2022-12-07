const route = require("express").Router();
const categoryHandlers = require('../controllers/categoryController.js');

    route.post('/createCategory', categoryHandlers.createCategory);
    

module.exports = route;