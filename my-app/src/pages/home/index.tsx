import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import Caminho from "../../components/caminho/caminho";

class Home extends Component {
    render() {
        return (
            <>
                <General />

                <Css ref="./home.css" />

                <div className="conteudo">
                    <div className="mensagem">
                        <div>
                            <h1>BEM-VINDO, COLABORADOR!</h1>
                            <Caminho link="/PreCad1" name="Complete as informações para continuar!" />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Home;