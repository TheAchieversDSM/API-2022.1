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
import Css from "../../assets/style/style";
import { FormErrors } from "../../utils/formErrors/formErrors";

class NovoPerfil extends Component {
    state = {
        email: "",
        password: "",
        tipoPessoa: "",

        // VALIDAÇÃO
        formErrors: {email: '', password: '', tipoPessoa: ''},
        emailValid: false,
        passwordValid: false,
        tipoPessoaValid: false,
        formValid: false
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let tipoPessoaValid = this.state.tipoPessoaValid
      
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@(ionic.health)$/i);
                fieldValidationErrors.email = emailValid ? '' : ' inválido';
                break;
            case 'password':
                passwordValid = value.length >= 2;
                fieldValidationErrors.password = passwordValid ? '': ' inválida';
                break;
            case 'tipoPessoa':
                tipoPessoaValid = value.length > 0;
                fieldValidationErrors.tipoPessoa = tipoPessoaValid ? '': ' inválida';
                break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        tipoPessoaValid: tipoPessoaValid
                      }, this.validateForm);
      }
      
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.tipoPessoaValid}); 
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
                    <div className="form">
                        <div className="teste1 row">
                            <form action="">
                                <InputValue value={this.state.email} stateName="email" fname={this.handleChange} div="input-field" type="email" id="email" name="E-mail" class="validate" />
                                <InputValue value={this.state.password}  stateName="password" fname={this.handleChange} div="input-field" type="password" id="password" name="Senha" class="validate" />
                            

                                <label>Pessoa</label>
                                <select name="tipoPessoa" className="browser-default" id="tipoPessoa" onChange={this.handleChange}>
                                    <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                    <Option function="" value="Fisica" name="Pessoa Física" />
                                    <Option function="" value="Juridica" name="Pessoa Jurídica" />
                                </select>
                            </form>
                            <FormErrors formErrors={this.state.formErrors} />
    
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