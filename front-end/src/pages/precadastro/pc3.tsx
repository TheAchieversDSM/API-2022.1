import React, { Component } from 'react';
import General from '../../components/general';

// LOCAL CSS
import './style3.css'

class PreCadastro3 extends Component {
    render() {
        return (
            <>
                <General />

                <div className="conteudo">
                    <div>
                        <h1>INFORMAÇÕES COMPLETAS!</h1>
                        <h4>Por favor, aguarde a aprovação do cadastro</h4>
                    </div>
                </div>
            </>
        )
    }

}

export default PreCadastro3;