import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { Link } from "react-router-dom"
import "./Login.css"
const Login = ({ user, setUser }) => {
    if (user.isLogin) {
        return <Navigate to={"/user/:_id"} />
    }
    return (
        <div className="container">
            <form>
                <h1>Login</h1>
                <input placeholder="Email" />
                <input placeholder="Password" />
                <button>Ingresar</button>
            </form>
        </div>
    )
}
export default Login;