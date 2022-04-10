import React, { Component } from "react";

// LOCAL CSS
//import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";

class NovoPerfil extends Component {
    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <div className="row">
                        <h2>Novo Perfil</h2>
                        <div className="form col 6">
                            <div className="teste1">
                                <Input div="input-field" type="email" id="email" name="E-mail" class="validate" />
                                <Input div="input-field" type="password" id="password" name="Senha" class="validate" />
                                <Input div="input-field col s6"  type="text" id="departamento" name="Departamento" class="validate" />
                                <Input div="input-field col s6"  type="text" id="cargo" name="Cargo" class="validate" />
                                <Input div="input-field col s12" type="text" id="salario" name="Salario" class="validate"/>
                                <ButtonMat class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;