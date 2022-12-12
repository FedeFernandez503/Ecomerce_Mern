import "./Product.css"
import axios from 'axios';
import { useEffect, useState } from "react";
import {BsFillCartFill } from "react-icons/bs"
import { Categories } from "./Menucategory";






export function Product() {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8090/api/products/getProduct')
            setProducts(response.data)
        };
        fetchData()
    }, [])
    const nombre = "Memoria HyperX Fury"
    function Guardar() {

    }
      function TomarDatos() {
        const fetchTomarDatos = async () => {
            const response = await fetch('http://localhost:8090/api/products/getProductName', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nombre
                })
            })
            const data = await response.json()

            //console.log(data)

        }
        fetchTomarDatos()
    }
    
    TomarDatos()
        return (
        <div id="containerProduct">
            <Categories/>
            {products.map((product, i) => (
            <div key={i} className="card">
                <img className="imageProduct" src={product.image}></img>
                <form action="/cart">
                <p id="nombre">{product.name}</p>
                <p>{product.price}</p>
                <p>{product.stock}</p>
                <button type="submit"><BsFillCartFill className="Agregar"/></button>
                </form>
                <script src="./Funcion1.js">  </script>
            </div>
            ))}
        
        </div>
        )  
}   
