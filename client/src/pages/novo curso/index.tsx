import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
import '../novo perfil/novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import InputValue from "../../components/input/inputValue";
import General from "../../components/general";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";
import { FormErrors } from "../../utils/formErrors/formErrors";

class NovoCurso extends Component {


    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Curso</h3>
                    <div className="form">
                        <div className="teste1 row">
                            <form action="">
                                <Input lenght={100} div="input-field" type="text" class="validate" stateName="nome_curso" id="curso" fname="" name="Nome do curso" />
                                <select name="cargo" className="browser-default" id="cargo" >
                                    <DisableOption disableValue="" disableNome="Para qual cargo será destinado?" />
                                    <Option function="" value="1" name="CEO" />
                                    <Option function="" value="2" name="Administrador RH" />
                                    <Option function="" value="3" name="Diretor de RH" />
                                    <Option function="" value="0" name="Consultor de RH" />
                                </select>
                            </form>
                            <div className="botao-novoperfil">
                                <button type="submit" className="btn btn-primary">Criar!</button>
                                {/*<ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar!" iClass="{}" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoCurso;