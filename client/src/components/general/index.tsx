import React, { Component } from "react";
import { appendScript } from "../../utils/append/appendScript";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import Navbar from "../navbar/Navbar";

// LOCAL CSS
import './general.css'

// IMAGE 
import LogoMenu from "../../assets/img/logo_correto_geral.svg"

// COMPONENTS
import SideNav from "./sidenav"

export default class General extends Component {
    componentDidMount() {
        appendScript("https://code.jquery.com/jquery-2.1.1.min.js")
        appendScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js")
        appendScript("https://code.jquery.com/jquery-3.6.0.min.js")
    }
    
    render() {
        let Navs
        if (getCookie("nivel") == 'acessoComum') {
            Navs = <>
                <SideNav link="/Home" class="fa-solid fa-house" name="Home" />
                <SideNav link="/Documentos" class="fa-solid fa-file-lines" name="Documentos" />
                <SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" />
                <SideNav link="/Organograma" class="fa-solid fa-sitemap" name="Organograma" />
            </>
        }
       else if (getCookie("nivel") == 'acessoTotal') {
            Navs = <>
                <SideNav link="/Home" class="fa-solid fa-house" name="Home" />
                <SideNav link="/Documentos" class="fa-solid fa-file-lines" name="Documentos" />
                <SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" />
                <SideNav link="/Organograma" class="fa-solid fa-sitemap" name="Organograma" />

                <div className="hoverSide">
                    <SideNav link="" class="fa-solid fa-binoculars" name="Visualizar" />
                    <div className="showSide">
                        <SideNav link="/Funcionario" class="fa-solid fa-people-group" name="Funcionários" />
                        <SideNav link="/Departamentos" class="fa-solid fa-layer-group" name="Departamentos" />
                        <SideNav link="/Cargos" class="fa-solid fa-briefcase" name="Cargos" />
                    </div>
                </div>
        
                <div className="hoverSide">
                    <SideNav link="" class="fa-solid fa-plus" name="Criar" />
                    <div className="showSide">
                        <SideNav link="/NovoPerfil" class="fa-solid fa-user-plus" name="Novo Perfil" />
                        <SideNav link="/NovoDepartamento" class="fa-solid fa-layer-group" name="Novo Departamento" />
                        <SideNav link="/NovoCargo" class="fa-solid fa-briefcase" name="Novo Cargo" />
                    </div>
                </div>

                <SideNav link="/Notificacao" class="fa-solid fa-message" name="Notificações" />
            </>
        }

        if (getCookie("firstAcess") == 'true' || getCookie("aguardoConfirmacao") == 'true' ) {
           Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" />
           <SideNav link="/Documentos" class="fa-solid fa-file-lines" name="Documentos" />
           <SideNav link="" class="fa-solid fa-lock" name="Meu Perfil" />
           <SideNav link="" class="fa-solid fa-lock" name="Organograma" /></>
        }
        return (
            <>
                <Navbar />
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <img className="logo" src={LogoMenu} />
                    {Navs}
                    {/*<SideNav link="" class="fa-solid fa-file" name="Documentos" />*/}
                    <SideNav link="/logout" class="fa-solid fa-arrow-right-from-bracket" name="Sair" />
                </ul>

                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons"></i></a>
            </>
        )
    }
}