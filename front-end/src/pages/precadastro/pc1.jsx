import React, { Component } from "react";

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

                <div class="conteudo">
                    <div class="row">
                        <div class="col s12">
                            <div class="teste1">
                                <div class="row">
                                    <form class="col s12">
                                        <div class="row">
                                            <Input div="input-field col s8" id="nome" class="validate" type="text" name="Nome Completo" />

                                            <Input div="input-field col s4" id="cpf" class="validate" type="text" name="CPF" />
                                        </div>

                                        <div class="row">
                                            <Input div="input-field col s6" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />

                                            <Input div="input-field col s6" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                        </div>

                                        <div class="row">
                                            <Input div="input-field col s4" id="genero" class="validate" type="text" name="Gênero" />

                                            <Input div="input-field col s4" id="raca" class="validate" type="text" name="Raça" />
                                        </div>

                                        <div class="row">
                                            <Input div="input-field col s5" id="data" class="datepicker" type="text" name="Data de Nascimento" />

                                            <Input div="input-field col s4" id="idade" class="validate" type="text" name="Idade" />

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s4">
                        <div class="teste2">
                            <form class="col s12">
                                <div class="row">
                                    <Input div="input-field col s12" id="email" class="validate" type="text" name="E-mail" />
                                </div>

                                <div class="row">
                                    <Input div="input-field col s6" id="icon_telephone" class="validate" type="tel" name="DDD" />
                                </div>

                                <div class="row">
                                    <Input div="input-field col s12" id="icon_telephone" class="validate" type="tel" name="Telefone" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col s8">
                        <div class="teste2">
                            <form class="col s12">
                                <div class="row">
                                    <Input div="input-field col s12" id="endereco" class="validate" type="text" name="Endereço" />
                                </div>

                                <div class="row">
                                    <Input div="input-field col s6" id="bairro" class="validate" type="text" name="Bairro" />

                                    <Input div="input-field col s3" id="complemento" class="validate" type="text" name="Complemento" />

                                    <Input div="input-field col s3" id="cep" class="validate" type="text" name="CEP" />
                                </div>

                                <div class="row">
                                    <Input div="input-field col s6" id="cidade" class="validate" type="text" name="Cidade" />

                                    <Input div="input-field col s2" id="estado" class="validate" type="text" name="Estado" />

                                    <Input div="input-field col s4" id="regiao" class="validate" type="text" name="Região" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col s6">
                        <div class="teste3">
                            <label>Estado Social</label>
                            <select class="browser-default">
                                <option value="" disabled selected>Escolha uma das opções</option>
                                <option value="1">Solteiro(a)</option>
                                <option value="2">Casado(a)</option>
                                <option value="3">Divorciado(a)</option>
                                <option value="3">Viúvo(a)</option>
                            </select>
                        </div>
                    </div>

                    <div class="col s6">
                        <div class="teste3">
                            <label>Possui filhos?</label>
                            <form action="#">
                                <p>
                                    <Check name="Sim" />
                                    <Check name="Não" />
                                </p>
                            </form>
                        </div>
                    </div>

                    <ButtonMat name="Próximo" iClass="fa-solid fa-arrow-right-long" />
                </div>
            </>
        )
    }
}

export default PreCadastro1;