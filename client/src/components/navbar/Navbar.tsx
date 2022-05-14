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
        Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" /><SideNav link="/Organograma" class="fa-solid fa-location-crosshairs" name="Organograma" /></>
    }
    else if (getCookie("nivel") == 'acessoTotal') {
        Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" /><SideNav link="/Organograma" class="fa-solid fa-location-crosshairs" name="Organograma" /><SideNav link="/NovoPerfil" class="fa-solid fa-user-plus" name="Novo Perfil" /><SideNav link="/Notificacao" class="fa-solid fa-message" name="Notificações" /><SideNav link="/Funcionario" class="fa-solid fa-people-group" name="Funcionarios" /></>
    }
    if (getCookie("firstAcess") == 'true' || getCookie("aguardoConfirmacao") == 'true') {
        Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="" class="fa-solid fa-lock" name="Meu Perfil" /><SideNav link="" class="fa-solid fa-lock" name="Organograma" /></>
    }
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">

            </a>

            <img className="logo" src={LogoMenu} />
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
               <i className="fa-solid fa-bars"></i>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"

                }
            >
                <ul>
                   {Navs}
                    <li>
                        <a href="/logout"><i className="fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
                    </li>



                </ul>
            </div>
        </nav>
    );
}
