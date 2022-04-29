import React, { Component } from "react";
import axios from "axios";
// LOCAL CSS
import './organograma.css'

// COMPONENTS

import OrganoChart from "../../components/organoChart";
import Button from "../../components/button/button";
import General from "../../components/general";
import Css from "../../assets/style/style";

export default class Organograma extends Component {
    state={
        departamentos: [],
        colaboradores: []
    }
    componentDidMount(){
        axios.get("http://localhost:5000/departamentos").then((response)=>{
            const departamentos = response.data
            this.setState({ departamentos }); 
        })
    }

    render() {
        return (
            <>
                <General />

                <Css ref="./organograma.css" />
                <div className="conteudo">
                    <select className="browser-default">
                        <option value="" disabled selected>Escolha o departamento</option>
                        { this.state.departamentos.map(departamento => <option key={departamento.dep_id} value={departamento.dep_id}>{departamento.dep_descricao}</option>)}
                    </select>

                    <Button class="inativos" name="Inativos" />
                    <Button class="novodep" name="Novo Departamento" />

                    <OrganoChart/>

                </div>
            </>
        )
    }
}