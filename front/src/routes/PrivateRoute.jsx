import React from "react"
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = (props) => {
    {/* Se le pasa el parametro props.Logeado para luego usarlo en el componente Routers en las rutas privadas
   Si se logea correctamente el parametro logeado cambiara a true con el parametro pasado en Routers que seria Logeado={isLogged}*/}
    let auth = props.Logeado
    return auth ? <Outlet /> : <Navigate to="/Login" />
}

export default PrivateRoutes