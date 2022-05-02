import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";

// LOCAL CSS
import './home.css'

// IMAGE
import Icone from "../../assets/img/icone_azul.svg"

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
                            <h5>Aqui você tem acesso as suas informações da empresa, podendo ser mais prático 
                                na organização de arquivos, de notificações e atualizações do seu perfil.</h5>
                            <Caminho link="/PreCad1" name="Complete as informações para continuar!" />
                        </div>
                    </div>

                    <div className='redes-sociais'>
                        <div className='redes-texto'>
                            <h5>SIGA AS REDES SOCIAS</h5>
                        </div>

                        <div className='redes-icons'>
                            <i className="fa-brands fa-facebook fa-3x"></i>
                            <i className="fa-brands fa-instagram fa-3x"></i>
                            <i className="fa-brands fa-youtube fa-3x"></i>
                            <i className="fa-brands fa-linkedin fa-3x"></i>
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
                            <img className="logo" src={Icone} />
                            <h1>BEM-VINDO, COLABORADOR!</h1>
                        </div>
                    </div>

                    
                    <div className='redes-sociais'>
                        <div className='redes-texto'>
                            <h5>SIGA AS REDES SOCIAS</h5>
                        </div>

                        <div className='redes-icons'>
                            <i className="fa-brands fa-facebook fa-3x"></i>
                            <i className="fa-brands fa-instagram fa-3x"></i>
                            <i className="fa-brands fa-youtube fa-3x"></i>
                            <i className="fa-brands fa-linkedin fa-3x"></i>
                        </div>

                    </div>
                </div>
            </>
        )
    }

}

export default Home;