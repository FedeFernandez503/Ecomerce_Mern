import "./Header.css"
import { NavLink } from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"

export function Header () {
  return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Navbar.Brand>
          <div className='logo'>     
          </div>
          <h1>Ecomerce App</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/user">User</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
  )
}