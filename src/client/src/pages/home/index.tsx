import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";

class Home extends Component {

    render() { 
        const firstAcess = getCookie("acesso") == "0";

        return firstAcess? (
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
        ) :
        
        (
            <>
            <General />

            <Css ref="./home.css" />
            <div className="conteudo">
                    <div className="mensagem">
                        <div>
                            <h1>BEM-VINDO, COLABORADOR!</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Home;