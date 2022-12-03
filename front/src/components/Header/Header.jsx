import "./Header.css"
import { Link} from "react-router-dom"

export function Header () {
  return (
      <nav className="header">
          
          <Link className="logo" to="/"><h1>MateaLibre</h1></Link>   
            <nav>
              <Link className="links-ref" to="/login">Login</Link>
              <Link className="links-ref" to="/register">Register</Link>
              <Link className="links-ref" to="/user">User</Link>
              <Link className="links-ref" to="/products">Product</Link>
            </nav>
          </nav>
  )
}