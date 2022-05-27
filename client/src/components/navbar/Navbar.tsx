import React from "react";
import { useState } from "react";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import SideNav from "../general/sidenav";
import "./navbar.css";


// IMAGE 
import LogoMenu from "../../assets/img/logo_correto_geral.svg"

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    let Navs
    if (getCookie("nivel") == 'acessoComum') {
        Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" /><SideNav link="/Organograma" class="fa-solid fa-sitemap" name="Organograma" /></>
    }
   else if (getCookie("nivel") == 'acessoTotal') {
        Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" /><SideNav link="/Organograma" class="fa-solid fa-sitemap" name="Organograma" /><SideNav link="/NovoPerfil" class="fa-solid fa-user-plus" name="Novo Perfil" /><SideNav link="/NovoDepartamento" class="fa-solid fa-layer-group" name="Novo Departamento" /><SideNav link="/NovoCargo" class="fa-solid fa-briefcase" name="Novo Cargo" /><SideNav link="/Notificacao" class="fa-solid fa-message" name="Notificações" /><SideNav link="/Funcionario" class="fa-solid fa-people-group" name="Funcionarios" /></>
    }
    if (getCookie("firstAcess") == 'true' || getCookie("aguardoConfirmacao") == 'true' ) {
       Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="" class="fa-solid fa-lock" name="Meu Perfil" /><SideNav link="" class="fa-solid fa-lock" name="Organograma" /></>
    }

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }


    return (
        <nav className="navigation">
            <a href="/" className="brand-name">

            </a>

            <img className="logo" src={LogoMenu} />

            <button className="hamburger"
            onClick={handleToggle}>{navbarOpen ? <i className="fa-solid fa-x"></i> :  <i className="fa-solid fa-bars"></i>}</button>
            
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"

                }
            >
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                   {Navs}
                    <li>
                        <a href="/logout"><i className="fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
                    </li>



                </ul>
            </div>
        </nav>
    );
}
