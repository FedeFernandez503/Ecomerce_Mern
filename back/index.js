const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes")
const bodyParser = require('body-parser')
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());

app.use(express.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const url = process.env.CONNECT_URL;
const token = process.env.TOKEN_SECRET

app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization) {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[0], 'RESTFULAPIs', function (err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
  });

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Conectado a MongoDb"))
    .catch((err) => console.log(err))

    app.use("/api", routes);


    app.listen("8090 ", () => {
        console.log("backend ejecutandose")
    })