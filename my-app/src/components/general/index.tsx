import React, { Component } from "react";

// LOCAL CSS
import './general.css'

// IMAGE
import LogoMenu from "../../assets/img/logo_correto_geral.svg"

// COMPONENTS
import SideNav from "./sidenav";

export default class General extends Component{
    render(){
        return(
            <>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <img className="logo" src={LogoMenu}/>
                
                <SideNav link="" class="fa-solid fa-house" name=" Home" />
                <SideNav link="/Organograma" class="fa-solid fa-location-crosshairs" name=" Organograma" />
                <SideNav link="/PerfilColaborador" class="fa-solid fa-user" name=" Perfil do Colaborador" />
                <SideNav link="/NovoPerfil" class="fa-solid fa-id-badge" name=" Novo Perfil" />
                <SideNav link="/Notificacao" class="fa-solid fa-message" name=" Notificações" />
                <SideNav link="" class="fa-solid fa-file" name=" Documentos" />
            </ul>

            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons"></i></a>
            </>
        )
    }
}