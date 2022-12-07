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
    },
    categories:{
        type: Array,
        require: true,
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model("Product", ProductSchema)
// "_id": {
//    "$oid": "638c33ba93b6fd8ecf713ed8"
 // },
//  "image": "hola",
//  "name": "Procesador AMD Ryzen 7 5700G",
//  "description": "Procesador de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
//  "price": "U$S 339",
//  "stock": "3",
//  "categories": [
//    "Procesadores"
//  ],