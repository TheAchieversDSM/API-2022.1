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

class NovoDep extends Component {
    state = {
        departamento: "",
        dep_id: "",
        head: "",
        departamentos: [],
        tipoPessoa: String
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
        const user = {
            departamento_nome: this.state.departamento,
            departamento_head: this.state.head,
        }
        axios.post("http://localhost:5000/departamentos/createNewDep", user).then((res) => {
            if (res.data.erro) {
                M.toast({ html: res.data.erro, classes: "red darken-4 rounded" })
            } else {
                M.toast({ html: res.data, classes: "green darken-4 rounded" })
            }
        })
        axios.post(`http://localhost:5000/departamentos/getDepByName/${user.departamento_nome}`).then((res) => {
            console.log(res.data);
            const dep_id = res.data
            this.setState({ dep_id })

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

                            <Input lenght={100} stateName="head" fname={this.handleChange} div="input-field" type="text" id="head" name="Head" class="validate" />

                            <Input lenght={100000} stateName="salario" fname={this.handleChange} div="input-field" type="text" id="salario" name="Salário" class="validate" />

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