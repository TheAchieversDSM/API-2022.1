import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';

// LOCAL CSS
import './pc3.css'

class PreCadastro3 extends Component {
    render() {
        return (
            <>
                <General />

                <Css ref="./pc3.css" />

                <div className="conteudo">
                    <div className="mensagem">
                        <div>
                            <h1>INFORMAÇÕES COMPLETAS!</h1>
                            <h4>Por favor, aguarde a aprovação do cadastro</h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default PreCadastro3;