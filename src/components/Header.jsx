import { HiCode } from "react-icons/hi";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { ButtonMove, NavbarButton } from "./ButtonMove";
import { useState } from "react";
import propTypes from "prop-types"



export function Header() {
  return (
    <>
    <section id="home">
      <HeaderNav />
      <HeaderFooter />
    </section>
    </>
  );
}

function UlNavbar({className}){
          return <ul className={className}>
          <li>
            <NavbarButton container={"home"}>Inicio</NavbarButton>
          </li>
          <li><NavbarButton container={"projects-container"}>Proyectos</NavbarButton></li>
          <li><NavbarButton container={"knowledge-section"}>Habilidades</NavbarButton></li>
          </ul>
} 

UlNavbar.propTypes = {
  className: propTypes.string
}



export function HeaderNav() {
  const [toggle, setToggle] = useState(false)
  const toggleClass = "navbar-ul-mobile-translate"
  return (
    <>
      <nav className="navbar">
      <div>
        <HiCode className="code" />
      <UlNavbar className="navbar-ul"/>
        
        <button className="toggle-menu" onClick={() => setToggle(!toggle)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 124 124"><path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path></svg>
        </button>
        </div>


        <UlNavbar className={`navbar-ul-mobile ${!toggle ? toggleClass : ""}`}/>

        {/* {
        toggle && 
        } */}


        
      </nav>


    </>
  );
}

function HeaderFooter() {
  return (
    <>
      <footer className="navbar-footer">
        <p>
          Hola soy <span className="greetings">👋🏼</span>
        </p>
        <h1>Juan Villegas </h1>
        <p>
        Apasionado en crear experiencias interactivas y atractivas para los usuarios, utilizando tecnologías modernas y mejores prácticas de desarrollo.
        </p>
        <div className="social-media-container">
        <a href="https://github.com/JuanDVP0303"target="blank" rel="noreferrer" ><FaGithub className="github-icon" style={{borderRadius:"50%"}}></FaGithub></a>
        <a href="https://www.linkedin.com/in/juan-villegas-a84b7325b/" target="blank" rel="noreferrer"><FaLinkedin className="linkedin-icon" ></FaLinkedin></a>
        </div>
    <ButtonMove container={"projects-container"}>Proyectos</ButtonMove>
      </footer>
    </>
  );
}
