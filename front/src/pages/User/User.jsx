import { useEffect, useState } from "react";
import "./User.css";
export function User(props) {
    const token = localStorage.getItem("token")
    useEffect(() =>{
        const fetchData = async ()=>{
        const response = await fetch("http://localhost:8080/api/auth/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "authorization": token,
            },
            body: JSON.stringify({
              token: window.localStorage.getItem("token"),
            }),
          });
          let data = await response.json();
            await setPerfil(data)
        }
        fetchData()
        .catch(console.error);
    }, [])
    const [perfil, setPerfil] = useState();
    console.log(perfil)
    

    return (
        <div className="container">
            <div className="mostrarPerfil">
{/*                 {perfil.map((data, i)=> {
                    <h1>{perfil}</h1>
                })} */}
            </div>
        </div>
    )
}