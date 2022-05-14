import React, { Component } from "react";
import { appendScript } from "../../utils/append/appendScript";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import Navbar from "../navbar/Navbar";

// LOCAL CSS
import './general.css'

// IMAGE 
import LogoMenu from "../../assets/img/logo_correto_geral.svg"

// COMPONENTS
import SideNav from "./sidenav";
import axios from "axios";
import Notificacao from "../../pages/notificacao";

export default class General extends Component {
    state = {
        notificacao: 0,
    }
    componentDidMount() {
        appendScript("https://code.jquery.com/jquery-2.1.1.min.js")
        appendScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js")
        appendScript("https://code.jquery.com/jquery-3.6.0.min.js")
    }
    
    render() {
        let Navs
        let span = null
        if (getCookie("nivel") == 'acessoComum') {
            Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" /><SideNav link="/Organograma" class="fa-solid fa-location-crosshairs" name="Organograma" /></>
        }
       else if (getCookie("nivel") == 'acessoTotal') {
            axios.get("http://localhost:5000/notificacao/getAll").then((res) => {
                console.log(res.data.length);
                const notificacao =  res.data.length
                this.setState({notificacao})
            })
            
            if(this.state.notificacao > 0){
               span = <span className="badge white">{this.state.notificacao}</span>
                }
            Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="/MeuPerfil" class="fa-solid fa-user" name="Meu Perfil" /><SideNav link="/Organograma" class="fa-solid fa-location-crosshairs" name="Organograma" /><SideNav link="/NovoPerfil" class="fa-solid fa-user-plus" name="Novo Perfil" />{span}<SideNav link="/Notificacao" class="fa-solid fa-message" name="Notificações" /><SideNav link="/Funcionario" class="fa-solid fa-people-group" name="Funcionarios" /></>
        }
        if (getCookie("firstAcess") == 'true' || getCookie("aguardoConfirmacao") == 'true' ) {
           Navs = <><SideNav link="/Home" class="fa-solid fa-house" name="Home" /><SideNav link="" class="fa-solid fa-lock" name="Meu Perfil" /><SideNav link="" class="fa-solid fa-lock" name="Organograma" /></>
        }
        return (
            <>
                <Navbar />
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <img className="logo" src={LogoMenu} />
                    {Navs}
                    {/*<SideNav link="/CompletarCadastro" class="fa-solid fa-address-book" name="Completar Cadastro" />
                    <SideNav link="/uploadMateriais" class="fa-solid fa-file" name="Upload de Materiais" />
                    <SideNav link="" class="fa-solid fa-file" name="Documentos" />*/}
                    <SideNav link="/logout" class="fa-solid fa-arrow-right-from-bracket" name="Sair" />
                </ul>

                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons"></i></a>
            </>
        )
    }
}