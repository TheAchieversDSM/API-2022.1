import React, { Component } from "react";
import axios from "axios";

// LOCAL CSS
import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";

class NovoPerfil extends Component {
    state = {
        email: String,
        password: String,
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
            email: this.state.email,
            password: this.state.password,
            tipoPessoa: this.state.tipoPessoa
        }
        axios.post("http://localhost:5000/novocolaborador/create", user )

        alert('Usuário Criado.')
    };
    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Perfil</h3>

                    <div className="form">
                        <div className="teste1 row">
                            <Input stateName="email" fname={this.handleChange} div="input-field" type="email" id="email" name="E-mail" class="validate" />

                            <Input stateName="password" fname={this.handleChange} div="input-field" type="password" id="password" name="Senha" class="validate" />

                            <label>Pessoa</label>
                            <select name="tipoPessoa" className="browser-default" id="tipoPessoa" onChange={this.handleChange}>
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option value="Fisica" name="Pessoa Física" />
                                <Option value="Juridica" name="Pessoa Jurídica" />
                            </select>
    
                            <div className="botao-novoperfil">
                                <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;