import React, { Component } from "react";

// LOCAL CSS
import './style2.css'

// COMPONENTS
import ButtonMat from "../../components/button/buttonMat";
import General from "../../components/general";
import Input from "../../components/input/input";
import Check from "../../components/input/check";


class PreCadastro2 extends Component {
    render() {
        return (
            <>
                <General />

                <div className="conteudo">
                    <div className="row">
                        <div className="col s12">
                            <h5>Dados Acadêmicos</h5>
                            <div className="teste1">
                                <div className="row">
                                    <Input div="input-field col s4" id="formacao" type="text" class="validate" name="Formação" />

                                    <Input div="input-field col s4" id="cursos" type="text" class="validate" name="Cursos" />

                                    <Input div="input-field col s4" id="linguas" type="text" class="validate" name="Línguas" />
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <h5>Benefícios</h5>
                            <div className="teste1">
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

                        <div className="col s12">
                            <h5>Mais informações trabalhistas</h5>
                            <div className="teste2">
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <Input div="input-field col s6" type="text" id="departamento" class="validate" name="Departamento"/>
                                            
                                            <Input div="input-field col s6" type="text" id="cargo" class="validate" name="Cargo"/>
                                        </div>

                                        <Input div="input-field col s4" type="text" id="nivel" class="validate" name="Nível"/>

                                        <Input div="input-field col s4" type="text" id="salario" class="validate" name="Faixa Salarial"/>

                                        <Input div="input-field col s4" type="text" id="contratacao" class="validate" name="Contratação"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ButtonMat name="Voltar" iClass="fa-solid fa-arrow-left-long" />
                    <ButtonMat name="Próximo" iClass="fa-solid fa-arrow-right-long" />
                </div>
            </>
        )
    }
}

export default PreCadastro2;