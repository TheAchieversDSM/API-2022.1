import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import axios from "axios";

// LOCAL CSS
import './pc1.css'

// COMPONENTS
import General from "../../components/general";
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";


class PreCadastro1 extends Component {
    state = {
        nome: String,
        cpf: Number,
        nacionalidade: String,
        naturalidade: String,
        raca: String,
        genero: String,
        data: Date,
        idade: Number,
        ddd: Number,
        telefone: Number,
        rua: String,
        numero: Number,
        bairro: String,
        complemento: Number,
        cep: Number,
        cidade: String,
        estado: String,
        regiao: String,
        estadoCivil: String,
        filho: String,
        tipoContratacao: String
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
            nome: this.state.nome,
            ddd: this.state.ddd,
            telefone: this.state.telefone,
            rua: this.state.rua,
            numero: this.state.numero,
            bairro: this.state.bairro,
            complemento: this.state.complemento,
            cep: this.state.cep,
            cidade: this.state.cidade,
            estado: this.state.estado,
            regiao: this.state.regiao,
            tipoContratacao: this.state.tipoContratacao,
            id: getCookie("id"),
        }

        const pessoaFisica = {
            cpf: this.state.cpf,
            nacionalidade: this.state.nacionalidade,
            naturalidade: this.state.naturalidade,
            raca: this.state.raca,
            genero: this.state.genero,
            data: this.state.data,
            idade: this.state.idade,
            estadoCivil: this.state.estadoCivil,
            filho: this.state.filho,
            id: getCookie("id"),
        }


        axios.put(`http://localhost:5000/precad1/updatecolaborador/${user.id}`, user); {
            alert("data foi")
        }

