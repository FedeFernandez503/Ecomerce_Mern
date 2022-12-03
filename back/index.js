const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const authUser = require("./routes/users")


dotenv.config()
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Conectado a MongoDb"))
    .catch((err) => console.log(err))

    app.use("/auth", authRoute)
    app.use("/users", authUser)


    app.listen("8080 ", () => {
        console.log("backend ejecutandose")
    })