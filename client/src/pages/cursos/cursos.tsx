import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import { cnpj, cpf } from "cpf-cnpj-validator";

// LOCAL CSS
import './cursos.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat';
import ButtonSubLink from "../../components/button/buttonSubLink";
import Check from "../../components/input/check";
import CheckChecked from "../../components/input/checkChecked";
import General from "../../components/general";
import Collapse from "../../components/collapse";
import Css from "../../assets/style/style";
import React from "react";
import ProgressBar from "../../components/progressBar/progressBar";
import ReactPlayer from 'react-player';
{/*import './video.mp4';*/}

class Cursos extends Component {
    state = {
        colaborador: [],
        historico: [],
        cargo: [],
        departamento: [],
        info_academica: [],
        head_colaborador: [],
        car_id: String,
        dep_id: String,
        id: getCookie("id")
    };
    handleSubmit: any;

    componentDidMount() {
        let url = window.location.href.split("/")
        if (url[3] === "PerfilColaborador") {
            this.state.id = url[4]
        }

        axios.get(`http://localhost:5000/infocolab/getInfoById/${this.state.id}`)
            .then((res) => {
                console.log(res.data);
                const colaborador = res.data.user;
                const head_colaborador = res.data.head_user;
                const historico = res.data.historico
                let dep_id = res.data.user[0].departamento_dep_id
                let car_id = res.data.user[0].cargo_car_id

                axios.get(`http://localhost:5000/cargos/userCargo/${car_id}`).then((res) => {
                    console.log(res.data);
                    const cargo = res.data;
                    this.setState({ cargo });
                })

                axios.get(`http://localhost:5000/departamentos/userDep/${dep_id}`).then((res) => {
                    console.log(res.data);
                    const departamento = res.data;
                    this.setState({ departamento });
                }
                )

                console.log(dep_id);

                this.setState({ historico })
                this.setState({ colaborador });
                this.setState({ head_colaborador });
            }
            )

        axios.get(`http://localhost:5000/infoacademica/getInfoAcademica/${this.state.id}`).then((res) => {
            console.log(res.data);
            const info_academica = res.data;
            this.setState({ info_academica });
        })
    }

    render() {

        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                    <h3>Nome do Curso</h3>
                    <div className="row">

                        <div className="col col s12 m12 l6">
                            <div className="teste3">
                                <p><label>Progresso:</label></p>
                                <p>0%</p>
                            </div>
                        </div>

                        <div className="col s12 m12 l3">
                            <div className="teste3">
                                <p><label>Total de aulas: </label></p>
                                <p>** aulas</p>
                            </div>
                        </div>

                        <div className="col col s12 m12 l3">
                            <div className="teste3 center-align">
                                <h6>Trilha de Aprendizagem</h6>
                                <ButtonSubLink id="" title="Aqui!" fname="" link="/TrilhaDeAprendizagem" />
                            </div>
                        </div>


                        <div className="col col s12">
                            <div className="teste3">
                                <div className="video center-align">
 
                                </div>
                            </div>
                        </div>

                        <div className="col col s12 teste3" >
                            <h4>Conteúdo do curso</h4>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title={<p><label><input name="aula1" value="1" type="radio" /><span>Aula 1</span></label></p>} desc1={<p><label>Conteúdo 1:</label></p>}
                                        desc2={<p><label>Conteúdo 2:</label></p>}
                                        desc3={<p><label>Conteúdo 3:</label></p>}
                                        desc4={<p><label>Conteúdo 4:</label></p>}
                                        desc5={<p><label>Conteúdo 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title={<p><label><input name="aula2" value="2" type="radio" /><span>Aula 2</span></label></p>} desc1={<p><label>Conteúdo 1:</label></p>}
                                        desc2={<p><label>Conteúdo 2:</label></p>}
                                        desc3={<p><label>Conteúdo 3:</label></p>}
                                        desc4={<p><label>Conteúdo 4:</label></p>}
                                        desc5={<p><label>Conteúdo 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title={<p><label><input name="aula2" value="2" type="radio" /><span>Aula 3</span></label></p>} desc1={<p><label>Conteúdo 1:</label></p>}
                                        desc2={<p><label>Conteúdo 2:</label></p>}
                                        desc3={<p><label>Conteúdo 3:</label></p>}
                                        desc4={<p><label>Conteúdo 4:</label></p>}
                                        desc5={<p><label>Conteúdo 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title={<p><label>Aula 4</label></p>} desc1={<p><label><input name="aula1" value="1" type="radio" /><span>Conteúdo 1:</span></label></p>}
                                        desc2={<p><label><input name="aula2" value="2" type="radio" /><span>Conteúdo 2:</span></label></p>}
                                        desc3={<p><label><input name="aula3" value="3" type="radio" /><span>Conteúdo 3:</span></label></p>}
                                        desc4={<p><label><input name="aula4" value="4" type="radio" /><span>Conteúdo 4:</span></label></p>}
                                        desc5={<p><label><input name="aula5" value="5" type="radio" /><span>Conteúdo 5:</span></label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title={<p><label>Aula 5</label></p>} desc1={<p><label><input name="aula1" value="1" type="radio" /><span>Conteúdo 1:</span></label></p>}
                                        desc2={<p><label><input name="aula2" value="2" type="radio" /><span>Conteúdo 2:</span></label></p>}
                                        desc3={<p><label><input name="aula3" value="3" type="radio" /><span>Conteúdo 3:</span></label></p>}
                                        desc4={<p><label><input name="aula4" value="4" type="radio" /><span>Conteúdo 4:</span></label></p>}
                                        desc5={<p><label><input name="aula5" value="5" type="radio" /><span>Conteúdo 5:</span></label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                        </div>

                    </div>


                </div>

            </>
        )
    }
}

export default Cursos;