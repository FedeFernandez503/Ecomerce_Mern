import "./Product.css"
import React, { Component } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

const Product = props => (
    <div className="card">
    <img className="imageProduct" src={props.product.image}></img>
    
        <p>
        {props.product.name}
        </p>
        <p>
        Precio: {props.product.price}
        </p>
        <p>
        Stock: {props.product.stock}
        </p>
        <p>
            <button>Agregar</button>
        </p>
    </div>
)

const Category = props => (
    <div className="card">
    <img className="imageProduct" src={props.producto.image}></img>
    
        <p>
        {props.producto.name}
        </p>
        <p>
        Precio: {props.producto.price}
        </p>
        <p>
        Stock: {props.producto.stock}
        </p>
        <p>
            <button>Agregar</button>
        </p>
    </div>
)

export default class PaginaPrincipal extends Component {
constructor(props) {
super(props);

this.state = {products: []};
}


componentDidMount() {
axios.get('http://localhost:8080/api/products/getProduct')
.then(response => {
this.setState({ products: response.data});
})
.catch((error) => {console.log(error);
})
}
algo() {
return this.state.products.map(currentproducts => {
return <Product product={currentproducts}/>
})
}
componentsDidMount() {
    axios.get('http://localhost:8080/api/products/getCategory')
    .then(response => {
    this.setState({ products: response.data});
    })
    .catch((error) => {console.log(error);
    })
    }
    olga() {
    return this.state.products.map(currentproducts => {
    return <Category producto={currentproducts}/>
    })
    }


render() {
return (
<div id="containerProduct">
    <div>
        <h2>Filtros</h2>
        <h3>Categorias</h3>
        <Link to="/" className="links"><h6>Procesadores</h6></Link>
        <Link to="/" className="links"><h6>Rams</h6></Link>
        <Link to="#" className="links"><h6>Discos Duros</h6></Link>
        <Link to="#" className="links"><h6>Fuentes</h6></Link>
        <Link to="#" className="links"><h6>Tarjetas Graficas</h6></Link>
        <Link to="#" className="links"><h6>Pendrives</h6></Link>
        <Link to="#" className="links"><h6>Motherboards</h6></Link>
        <Link to="#" className="links"><h6>Tarjetas de Expansion</h6></Link>
        <Link to="#" className="links"><h6>Coolings</h6></Link>
        <Link to="#" className="links"><h6>Monitores</h6></Link>
        <Link to="#" className="links"><h6>Perifericos</h6></Link>
        <Link to="#" className="links"><h6>Cables y Adaptadores</h6></Link>
        <Link to="#" className="links"><h6>Impresoras</h6></Link>
        <Link to="#" className="links"><h6>Gabinetes</h6></Link>
        <Link to="#" className="links"><h6>Servicios</h6></Link>
        <Link to="#" className="links"><h6>Equipos armados</h6></Link>
        <h3>Precio</h3>
        <Link to="#" className="links"><h6>menos de $1000</h6></Link>
        <Link to="#" className="links"><h6>menos de $2000</h6></Link>
        <Link to="#" className="links"><h6>mas de $2000</h6></Link>
        <h3>Marca</h3>
        <Link to="#" className="links"><h6>AMD</h6></Link>
        <Link to="#" className="links"><h6>Intel</h6></Link>
        <Link to="#" className="links"><h6>Kingston</h6></Link>
        <Link to="#" className="links"><h6>AsRock</h6></Link>
    </div>
    {this.algo()}
    {this.olga()}
    </div>
)
}
}