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
        axios.post("http://localhost:5000/novocolaborador/create", user ).then((res)=>{
            if (res.data.erro){
                M.toast({html: res.data.erro , classes: "red darken-4 rounded"})
            }else{
                M.toast({html: res.data , classes: "green darken-4 rounded"})
            }
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
                            <Input stateName="departamento" fname={this.handleChange} div="input-field" type="text" id="departamento" name="Nome do Departamento" class="validate" />

                            <hr/>

                            <Input stateName="head" fname={this.handleChange} div="input-field" type="text" id="head" name="Head" class="validate" />

                            <Input stateName="salario" fname={this.handleChange} div="input-field" type="text" id="salario" name="Salário" class="validate" />

                            <ul>
                                <li>
                                    <Check fname="" name="Vale Refeição" value=""/>
                                </li>
                                <li>
                                    <Check fname="" name="Vale Transporte" value=""/>
                                </li>
                                <li>
                                    <Check fname="" name="Auxílio Creche" value=""/>
                                </li>
                                <li>
                                    <Check fname="" name="Plano de Saúde" value=""/>
                                </li>
                            </ul>
    
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