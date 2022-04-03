import { Component } from "react";

// LOCAL CSS
import './style.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";

class NovoPerfil extends Component {
    render() {
        return (
            <>
                <General />
                <div class="conteudo">
                    <h2>Novo Perfil</h2>
                    <div class="form">
                        <Input div="input-field col s12" type="email" id="email" name="E-mail" />
                        <Input div="input-field col s12" type="password" id="password" name="Senha" />
                        <ButtonMat name="Criar novo perfil" iClass="{}" />
                    </div>
                </div>
            </>
        )
    }
}

export default NovoPerfil;