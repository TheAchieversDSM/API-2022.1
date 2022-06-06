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
import { Link } from "react-router-dom";
import YoutubeEmbed from "../../components/youtubeEmbed/youtube";
import ReactPlayer from 'react-player';


class Cursos extends Component {
    state = {
        curso_id: "",
        colab_id: "",
        curso: [],
        materiais: [],
        curso_nome: ""
    }

    componentDidMount() {
        let url = window.location.href.split("/")
        this.state.curso_id = url[4]
        this.state.colab_id = url[5]
        axios.get(`http://localhost:5000/curso/getAllCursoInfoById/${this.state.curso_id}`).then((res) => {

            const curso = res.data
            this.setState({ curso })
            console.log(curso);


            for (let index = 0; index < curso.length; index++) {
                console.log("aa");

                axios.get(`http://localhost:5000/material/getAllMaterialFromAula/${this.state.curso[index].curso_aula_id}`).then((res) => {
                    const data = res.data
                    this.state.materiais.push(data)
                })
                console.log(this.state.materiais)

            }

            axios.get(`http://localhost:5000/curso/getCursoNameById/${this.state.curso_id}`).then((res) => {

                const curso_nome = res.data[0].trilha_curso_nome
                this.setState({ curso_nome })
            })
        })
    }

    render() {
        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                    <h3>{this.state.curso_nome}</h3>

                    <div className="col col s12 teste3" >
                        <div className="video center-align">
                            <YoutubeEmbed embedId="CyJ4mKuv6E0" />
                        </div>
                    </div>

                    <div className="row">
                            <h5>Materiais</h5>
                            {this.state.materiais.map(info => info.map(subinfo =>
                                <a href={`http://localhost:5000/infocolab/${subinfo.material_link}`} key={subinfo.aula_material_id} className="col s12" download>{subinfo.material_link}</a>

                            )

                            )}
                    </div>
                </div>

            </>
        )
    }
}

export default Cursos;