import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import { getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";

// LOCAL CSS
import './home.css'

// IMAGE
import Icone from "../../assets/img/icone_azul.svg"

class Home extends Component {

    render() {

        const firstAcess = getCookie("firstAcess") != null;
        const aguardoConfirmacao = getCookie("aguardoConfirmacao") != null;
        
        if (firstAcess == true){
            return (
                <>
                    <General />

                    <Css ref="./home.css" />

                    <div className="conteudo">
                        <div className="imagem">
                            <img className="logo1" src={Icone} />
                        </div>

                        <div className="mensagem">
                            <div>
                                <h1>BEM-VINDO, COLABORADOR!</h1>
                                <h5>Aqui você tem acesso as suas informações da empresa, podendo ser mais prático 
                                    na organização de arquivos, de notificações e atualizações do seu perfil.</h5>
                                <Caminho link="/CompletarCadastro" name="Complete as informações para continuar!" />
                            </div>
                        </div>

                        <div className='redes-sociais'>
                            <div className='redes-texto'>
                                <h5>SIGA AS REDES SOCIAS</h5>
                            </div>

                            <div className='redes-icons'>
                                <a href="https://www.facebook.com/ionic.health/" target="_blank"><i className="fa-brands fa-facebook fa-3x"></i></a>
                                <a href="https://www.instagram.com/ionic.health/" target="_blank"><i className="fa-brands fa-instagram fa-3x"></i></a>
                                <a href="https://www.linkedin.com/company/ionichealth/" target="_blank"><i className="fa-brands fa-youtube fa-3x"></i></a>
                                <a href="https://www.linkedin.com/company/ionichealth/" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
                            </div>

                        </div>
                    </div>
                </>
            )
        } 

        else if(aguardoConfirmacao == true){   
            return  (
                <>
                    <General />

                    <Css ref="./pc3.css" />

                    <div className="conteudo">
                    <div className="imagem">
                            <img className="logo1" src={Icone} />
                        </div>

                        <div className="mensagem">
                            <div>
                                <h1>INFORMAÇÕES COMPLETAS!</h1>
                                <h4>Por favor, aguarde a aprovação do cadastro</h4>
                            </div>
                        </div>
                        <div className='redes-sociais'>
                            <div className='redes-texto'>
                                <h5>SIGA AS REDES SOCIAS</h5>
                            </div>

                            <div className='redes-icons'>
                            <a href="https://www.facebook.com/ionic.health/" target="_blank"><i className="fa-brands fa-facebook fa-3x"></i></a>
                                <a href="https://www.instagram.com/ionic.health/" target="_blank"><i className="fa-brands fa-instagram fa-3x"></i></a>
                                <a href="https://www.linkedin.com/company/ionichealth/" target="_blank"><i className="fa-brands fa-youtube fa-3x"></i></a>
                                <a href="https://www.linkedin.com/company/ionichealth/" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
                            </div>

                        </div>
                    </div>
                </>
            )
        }
        else {
           return(
           <>
                <General />

                <Css ref="./home.css" />
                <div className="conteudo">
                <div className="imagem">
                            <img className="logo1" src={Icone} />
                        </div>

                    <div className="mensagem">
                        <div>
                            <h1>BEM-VINDO, COLABORADOR!</h1>
                        </div>
                    </div>
                    <div className='redes-sociais'>
                            <div className='redes-texto'>
                                <h5>SIGA AS REDES SOCIAS</h5>
                            </div>

                            <div className='redes-icons'>
                                <a href="https://www.facebook.com/ionic.health/" target="_blank"><i className="fa-brands fa-facebook fa-3x"></i></a>
                                <a href="https://www.instagram.com/ionic.health/" target="_blank"><i className="fa-brands fa-instagram fa-3x"></i></a>
                                <a href="https://www.linkedin.com/company/ionichealth/" target="_blank"><i className="fa-brands fa-youtube fa-3x"></i></a>
                                <a href="https://www.linkedin.com/company/ionichealth/" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
                            </div>

                        </div>
                </div>
            </>
           )
        }
    }

}

export default Home;