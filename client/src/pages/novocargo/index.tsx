import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
import './novocargo.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";
import Check from "../../components/input/check";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";

class NovoCargo extends Component {
    state = {
        departamento_id: String,
        car_salario: String,
        car_descricao: String,
        nivel_acesso: String,
        departamentos: [],

    }

    componentDidMount() {
        axios.get("http://localhost:5000/departamentos/").then((res) => {
            console.log(res.data);
            
            const departamentos = res.data
            this.setState({ departamentos })
        })
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
        const cargo = {
            departamento_id: this.state.departamento_id,
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
        })
    };

    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Cargo</h3>

                    <div className="form">
                        <div className="teste1 row">


                        <select name="departamento_id" onChange={this.handleChange} className="browser-default" >
                        <option value="" disabled selected>Escolha o departamento</option>
                    {this.state.departamentos.map(departamento => <option key={departamento.dep_id} value={departamento.dep_id}>{departamento.dep_descricao}</option>)}
                    </select>

                            <Input lenght={100} stateName="car_descricao" fname={this.handleChange} div="input-field" type="text" id="cargo" name="Novo Cargo" class="validate" />

                            <Input lenght={100} stateName="car_salario" fname={this.handleChange} div="input-field" type="text" id="salario" name="Salário" class="validate" />

                            <select name="nivel_acesso" className="browser-default" id="" onChange={this.handleChange}>
                                <DisableOption disableValue="" disableNome="Nível de Acesso" />
                                <Option function="" value="1" name="Administrador - Acesso Total" />
                                <Option function="" value="2" name="Gestor - Acesso Parcial" />
                                <Option function="" value="3" name="Consultor - Acesso Parcial" />
                                <Option function="" value="0" name="Usuário Comum - Acesso Comum" />
                            </select>

                            <div className="eeeee">
                                <span>
                                    <ul>
                                        <li>Administrador - Acesso Total: Visualização sem restrição alguma. Pode criar, alterar e inativar usuários, departamentos e cargos.</li>
                                        <div className="divisor"></div>
                                        <li>Gestor - Acesso Parcial: Ações limitadas. Pode criar, alterar e inativar usuários. </li>
                                        <div className="divisor"></div>
                                        <li>Consultor - Acesso Parcial: Ações limitadas. Pode consultar o andamento da Trilha de Aprendizagem. </li>
                                        <div className="divisor"></div>
                                        <li>Usuário comum - Acesso Parcial: Ações limitadas. Permissão para visualizar sua Trilha de Aprendizagem, perfil, organograma e documentos da empresa. </li>
                                    </ul>
                                </span>
                                <i className="fa-solid fa-question"></i>
                            </div>

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

export default NovoCargo;