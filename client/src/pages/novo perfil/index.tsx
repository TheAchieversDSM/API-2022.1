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
import { FormErrors } from "./teste";
import InputOnFocus from "../../components/input/inputOnFocus";

class NovoPerfil extends Component {
    state = {
        email: "",
        password: "",
        tipoPessoa: String,
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@(ionic.health)$/i);
                fieldValidationErrors.email = emailValid ? '' : ' inválido';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' inválida';
                break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid}); 
      }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
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
                    <FormErrors formErrors={this.state.formErrors} />
                    <div className="form">
                        <div className="teste1 row">
                            <form action="">
                                <InputValue value={this.state.email} stateName="email" fname={this.handleChange} div="input-field" type="email" id="email" name="E-mail" class="validate" />
                                <InputValue value={this.state.password}  stateName="password" fname={this.handleChange} div="input-field" type="password" id="password" name="Senha" class="validate" />
                            </form>

                            <label>Pessoa</label>
                            <select name="tipoPessoa" className="browser-default" id="tipoPessoa" onChange={this.handleChange}>
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option function="" value="Fisica" name="Pessoa Física" />
                                <Option function="" value="Juridica" name="Pessoa Jurídica" />
                            </select>
    
                            <div className="botao-novoperfil">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={!this.state.formValid}>Criar!</button>
                                {/*<ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar!" iClass="{}" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;