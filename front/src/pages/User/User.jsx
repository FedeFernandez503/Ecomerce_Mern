import { useEffect, useState } from "react";
import "./User.css";
import { FiEdit } from 'react-icons/fi';
export function User(props) {
  const [perfil, setPerfil] = useState({});
  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchData = async () => {
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
      setPerfil(data)
    }
    fetchData()
      .catch(console.error);
  }, [])

  const id = perfil._id
  const updateAndEdit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:8080/api/auth/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(perfil)
    })
    setPerfil(perfil)
  }


  const CambiarPerfil = (e) => {
    let valorUser = e.target.value
    let id = e.target.id
    setPerfil((prev) => {
      return {
        ...prev,
        [id]: valorUser
      }
    })
  }

  return (
    <div className="container">
      {Object.entries(perfil).map((datos, i) => {
        if (datos[0] === "iat") return null
        if (datos[0] === "_id") return null
        return (
          <div className="content-data" key={i}>
            <h1 className="datos-h1">{datos[1]} </h1>
          </div>
        )
      })}
      <form onSubmit={updateAndEdit}>
        <input type="text" placeholder="Usuario" id="username" onChange={CambiarPerfil} />
        <input type="text" placeholder="Apellido" id="lastname" onChange={CambiarPerfil} />
        <input type="text" placeholder="email" id="email" onChange={CambiarPerfil} />
        <input type="text" placeholder="Telefono" id="cellPhone" onChange={CambiarPerfil} />
        <input type="text" placeholder="Pais" id="Country" onChange={CambiarPerfil} />
        <input type="text" placeholder="Ciuidad" id="City" onChange={CambiarPerfil} />
        <input type="text" placeholder="Barrio" id="Direction" onChange={CambiarPerfil} />
        <button className="edit">Enviar Cambios</button>
      </form>
    </div>
  )
}