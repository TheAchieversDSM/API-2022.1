import React, { Component } from "react";

// LOCAL CSS
import './style.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat'
import Check from "../../components/input/check";
import General from "../../components/general";
import Collapse from "../../components/collapse";

class PerfilColab extends Component {
    render() {
        return (
            <>
                <General />
                <div className="conteudo">
                    <div className="row">
                        <div className="col s7">
                            <div className="teste1">
                                <div className="row" id="info">
                                    <div className="col s4">
                                        <div className="foto"></div>
                                    </div>
                                    <div className="col s6">
                                        <h5 className="name">Mariana Ayumi Tamay</h5>
                                        <p className="info-colab">
                                            <p>CPF: 1234567890 </p>
                                            <p>Data de admissão: xx/yy/zzzz</p>
                                            <p>Data de desligamento: --/--/----</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s5">
                            <div className="teste1">
                                <h4 className="contrato">Contrato</h4>
                                    <div className="contrato-info">
                                        <p>
                                            <ButtonMat class="waves-effect waves-light btn-large" name="Visualizar" iClass={""} />
                                        </p>
                                        <p id="p1">ou</p>
                                        <p id="p2">
                                            <ButtonMat class="waves-effect waves-light btn-large" name="Baixar em PDF" iClass={""} />
                                        </p>
                                    </div>
                            </div>
                        </div>
            
                        <div className="col s12">
                            <div className="teste2">
                                <h4>Informações</h4>
                                <div className="teste2-info">
                                    <p>Departamento: ----</p>
                                    <p>Cargo: ----</p>
                                    <p>Nível: ----</p>
                                    <p>Tempo de Casa: ----</p>
                                    <p>Faixa Salarial: ---- </p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col s8">
                            <div className="teste3">
                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title="Documentos Pessoais" desc="Section 1" />
                                    <Collapse title="Dados Acadêmicos" desc="Section 2" />
                                    <Collapse title="Documentos Profissionais" desc="Section 3" />
                                    <Collapse title="Estado Civil" desc="Section 4" />
                                    <Collapse title="Paternidade/Maternidade" desc="Section 6" />
                                </ul>
                            </div>
                        </div>
            
                        <div className="col s4">
                            <div className="teste3">
                                <h4>Benefícios</h4>
                                <form action="#">
                                    <p className="grid-check">
                                        <Check name="Plano de Saúde" />

                                        <Check name="Vale Transporte" />

                                        <div className="ajuste">
                                            <Check name="Vale Refeição" />
                                        </div>

                                        <div className="ajuste2">
                                            <Check name="Auxílio Creche" />
                                        </div>
                                    </p>
                                </form>
                            </div>
                        </div>
            
                        <div className="col s4">
                            <div className="teste4">
                                <div className="botao-edicao">
                                    <p>
                                        <ButtonMat class="waves-effect waves-light btn-large" name="Editar" iClass={""} />
                                    </p>
                                    <p>
                                        <ButtonMat class="waves-effect waves-light btn-large" name="Excluir" iClass={""} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PerfilColab;