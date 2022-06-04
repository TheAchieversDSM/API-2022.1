import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
//import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import Css from "../../assets/style/style";
import Option from "../../components/dropdown";
import DisableOption from "../../components/dropdown/disableOption";
import { FormErrors } from "../../utils/formErrors/formErrors";

class NovoDep extends Component {
    state = {
        departamento: "",
        departamento_id: "",
        departamentos: [],
        nivel_acesso: "",
        car_salario: "",
        car_descricao: "",

        // VALIDAÇÃO
        departamentoValid: false,
        car_salarioValid: false,
        car_descricaoValid: false,
        nivel_acessoValid: false,
        formValid: false,
        formErrors: {departamento: '', car_salario: '', car_descricao: '', nivel_acesso: ''}
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let departamentoValid = this.state.departamentoValid;
        let car_salarioValid = this.state.car_salarioValid;
        let car_descricaoValid = this.state.car_descricaoValid;
        let nivel_acessoValid = this.state.nivel_acessoValid;
      
        switch(fieldName) {
            case 'departamento':
                departamentoValid = value.length > 0;
                fieldValidationErrors.departamento = departamentoValid ? '' : ' inválido';
                break;
            case 'car_salario':
                car_salarioValid = value.match(/^(^[0-9,]*$)$/i);
                fieldValidationErrors.car_salario = car_salarioValid ? '' : ' inválido';
                break;
            case 'car_descricao':
                car_descricaoValid = value.length > 1;
                fieldValidationErrors.car_descricao = car_descricaoValid ? '': ' inválida';
                break;
            case 'nivel_acesso':
                nivel_acessoValid = value.length > 0;
                fieldValidationErrors.nivel_acesso = nivel_acessoValid ? '': ' inválida';
            break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        departamentoValid: departamentoValid,
                        car_salarioValid: car_salarioValid,
                        car_descricaoValid: car_descricaoValid,
                        nivel_acessoValid: nivel_acessoValid,
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.departamentoValid && this.state.car_salarioValid && this.state.car_descricaoValid && this.state.nivel_acessoValid }); 
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

export default NovoDep;