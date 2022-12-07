import "./Footer.css"
import { Link } from "react-router-dom"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook, BsFillEnvelopeFill } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export function Footer () {
  return (
    <div className="footer-main">
      <nav className="footer">
         
          <div className='logo'> 
          </div>
          
            <div className="div-icons">
            <a className="link" href="https://es-la.facebook.com/"><BsFacebook className='icon' /></a>
            <a href="https://www.instagram.com/" className="link"><RiInstagramFill className='icon' /></a>
            <a href="https://twitter.com/?lang=es" className="link"><AiFillTwitterCircle className='icon' /></a>
            <a href="https://uy.linkedin.com/" className="link" ><AiFillLinkedin className='icon' /></a>
            <a href="https://mail.google.com/mail/u/0/" className="link"><BsFillEnvelopeFill className="icon"/></a>
            </div>          
          </nav>
           <p>Esta pagina fue hecha por: Maximiliano Correa, Juanmanuel Romero y Federico Fernandez</p>
    </div>
  )
}