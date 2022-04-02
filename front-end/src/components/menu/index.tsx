import { Component } from "react";

// LOCAL CSS
import './style.css'

// IMAGE
import LogoMenu from "../../assets/img/logo_correto_geral.svg"

export default class Menu extends Component{
    render(){
        return(
            <>
            <link rel="stylesheet" href="./style.css" />
            <ul id="slide-out" className="sidenav sidenav-fixed">
                    <img className="logo" src={LogoMenu}/>
                    <li><a href="#!"><i className="fa-solid fa-house"></i> HOME</a></li>
                    <li><a href="#!"><i className="fa-solid fa-location-crosshairs"></i> Organograma</a></li>
                    <li><a href="#!"><i className="fa-solid fa-user"></i> Perfil do Colaborador</a></li>
                    <li><a href="#!"><i className="fa-solid fa-id-badge"></i> Novo Perfil</a></li>
                    <li><a href="#!"><i className="fa-solid fa-message"></i> Notificações</a></li>
                    <li><a href="#!"><i className="fa-solid fa-file"></i> Documentos</a></li>
            </ul><a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </>

        )
    }
}