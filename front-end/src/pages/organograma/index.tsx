import { Component } from "react";
import Menu from "../../components/menu";
import OrganoChart from "../../components/organoChart";


// LOCAL CSS
import './style.css'

export default class Organograma extends Component{
    render(){
        return(
            <>
                <link rel="stylesheet" href="./style.css" />
                <Menu />
                <div className="conteudo">
                    <select className="browser-default">
                        <option value="" disabled selected>Escolha o departamento</option>
                        <option value="1">T.I.</option>
                        <option value="2">R.H.</option>
                    </select>
                    <button type="button" className="inativos">Inativos</button>
                    <button type="button" className="novodep">Novo Departamento</button>
                    <OrganoChart/>
                </div>
               
            </>
        )
    }
}