        axios.post("http://localhost:5000/precad1/insertpessoafisica", pessoaFisica); {
            alert("data foi")
        }
    };


    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
                <script src="https://kit.fontawesome.com/4d3a0277e3.js" />

                <General />

                <Css ref="./pc1" />

                <div className="conteudo">
                    <div className="row">
                        <div className="col s12">
                            <div className="campo1">
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <Input stateName = "nome" fname={this.handleChange} div="input-field col s7" id="nome" class="validate" type="text" name="Nome Completo" />

                                            <Input stateName = "cpf" fname={this.handleChange} div="input-field col s4" id="cpf" class="validate" type="text" name="CPF" />
                                        </div>

                                        <div className="row">
                                            <Input stateName = "nacionalidade" fname={this.handleChange} div="input-field col s6" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />

                                            <Input stateName = "naturalidade" fname={this.handleChange} div="input-field col s6" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s4">
                                                <select className="browser-default" id="raca" name="raca" onChange={this.handleChange}>
                                                    <DisableOption disableValue="" disableNome="Raça" />
                                                    <Option value="Branco(a)" name="Branco(a)" />
                                                    <Option value="Preto(a)" name="Preto(a)" />
                                                    <Option value="Amarelo(a)" name="Amarelo(a)" />
                                                    <Option value="Indígena" name="Indígena" />
                                                </select>
                                            </div>

                                            <div className="input-field col s4">
                                                <select className="browser-default" name="genero" id="genero" onChange={this.handleChange}>
                                                    <DisableOption disableValue="" disableNome="Gênero" />
                                                    <Option value="Feminino" name="Feminino" />
                                                    <Option value="Masculino" name="Masculino" />
                                                    <Option value="Outro" name="Outro" />
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <Input stateName = "data" fname={this.handleChange} div="input-field col s5" id="data" class="datepicker" type="date" name="Data de Nascimento" />

                                            <Input stateName = "idade" fname={this.handleChange} div="input-field col s4" id="idade" class="validate" type="number" name="Idade" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    
                    

                        <div className="col s12">
                            <div className="campo2">
                                <form className="row">
                                        <Input stateName = "ddd" fname={this.handleChange} div="input-field col s2" id="icon_telephone" class="validate" type="tel" name="DDD" />
                                        <Input stateName = "telefone" fname={this.handleChange} div="input-field col s6" id="icon_telephone" class="validate" type="tel" name="Telefone" />
                                </form>
                            </div>
                        </div>

                        <div className="col s12">
                            <div className="campo4">
                                <form className="col row">
                                    
                                        <Input stateName = "rua" fname={this.handleChange} div="input-field col s8 bla" id="rua" class="validate" type="text" name="Rua" />

                                        <Input stateName = "numero" fname={this.handleChange} div="input-field col s4 bla" id="numero" class="validate" type="number" name="Número" />

                                        <Input stateName = "bairro" fname={this.handleChange} div="input-field col s6 bla" id="bairro" class="validate" type="text" name="Bairro" />

                                        <Input stateName = "cidade" fname={this.handleChange} div="input-field col s6 bla" id="cidade" class="validate" type="text" name="Cidade" />

                                        <Input stateName = "complemento" fname={this.handleChange} div="input-field col s3 bla" id="complemento" class="validate" type="number" name="Complemento" />

                                        <Input stateName = "cep" fname={this.handleChange} div="input-field col s3 bla" id="cep" class="validate" type="number" name="CEP" />
                                    
                                        
                            
                                        <div className="input-field col s2 bla">
                                            <select name="estado" className="browser-default" id="estado" onChange={this.handleChange}>
                                                <DisableOption disableValue="" disableNome="Estado" />
                                                <Option value="Acre" name="AC" />
                                                <Option value="Alagoas" name="AL" />
                                                <Option value="Amapá" name="AP" />
                                                <Option value="Amazonas" name="AM" />
                                                <Option value="Bahia" name="BA" />
                                                <Option value="Ceará" name="CE" />
                                                <Option value="Distrito Federal" name="DF" />
                                                <Option value="Espírito Santo" name="ES" />
                                                <Option value="Goiás" name="GO" />
                                                <Option value="Maranhão" name="MA" />
                                                <Option value="Minas Gerais" name="MG" />
                                                <Option value="Mato Grosso do Sul" name="MS" />
                                                <Option value="Mato Grosso" name="MT" />
                                                <Option value="Pará" name="PA" />
                                                <Option value="Pernambuco" name="PB" />
                                                <Option value="Pernambuco" name="PE" />
                                                <Option value="Piauí" name="PI" />
                                                <Option value="Paraná" name="PR" />
                                                <Option value="Rio de Janeiro" name="RJ" />
                                                <Option value="Rio Grande do Norte" name="RN" />
                                                <Option value="Rondônia" name="RO" />
                                                <Option value="Rio Grande do Sul" name="RS" />
                                                <Option value="Roraima" name="RR" />
                                                <Option value="Santa Catarina" name="SC" />
                                                <Option value="Sergipe" name="SE" />
                                                <Option value="São Paulo" name="SP" />
                                                <Option value="Tocantins" name="TO" />
                                            </select>
                                        </div>

                                        <div className="input-field col s4 bla">
                                            <select className="browser-default" id="regiao" name="regiao" onChange={this.handleChange}>
                                                <DisableOption disableValue="" disableNome="Região" />
                                                <Option value="Norte" name="Norte" />
                                                <Option value="Nordeste" name="Nordeste" />
                                                <Option value="Centro-Oeste" name="Centro-Oeste" />
                                                <Option value="Sudeste" name="Sudeste" />
                                                <Option value="Sul" name="Sul" />
                                            </select>
                                        </div>
                                    
                                </form>
                            </div>
                        </div>
                        
                        <div className="col s6">
                            <div className="campo3">
                                <label>Estado Civil</label>
                                <select name="estadoCivil" className="browser-default" id="estadoCivil" onChange={this.handleChange}>
                                    <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                    <Option value="Solteiro(a)" name="Solteiro(a)" />
                                    <Option value="Casado(a)" name="Casado(a)" />
                                    <Option value="Divorciado(a)" name="Divorciado(a)" />
                                    <Option value="Viúvo(a)" name="Viúvo(a)" />
                                </select>
                            </div>
                        </div>
                        
                        
                        <div className="col s6">
                            <div className="campo3">
                                <label>Possui filhos?</label>
                                <form id="filho" name="filho" onChange={this.handleChange}>
                                    <p>
                                        <Check value="si" name="Sim" />
                                        <Check value="no" name="Não" />
                                    </p>
                                </form>
                            </div>
                        </div>

                        <Link to="/PreCad2"><ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn center-align" name="Próximo" iClass="fa-solid fa-arrow-right-long" /></Link>
                    </div>
                </div>
                </>    
        )
    }
}
export default PreCadastro1;