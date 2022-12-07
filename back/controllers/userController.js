jwt = require('jsonwebtoken')
bcrypt = require('bcrypt')
const User = require("../model/user")

exports.register = function (req, res) {
  var newUser = new User(req.body); //creamos un nuevo usuario en la base de datos
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10); //Hasheo de la password con hash y salt automaticos
  newUser.save(function (err, user) {
    console.log(newUser)
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined; //ocultamos la password a la vista de la base de datos!
      return res.json(user); //mostramos el usuario en un json sin la password porque ya se oculto.
    }
  });
};

exports.sign_in = function (req, res) {
  User.findOne({
    email: req.body.email //buscamos por el email dentro de la base de datos
  }, function (err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) { //comparamos la password y el usuario.
      return res.status(401).json({ message: 'Fallo a la hora de logearse Usuario o contraseña es incorrecta' });
    }
    return res.json({ token: jwt.sign({ username: user.username, lastname: user.lastname, email: user.email, cellPhone: user.cellPhone, Counter: user.Counter, City: user.City, Direction: user.Direction }, 'RESTFULAPIs') }); //Pasamos el jsonwebtoken
  });
};

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ message: 'Unauthorized user!!' });
  }
};

exports.profile = function (req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  }
  else {
    return res.status(401).json({ message: 'Invalid token' });
  }
};