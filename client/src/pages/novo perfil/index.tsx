import React, { Component, useState,useEffect } from "react"
import axios from "axios";
// LOCAL CSS
//import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";

class NovoPerfil extends Component {
    state = {
        email: String,
        password: String,
    }

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        });
        console.log(this.state);
    };

    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
        console.log(this.state);
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,

        }
        await axios.post("http://localhost:5000/novocolaborador", user )
        alert("data foi")
    };
    render() {
        return (
            <>
                <General />
                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <div className="row">
                        <h2>Novo Perfil</h2>
                        <div className="form col 6">
                            <div className="teste1">
                                <Input div="input-field" type="email" id="email" name="Email" class="validate" fname={this.handleChangeEmail} />
                                <Input div="input-field" type="password" id="password" name="Senha" class="validate" fname={this.handleChangePassword} />
                                <Input div="input-field col s6"  type="text" id="departamento" name="Departamento" class="validate" fname={""} />
                                <Input div="input-field col s6"  type="text" id="cargo" name="Cargo" class="validate" fname={""} />
                                <Input div="input-field col s12" type="text" id="salario" name="Salario" class="validate" fname={""}/>
                                <ButtonMat class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" fname={this.handleSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;