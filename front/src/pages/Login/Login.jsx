import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { Link } from "react-router-dom"
import "./Login.css"
const Login = (props) => {

  const parrafo = document.getElementById("parrafoAlert")

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "test@test",
    password: "1234",
  });
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();

    const newLogin = { ...form };

    try {
      const response = await fetch("http://localhost:8080/api/auth/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLogin),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data?.token)
        props.onLogin(true)
        return navigate("/user");
      } if (form.password !== data) {
        parrafo.textContent = "Fallo a la hora de logearse correo o contraseña es incorrecta";
      }
      else {
        parrafo.textContent = "Fallo a la hora de logearse correo o contraseña es incorrecta";
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <form className="form_login" onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          className="input_login"
          type="text"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => updateForm({ email: e.target.value })}
        />
        <input
          className="input_login"
          type="password"
          required
          placeholder="Password"
          value={form.password}
          onChange={(e) => updateForm({ password: e.target.value })}
        />
        <button className="button_login" type="submit">
          <span>Login</span>
        </button>
        <p id="parrafoAlert"></p>
        <p>No account?<Link to="/signup" className="signup_link">Signup</Link></p>
      </form>
    </div>
  )
}
export default Login;