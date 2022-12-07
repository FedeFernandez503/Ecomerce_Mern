const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    ProductId:{
        type: String,
        require: true,
        unique:true,
    },
    name:{
        type: String,
        require: true,
        unique: true,
    },
    price:{
        type: String,
        require: true,
    },
    quantity:{
        type: Number,
        require: true
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model("Cart", CartSchema)