import "./Cart.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import {BsFillCartXFill } from "react-icons/bs"

export function Cart() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8090/api/products/getProduct')
            setProducts(response.data)
        };
        fetchData()
    }, [])

    
        return (
        <div id="ListOfBuy">
            <div className="Card">
            <p id="titleImageProduct">Imagen</p>
            <p id="titleNameOfProduct">Nombre</p>
            <p id="titleProductSelected">Precio</p>
            </div>
            {products.map((product, i) => (
            <div className="Card" id="productos" key={i}>
                <img id="imageProduct" src={product.image}></img>
                <p id="NameOfProduct">{product.name}</p>
                <p id="ProductSelected">{product.price}</p>
                <button><BsFillCartXFill className="iconsModify"/></button>
                <p id="Nombres"></p>
                
                <script src="./Funcion1.js">  </script>
            </div>
            ))}
            <p id="Total">Total U$S 533</p>
            <button id="comprar">Comprar</button>
        </div>
        )
    
}   
