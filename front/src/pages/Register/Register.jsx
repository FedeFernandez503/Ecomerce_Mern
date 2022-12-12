import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./Register.css"
export function Register({ user }) {
    if (user.isLogin) {
        return <Navigate to={"/user/:_id"} />
    }
    const navigate = useNavigate()
    const parrafo = document.getElementById("alertParrafo");
    const [form, setForm] = useState({ /*Por defecto, el estado del formulario aparecerá con una cadena vacía. Cambiaremos sus valores mediante la función llamada "updateForm". Esta se encargará de setear el estado con los valores ingresados en los inputs desde el frontend de la aplicación. Esto lo haremos con una función "onChange que se encontrara dentro de cada input la cual se encargara de tomar su valor para luego enviar los valores al servidor en formato json. a la ruta (/api/signup) esta ruta se encargará de procesar los datos provenientes de este archivo frontend "signup.jsx" Y creara un nuevo usuario con los valores que introduzcamos en los campos del formulario." */
        username: "",
        lastname: "",
        email: "",
        password: "",
        cellPhone: "",
        Country: "",
        City: "",
        Direction: ""
    });

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newPerson = { ...form };

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPerson),
            });

            const data = await response.json();
            
            if (response.ok) {
                parrafo.textContent = "Cuenta creada correctamente";
                parrafo.style.backgroundColor = "green";
                parrafo.style.color = "white";
                return navigate("/login")

            } else {
                parrafo.textContent = "Email o numero telefonico ya registrado en esta pagina ";
                parrafo.style.color = "white";
                parrafo.style.background = "red";
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <form className="form_signup" onSubmit={onSubmit}>
                <h2>Sign up!</h2>
                <input
                    className="form-inputs"
                    type="text"
                    placeholder="Nombre de usuario"
                    required
                    value={form.username}
                    onChange={(e) => updateForm({ username: e.target.value })}
                />
                <input
                    required
                    className="form-inputs"
                    type="text"
                    placeholder="Apellido"
                    value={form.lastname}
                    onChange={(e) => updateForm({ lastname: e.target.value })}

                />
                <input
                    required
                    className="form-inputs"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}

                />
                <input
                    required
                    className="form-inputs"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => updateForm({ password: e.target.value })}

                />
                <input
                    required
                    className="form-inputs"
                    type="text"
                    placeholder="Telefono"
                    value={form.cellPhone}
                    onChange={(e) => updateForm({ cellPhone: e.target.value })}

                />
                <input
                    required
                    className="form-inputs"
                    type="text"
                    placeholder="Pais"
                    value={form.Country}
                    onChange={(e) => updateForm({ Country: e.target.value })}

                />
                <input
                    required
                    className="form-inputs"
                    type="text"
                    placeholder="Ciudad"
                    value={form.City}
                    onChange={(e) => updateForm({ City: e.target.value })}

                />
                <input
                    required
                    className="form-inputs"
                    type="text"
                    placeholder="Direccion"
                    value={form.Direction}
                    onChange={(e) => updateForm({ Direction: e.target.value })}

                />
                <button className="button_signup" type="submit">
                    <span>Crear cuenta</span>
                </button>
                <p  >Already have an account?<Link to="/login" className="login_link" >Login</Link></p>
                <p id="alertParrafo"></p>
            </form>
        </div>
    )
}