import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Collapse from '../collapse';
import './progressBar.css';
import "./YoutubeEmbed.css";

import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import { cnpj, cpf } from "cpf-cnpj-validator";



// COMPONENTS
import ButtonMat from '../../components/button/buttonMat'
import Check from "../../components/input/check";
import CheckChecked from "../../components/input/checkChecked";
import General from "../../components/general";

import Css from "../../assets/style/style";
import YoutubeEmbed from './YoutubeEmbed';




const Range = (props) => {
    return (
        <div className="range" style={{ width: `${props.percentRange}%` }} />
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange} />
        </div>
    );
};

export const ProgressBarContainer = () => {
    let [percentRange, setProgress] = useState(0);

    return (
        <>
            <div className="conteudo">
                <div className="row">

                    <div className="col col s12 m12 l7">
                        <div className="teste3">
                            <ProgressBar percentRange={percentRange} />
                        </div>
                    </div>

                    <div className="col s12 m12 l5">
                        <div className="teste3">
                            <p><label>Total de aulas: </label></p>
                            <p></p>
                        </div>
                    </div>

                    <div className="col col s12 teste3" >
                        <div className="video center-align">
                            <YoutubeEmbed embedId="CyJ4mKuv6E0" />
                        </div>
                    </div>

                    <div className="col col s12 teste3" >
                        <h4>Conteúdo dos cursos</h4>
                        <div className="col col s12">

                            <ul className="collapsible popout" data-collapsible="accordion">
                                <Collapse title="JavaScript" desc1={<p><label>Aula 1:</label></p>}
                                    desc2={<p><label>Aula 2:</label></p>}
                                    desc3={<p><label>Aula 3:</label></p>}
                                    desc4={<p><label>Aula 4:</label></p>}
                                    desc5={<p><label>Aula 5:</label></p>}
                                    desc6={null} />
                            </ul>

                        </div>
                        <div className="col col s12">

                            <ul className="collapsible popout" data-collapsible="accordion">
                                <Collapse title="React" desc1={<p><label>Aula 1:</label></p>}
                                    desc2={<p><label>Aula 2:</label></p>}
                                    desc3={<p><label>Aula 3:</label></p>}
                                    desc4={<p><label>Aula 4:</label></p>}
                                    desc5={<p><label>Aula 5:</label></p>}
                                    desc6={null} />
                            </ul>

                        </div>
                        <div className="col col s12">

                            <ul className="collapsible popout" data-collapsible="accordion">
                                <Collapse title="LGPD" desc1={<p><label>Aula 1:</label></p>}
                                    desc2={<p><label>Aula 2:</label></p>}
                                    desc3={<p><label>Aula 3:</label></p>}
                                    desc4={<p><label>Aula 4:</label></p>}
                                    desc5={<p><label>Aula 5:</label></p>}
                                    desc6={null} />
                            </ul>

                        </div>
                        <div className="col col s12">

                            <ul className="collapsible popout" data-collapsible="accordion">
                                <Collapse title="GitHub" desc1={<p><label>Aula 1:</label></p>}
                                    desc2={<p><label>Aula 2:</label></p>}
                                    desc3={<p><label>Aula 3:</label></p>}
                                    desc4={<p><label>Aula 4:</label></p>}
                                    desc5={<p><label>Aula 5:</label></p>}
                                    desc6={null} />
                            </ul>

                        </div>
                        <div className="col col s12">

                            <ul className="collapsible popout" data-collapsible="accordion">
                                <Collapse title="Typescript" desc1={<p><label>Aula 1:</label></p>}
                                    desc2={<p><label>Aula 2:</label></p>}
                                    desc3={<p><label>Aula 3:</label></p>}
                                    desc4={<p><label>Aula 4:</label></p>}
                                    desc5={<p><label>Aula 5:</label></p>}
                                    desc6={null} />
                            </ul>

                        </div>
                    </div>






                    <div className="col s12 ">
                        <div className="teste3 center-align">
                            <div className="toggle-buttons">
                                <Link to="/PerfilColaborador/:id"><button>Voltar
                                </button></Link>
                                <Link to="/Cursos"><button onClick={() => setProgress(percentRange < 100 ? percentRange + 20 : 100)}>Avançar</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};