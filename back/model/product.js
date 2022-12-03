const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    image:{
        type: String,
    },
    name:{
        type: String,
        require: true,
        unique: true,
    },
    description:{
        type: String,
        require: true,
        unique: true,
    },
    price:{
        type: String,
        require: true,
    },
    stock:{
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model("Product", ProductSchema)