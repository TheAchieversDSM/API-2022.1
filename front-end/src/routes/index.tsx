import React from "react";
import {Route,BrowserRouter,Routes as Switch} from "react-router-dom";

import Login from "../pages/login";
import PreCadastro1 from "../pages/precadastro/pc1";
import PreCadastro2 from "../pages/precadastro/pc2";
import PreCadastro3 from "../pages/precadastro/pc3";
import NovoPerfil from "../pages/novo perfil";
import Notificacao from "../pages/notificacao";
import Organograma from "../pages/organograma";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element ={<Login/>}/> 
                <Route path="/PreCad1" element ={<PreCadastro1/>}/>
                <Route path="/PreCad2" element ={<PreCadastro2/>}/>
                <Route path="/PreCad3" element ={<PreCadastro3/>}/>
                <Route path="/Notificacao" element ={<Notificacao/>}/>
                <Route path="/NovoPerfil" element ={<NovoPerfil/>}/>
                <Route path="/Organograma" element ={<Organograma/>}/>      
            </Switch>
        </BrowserRouter>
        
    )
}

export default Routes;