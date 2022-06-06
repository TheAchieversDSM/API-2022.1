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
        curso_id : "",
        colab_id : "",
        curso: [],
        materiais: [],
        curso_nome: ""
    }

    componentDidMount(){
        let url = window.location.href.split("/")
        this.state.curso_id = url[4]
        this.state.colab_id = url[5]
        axios.get(`http://localhost:5000/curso/getAllCursoInfoById/${this.state.curso_id}`).then((res)=>{
            console.log(res.data);
            const curso = res.data
            this.setState({curso})
            const materiais = []
            for (let index = 0; index < curso.length; index++) {
           
            axios.get(`http://localhost:5000/material/getAllMaterialFromAula/${this.state.curso[index].curso_aula_id}`).then((res)=>{
                console.log(res.data);
                
                const data = res.data
                materiais.push(data)
                
            })
            this.setState({materiais})   
            console.log(this.state);
            
        }      
        axios.get(`http://localhost:5000/curso/getCursoNameById/${this.state.curso_id}`).then((res)=>{
            console.log(res.data);
            const curso_nome = res.data[0].trilha_curso_nome
            this.setState({curso_nome}) 
        })
        })     
    }

    render() {
        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                <h1>{this.state.curso_nome}</h1>
                <div className="row">

                    <div className="col s12 m12 l5">
                        <div className="teste3">
                            <p><label>Total de aulas: </label></p>
                            <p>** aulas</p>
                        </div>
                    </div>

                    <div className="col col s12 teste3" >
                        <div className="video center-align">
                            <YoutubeEmbed embedId="CyJ4mKuv6E0" />
                        </div>
                    </div>
                {this.state.curso.map(info=>
                    <div className="col col s12 teste3" >
                            <div className="col col s12">
                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title={<p><label><input name={info.curso_aula_nome} value="1" type="radio" /><span>{info.curso_aula_nome}</span></label></p>} desc1={<p><label>Conteúdo 1:</label></p>}
                                        desc2={<p><label>Conteúdo 2:</label></p>}
                                        desc3={<p><label>Conteúdo 3:</label></p>}
                                        desc4={<p><label>Conteúdo 4:</label></p>}
                                        desc5={<p><label>Conteúdo 5:</label></p>}
                                        desc6={null} />
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className="col s12 ">
                        <div className="teste3 center-align">
                            <div className="toggle-buttons">
                                <Link to="/PerfilColaborador/:id"><button>Voltar
                                </button></Link>
                                <Link to="/Cursos"><button >Avançar</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
            </>
        )
    }
}

export default Cursos;