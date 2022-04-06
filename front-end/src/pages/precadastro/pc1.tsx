import React, { Component } from "react";
import{Link} from "react-router-dom";

// LOCAL CSS
import './style1.css'

// COMPONENTS
import General from "../../components/general";
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Button from "../../components/button/button";
import ButtonMat from "../../components/button/buttonMat";

class PreCadastro1 extends Component {
    render() {
        return (
            <>

                <General />

                <div className="conteudo">
                    <div className="row">
                        <div className="col s12">
                            <div className="teste1">
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <Input div="input-field col s8" id="nome" class="validate" type="text" name="Nome Completo" />

                                            <Input div="input-field col s4" id="cpf" class="validate" type="text" name="CPF" />
                                        </div>

                                        <div className="row">
                                            <Input div="input-field col s6" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />

                                            <Input div="input-field col s6" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                        </div>

                                        <div className="row">
                                            <Input div="input-field col s4" id="genero" class="validate" type="text" name="Gênero" />

                                            <Input div="input-field col s4" id="raca" class="validate" type="text" name="Raça" />
                                        </div>

                                        <div className="row">
                                            <Input div="input-field col s5" id="data" class="datepicker" type="text" name="Data de Nascimento" />

                                            <Input div="input-field col s4" id="idade" class="validate" type="text" name="Idade" />

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s4">
                        <div className="teste2">
                            <form className="col s12">
                                <div className="row">
                                    <Input div="input-field col s12" id="email" class="validate" type="text" name="E-mail" />
                                </div>

                                <div className="row">
                                    <Input div="input-field col s6" id="icon_telephone" class="validate" type="tel" name="DDD" />
                                </div>

                                <div className="row">
                                    <Input div="input-field col s12" id="icon_telephone" class="validate" type="tel" name="Telefone" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col s8">
                        <div className="teste2">
                            <form className="col s12">
                                <div className="row">
                                    <Input div="input-field col s12" id="endereco" class="validate" type="text" name="Endereço" />
                                </div>

                                <div className="row">
                                    <Input div="input-field col s6" id="bairro" class="validate" type="text" name="Bairro" />

                                    <Input div="input-field col s3" id="complemento" class="validate" type="text" name="Complemento" />

                                    <Input div="input-field col s3" id="cep" class="validate" type="text" name="CEP" />
                                </div>

                                <div className="row">
                                    <Input div="input-field col s6" id="cidade" class="validate" type="text" name="Cidade" />

                                    <Input div="input-field col s2" id="estado" class="validate" type="text" name="Estado" />

                                    <Input div="input-field col s4" id="regiao" class="validate" type="text" name="Região" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col s6">
                        <div className="teste3">
                            <label>Estado Social</label>
                            <select className="browser-default">
                                <option value="" disabled selected>Escolha uma das opções</option>
                                <option value="1">Solteiro(a)</option>
                                <option value="2">Casado(a)</option>
                                <option value="3">Divorciado(a)</option>
                                <option value="3">Viúvo(a)</option>
                            </select>
                        </div>
                    </div>

                    <div className="col s6">
                        <div className="teste3">
                            <label>Possui filhos?</label>
                            <form action="#">
                                <p>
                                    <Check name="Sim" />
                                    <Check name="Não" />
                                </p>
                            </form>
                        </div>
                    </div>

                    <Link to="/PreCad2"><ButtonMat name="Próximo" iClass="fa-solid fa-arrow-right-long" /></Link>
                </div>
            </>
        )
    }
}

export default PreCadastro1;