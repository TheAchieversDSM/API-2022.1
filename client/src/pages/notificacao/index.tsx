import React, { Component } from "react";

// LOCAL CSS
import './notificacao.css'

// COMPONENTS
import General from '../../components/general/index'
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";

class Notificacao extends Component {
    render() {
        return (
            <>
                <General />

                <Css ref="./notificao.css" />

                <div className="conteudo">
                    <h3>Notificações</h3>
                    <div className="notificacao">
                        <div className="row">
                            <h5 className="col s9">Rebeca fez o pré-cadastro!</h5>
                            <div className="grid-button">
                                <ButtonMat fname={""} class="waves-effect waves-light btn" name="Aceitar" iClass="fa-solid fa-circle-check" />
                                <ButtonMat fname={""} class="waves-effect waves-light btn" name="Rejeitar" iClass="fa-solid fa-circle-xmark" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Notificacao;