import { useEffect, useState } from "react";
import "./User.css";
import { FiEdit } from 'react-icons/fi';
export function User(props) {
  const [perfil, setPerfil] = useState({});
  const token = localStorage.getItem("token")
  const formulario = document.getElementById("displayOn")
  const boton = document.getElementById("button")
  const [loading, setLoading] = useState();


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
    let data = await response.json()
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



  const cambiarDisplay = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      formulario.style.display = "flex"
      boton.style.display = "none"
    }, 500);
 
    
  }

  return (
    <div className="container">
      <div className="content-datos">
        <div className="div-text">
        <h1>Nombre:</h1>
        <h1>Apellido:</h1>
        <h1>Email:</h1>
        <h1>Telefono:</h1>
        <h1>Ciuidad:</h1>  
        <h1>Departamento:</h1>  
        <h1>Barrio:</h1>  
        </div>
        <div className="content-data">
      {Object.entries(perfil).map((datos, i) => {
        if (datos[0] === "iat") return null
        if (datos[0] === "_id") return null
        return (
          <div key={i}>
            <h1 className="datos-h1"> {datos[1]} </h1>
          </div>
        )
      })}
      </div>
      <form className="formulario-edit" id="displayOn" onSubmit={updateAndEdit}>
        <input type="text" placeholder="Usuario" id="username" className="input-user" onChange={CambiarPerfil} />
        <input type="text" placeholder="Apellido" id="lastname" className="input-user" onChange={CambiarPerfil} />
        <input type="text" placeholder="email" id="email" className="input-user" onChange={CambiarPerfil} />
        <input type="text" placeholder="Telefono" id="cellPhone" className="input-user" onChange={CambiarPerfil} />
        <input type="text" placeholder="Pais" id="Country" className="input-user" onChange={CambiarPerfil} />
        <input type="text" placeholder="Ciuidad" id="City" className="input-user" onChange={CambiarPerfil} />
        <input type="text" placeholder="Barrio" id="Direction" className="input-user" onChange={CambiarPerfil} />
        <button className="edit">Enviar Datos</button>
      </form>
    
      </div>
      <div className="buttonEdit" id="button">
      <button className="btn-user" onClick={cambiarDisplay}>
      {loading ? "Cargando Formulario..." : "Editar Perfil"}
      </button>
      </div>
    </div>
  )
}