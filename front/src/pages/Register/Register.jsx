import { Navigate } from "react-router-dom"
import "./Register.css"
export function Register({user}) {
    if (user.isLogin) {
        return   <Navigate to={"/user/:_id"}/>
      }
    return (
        <div className="container">
            <h1>Register</h1>
        </div>
    )
}