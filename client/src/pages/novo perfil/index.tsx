import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
import './novoperfil.css'

// COMPONENTS
import InputValue from "../../components/input/inputValue";
import General from "../../components/general";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";

class NovoPerfil extends Component {
    state = {
        email: "",
        password: "",
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
            this.setState({
                email: "",
                password: ""
            })
        })
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
                            <InputValue value={this.state.email} stateName="email" fname={this.handleChange} div="input-field" type="email" id="email" name="E-mail" class="validate" />

                            <InputValue value={this.state.password}  stateName="password" fname={this.handleChange} div="input-field" type="password" id="password" name="Senha" class="validate" />

                            <label>Pessoa</label>
                            <select name="tipoPessoa" className="browser-default" id="tipoPessoa" onChange={this.handleChange}>
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option function="" value="Fisica" name="Pessoa Física" />
                                <Option function="" value="Juridica" name="Pessoa Jurídica" />
                            </select>
    
                            <div className="botao-novoperfil">
                                <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar!" iClass="{}" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;