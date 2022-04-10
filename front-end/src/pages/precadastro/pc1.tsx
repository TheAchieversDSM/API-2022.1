import React, { Component } from "react";
import{Link} from "react-router-dom";

// LOCAL CSS
//import './pc1.css'

// COMPONENTS
import General from "../../components/general";
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";

class PreCadastro1 extends Component {
    render() {
        return (
            <>

                <General />

                <Css ref="./pc1" />

                <div className="conteudo">
                    <div className="row">
                        <div className="col s12">
                            <div className="teste1">
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <Input div="input-field col s7" id="nome" class="validate" type="text" name="Nome Completo" />

                                            <Input div="input-field col s4" id="cpf" class="validate" type="text" name="CPF" />
                                        </div>

                                        <div className="row">
                                            <Input div="input-field col s6" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />

                                            <Input div="input-field col s6" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s4">
                                                <select className="browser-default">
                                                    <DisableOption disableValue="" disableNome="Raça" />
                                                    <Option value="1" name="Branco(a)" />
                                                    <Option value="2" name="Preto(a)" />
                                                    <Option value="3" name="Amarelo(a)" />
                                                    <Option value="4" name="Indígena" />
                                                </select>
                                            </div>

                                            <div className="input-field col s4">
                                                <select className="browser-default">
                                                    <DisableOption disableValue="" disableNome="Gênero" />
                                                    <Option value="1" name="Feminino" />
                                                    <Option value="2" name="Masculino" />
                                                    <Option value="3" name="Outro" />
                                                </select>
                                            </div>
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

                                    <div className="input-field col s2">
                                        <select className="browser-default">
                                            <DisableOption disableValue="" disableNome="Estado" />
                                            <Option value="1" name="AC" />
                                            <Option value="2" name="AL" />
                                            <Option value="3" name="AP" />
                                            <Option value="4" name="AM" />
                                            <Option value="5" name="BA" />
                                            <Option value="6" name="CE" />
                                            <Option value="7" name="DF" />
                                            <Option value="8" name="ES" />
                                            <Option value="9" name="GO" />
                                            <Option value="10" name="MA" />
                                            <Option value="11" name="MG" />
                                            <Option value="12" name="MS" />
                                            <Option value="13" name="MT" />
                                            <Option value="14" name="PA" />
                                            <Option value="15" name="PB" />
                                            <Option value="16" name="PE" />
                                            <Option value="17" name="PI" />
                                            <Option value="18" name="PR" />
                                            <Option value="19" name="RJ" />
                                            <Option value="20" name="RN" />
                                            <Option value="21" name="RO" />
                                            <Option value="22" name="RS" />
                                            <Option value="23" name="RR" />
                                            <Option value="24" name="SC" />
                                            <Option value="25" name="SE" />
                                            <Option value="26" name="SP" />
                                            <Option value="27" name="TO" />
                                        </select>
                                    </div>

                                    <div className="input-field col s4">
                                        <select className="browser-default">
                                            <DisableOption disableValue="" disableNome="Região" />
                                            <Option value="1" name="Norte" />
                                            <Option value="2" name="Nordeste" />
                                            <Option value="3" name="Centro-Oeste" />
                                            <Option value="4" name="Sudeste" />
                                            <Option value="5" name="Sul" />
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col s6">
                        <div className="teste3">
                            <label>Estado Social</label>
                            <select className="browser-default">
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option value="1" name="Solteiro(a)" />
                                <Option value="2" name="Casado(a)" />
                                <Option value="3" name="Divorciado(a)" />
                                <Option value="4" name="Viúvo(a)" />
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

                        <div className="col s4">
                            <div className="teste3">
                                <label>Contratação</label>
                                <select className="browser-default">
                                    <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                    <Option value="1" name="CL" />
                                    <Option value="2" name="PJ" />
                                    <Option value="3" name="Estagiário(a)" />
                                    <Option value="4" name="Temporário" />
                                </select>
                            </div>
                        </div>
                    </div>

                    <Link to="/PreCad2"><ButtonMat class="waves-effect waves-light btn center-align" name="Próximo" iClass="fa-solid fa-arrow-right-long" /></Link>
                </div>
            </>
        )
    }
}

export default PreCadastro1;