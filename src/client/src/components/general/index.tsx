import React, { Component } from "react";
import { appendScript } from "../../utils/appendScript";



// LOCAL CSS
import './general.css'

// IMAGE
import LogoMenu from "../../assets/img/logo_correto_geral.svg"

// COMPONENTS
import SideNav from "./sidenav";

export default class General extends Component {
    componentDidMount() {
        appendScript("https://code.jquery.com/jquery-2.1.1.min.js")
        appendScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js")
        appendScript("../../utils/Modal/modal.js")
    }
    render() {
        return (
            <>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <img className="logo" src={LogoMenu} />
                    <SideNav link="/Home" class="fa-solid fa-house" name="Home" />
                    <SideNav link="/Organograma" class="fa-solid fa-location-crosshairs" name="Organograma" />
                    <SideNav link="/PerfilColaborador" class="fa-solid fa-user" name="Perfil do Colaborador" />
                    <SideNav link="/NovoPerfil" class="fa-solid fa-id-badge" name="Novo Perfil" />
                    {/*<SideNav link="/Notificacao" class="fa-solid fa-message" name="Notificações" />*/}
                    {/*<SideNav link="/Funcionario" class="fa-solid fa-people-group" name="Funcionarios" />*/}
                    {/*<SideNav link="" class="fa-solid fa-file" name="Documentos" />*/}
                    <SideNav link="/logout" class="fa-solid fa-arrow-right-from-bracket" name="Logout"/>
                </ul>

                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons"></i></a>
            </>
        )
    }
}