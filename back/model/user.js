const mongoose = require("mongoose");
bcrypt = require('bcrypt'),
Schema = mongoose.Schema;

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
    hash_password:{
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

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
  };

module.exports = mongoose.model("User", UserSchema)