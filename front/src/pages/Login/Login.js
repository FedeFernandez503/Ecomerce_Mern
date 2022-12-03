import { useState } from "react";
import { useNavigate, Navigate} from "react-router";
import { Link } from "react-router-dom"
import "./Login.css"
const Login = ({user, setUser}) => {
    if (user.isLogin) {
        return   <Navigate to={"/user/:_id"}/>
      }
    return (
        <div id="containerLogin">
            <h1>Login</h1>
        </div>
    )
}
export default Login ;