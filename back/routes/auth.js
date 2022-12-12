const route = require("express").Router();
const userHandlers = require('../controllers/userController.js');

route.post('/register', userHandlers.register);
route.post('/sign_in', userHandlers.sign_in);
route.post('/profile', userHandlers.profile)
route.put('/update/:_id', userHandlers.update)

module.exports = route;