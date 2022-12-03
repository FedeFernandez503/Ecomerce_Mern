const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    lastname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        
    },
    cellPhone:{
        type: String,
        require: true,
        unique: true,
    },
    Country:{
        type: String,
        require: true,
        unique: true,
    },
    City:{
        type: String,
        require: true,
        unique: true,
    },
    Direction:{
        type: String,
        require: true,
        unique: true,
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model("User", UserSchema)