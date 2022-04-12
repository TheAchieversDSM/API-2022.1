import React, { Component } from "react";
import { Link } from "react-router-dom"

// LOCAL CSS
import './pc2.css'

// COMPONENTS
import ButtonMat from "../../components/button/buttonMat";
import General from "../../components/general";
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Css from "../../assets/style/style";


class PreCadastro2 extends Component {
    render() {
        return (
            <>
                <General />
                
                <Css ref="./pc2.css" />

                <div className="conteudo">
                    <div className="row">
                        <div className="col s12">
                            <h5 className="titulo">Dados Acadêmicos</h5>
                            <div className="bloco1">
                                <div className="row">
                                    <Input fname={""} div="input-field col s4 bla" id="formacao" type="text" class="validate" name="Formação" />

                                    <Input fname={""} div="input-field col s4 bla" id="cursos" type="text" class="validate" name="Cursos" />

                                    <Input fname={""} div="input-field col s4 bla" id="linguas" type="text" class="validate" name="Línguas" />
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <h5 className="titulo">Benefícios</h5>
                            <div className="bloco1">
                                <form action="#">
                                    <p>
                                        <Check name="Plano de Saúde" />
                                        <Check name="Vale Transporte" />
                                        <Check name="Vale Refeição" />
                                        <Check name="Auxílio Creche" />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                    <Link to="/PreCad1"><ButtonMat fname={""} class="waves-effect waves-light btn" name="Voltar" iClass="fa-solid fa-arrow-left-long" /></Link>
                    <Link to="/PreCad3"><ButtonMat fname={""} class="waves-effect waves-light btn" name="Próximo" iClass="fa-solid fa-arrow-right-long" /></Link>
                </div>
            </>
        )
    }
}
export default PreCadastro2;