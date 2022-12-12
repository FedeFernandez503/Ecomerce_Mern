import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

export function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8090/api/categories/getCategories')
            setCategories(response.data)
        };
        fetchData()
    }, [])

    
        return (
        <div id="listaCategorias">
            <h2>Filtros</h2>
            <h3>Categorias</h3>
            {categories.map((category, i) => (
            <div key={i}>
                <p>{category.name}</p>
            </div>
            ))}
        
        </div>
        )
    
}   
