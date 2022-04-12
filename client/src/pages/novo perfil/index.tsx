import React, { Component } from "react";
import axios from "axios";

// LOCAL CSS
import './novoperfil.css'

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

    handleChangeDepartamento = event => {
        this.setState({
            departamento: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeCargo = event => {
        this.setState({
            cargo: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeSalario = event => {
        this.setState({
            salario: event.target.value,
        });
        console.log(this.state);
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
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
                        <div className="form col s6">
                            <div className="teste1 row">
                                <Input fname={this.handleChangeEmail} div="input-field" type="email" id="email" name="E-mail" class="validate" />
                                <Input fname={this.handleChangePassword} div="input-field" type="password" id="password" name="Senha" class="validate" />
                                <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" />
                            </div>
                        </div>
                        <div className="form col s6">
                            <div className="teste1 row">
                                <Input fname={""} div="input-field col s6"  type="text" id="departamento" name="Departamento" class="validate" />
                                <Input fname={""} div="input-field col s6"  type="text" id="cargo" name="Cargo" class="validate" />
                                <Input fname={""} div="input-field col s12" type="text" id="salario" name="Salario" class="validate"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;