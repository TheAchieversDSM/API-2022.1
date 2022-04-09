import React, { Component } from "react";

// LOCAL CSS
import './style.css'

// COMPONENTS
import SideNav from "../../components/general";
import OrganoChart from "../../components/organoChart";
import Button from "../../components/button/button";
import General from "../../components/general";

export default class Organograma extends Component{
    render(){
        return(
            <>
                <General />

                <div className="conteudo">
                    <select className="browser-default">
                        <option value="" disabled selected>Escolha o departamento</option>
                        <option value="1">T.I.</option>
                        <option value="2">R.H.</option>
                    </select>

                    <Button class="inativos" name="Inativos"/>
                    <Button class="novodep" name="Novo Departamento" />
                    
                    <OrganoChart/>
                </div>
            </>
        )
    }
}