import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
//import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import Check from "../../components/input/check"
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";
import Option from "../../components/dropdown";
import DisableOption from "../../components/dropdown/disableOption";

class NovoDep extends Component {
    state = {
        departamento: "",
        departamento_id: "",
        departamentos: [],
        nivel_acesso: String,
        car_salario: "",
        car_descricao: ""
    }


    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const departamento = {
            departamento_nome: this.state.departamento,
            departamento_head: this.state.car_descricao,
        }

        axios.post("http://localhost:5000/departamentos/createNewDep", departamento).then((res) => {
            if (res.data.erro) {
                M.toast({ html: res.data.erro, classes: "red darken-4 rounded" })
            } else {
                M.toast({ html: res.data, classes: "green darken-4 rounded" })
            }
            
        axios.post(`http://localhost:5000/departamentos/getDepByName/${this.state.departamento}`).then((res) => {
            const cargo = {
                departamento_id: res.data[0].dep_id,
                nivel_acesso: this.state.nivel_acesso,
                car_salario: this.state.car_salario,
                car_descricao: this.state.car_descricao,
            }     
            axios.post("http://localhost:5000/cargos/createNewCargo", cargo).then((res) => {
                if (res.data.erro) {
                    M.toast({ html: res.data.erro, classes: "red darken-4 rounded" })
                } else {
                    M.toast({ html: res.data, classes: "green darken-4 rounded" })
                }
                this.state.departamento = ""
                this.state.car_descricao = ""
                this.state.car_salario = ""
            })
            
        })


        this.setState({
            
        })

        })

    };
    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Departamento</h3>

                    <div className="form">
                        <div className="teste1 row">
                            <Input lenght={100} stateName="departamento" fname={this.handleChange} div="input-field" type="text" id="departamento" name="Nome do Departamento" class="validate" />

                            <hr />

                            <Input lenght={100} stateName="car_descricao" fname={this.handleChange} div="input-field" type="text" id="head" name="Head" class="validate" />

                            <Input lenght={100} stateName="car_salario" fname={this.handleChange} div="input-field" type="text" id="salario" name="Salário" class="validate" />
                            
                            <select name="nivel_acesso" className="browser-default" id="" onChange={this.handleChange}>
                                <DisableOption disableValue="" disableNome="Nível de Acesso" />
                                <Option function="" value="1" name="Administrador - Acesso Total" />
                                <Option function="" value="2" name="Gestor - Acesso Parcial" />
                                <Option function="" value="3" name="Consultor - Acesso Parcial" />
                                <Option function="" value="0" name="Usuário Comum - Acesso Comum" />
                            </select>

                            <div className="botao-novoperfil">
                                <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar novo departamento" iClass="{}" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoDep;