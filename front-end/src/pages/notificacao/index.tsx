import React, { Component } from "react";

// LOCAL CSS
import './style.css'

// COMPONENTS
import General from '../../components/general/index'
import ButtonMat from "../../components/button/buttonMat";

class Notificacao extends Component {
    render() {
        return (
            <>
                <General />

                <div className="conteudo">
                    <h3>Notificações</h3>
                    <div className="notificacao">
                        <div className="row">
                            <h5 className="col s9">Rebeca fez o pré-cadastro!</h5>
                            <div className="grid-button">
                                <ButtonMat name="Aceitar" iClass="fa-solid fa-circle-check" />
                                <ButtonMat name="Rejeitar" iClass="fa-solid fa-circle-xmark" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Notificacao;