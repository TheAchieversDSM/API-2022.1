import React, { Component, useState, useEffect } from "react";
import axios from "axios";
// LOCAL CSS
import './style.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";

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
                <div className="conteudo">
                    <h2>Novo Perfil</h2>
                    <div className="form">
                        <Input div="input-field col s12" type="email" id="email" name="email" class="validate" fname={this.handleChangeEmail} />
                        <Input div="input-field col s12" type="password" id="password" name="password" class="validate" fname={this.handleChangePassword} />
                        <ButtonMat class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" fname={this.handleSubmit} />
                    </div>
                </div>
            </>
        )
    }
}






export default NovoPerfil;