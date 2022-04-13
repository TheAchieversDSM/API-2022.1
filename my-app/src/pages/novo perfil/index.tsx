import React, { Component } from "react";

// LOCAL CSS
import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";

class NovoPerfil extends Component {
    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <div className="row">
                        <h2>Novo Perfil</h2>
                        <div className="form col s6">
                            <div className="quad1 row">
                                <Input div="input-field" type="email" id="email" name="E-mail" class="validate" />
                                <Input div="input-field" type="password" id="password" name="Senha" class="validate" />
                                <ButtonMat class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" />
                            </div>
                        </div>
                        <div className="form col s6">
                            <div className="quad1 row">
                                <select className="browser-default">
                                    <DisableOption disableValue="" disableNome="Departamento" />
                                    <Option value="1" name="TI" />
                                    <Option value="2" name="RH" />
                                </select>

                                <select className="browser-default">
                                    <DisableOption disableValue="" disableNome="Cargo" />
                                    <Option value="1" name="CEO" />
                                    <Option value="2" name="Administrador" />
                                    <Option value="3" name="Estagiário" />
                                </select>

                                <select className="browser-default">
                                    <DisableOption disableValue="" disableNome="Salário" />
                                    <Option value="1" name="R$ 4.512,00" />
                                    <Option value="2" name="R$ 3.094,00" />
                                    <Option value="3" name="R$ 1.171,00" />
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;
