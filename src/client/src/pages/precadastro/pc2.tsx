import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";

// LOCAL CSS
import './pc2.css'

// COMPONENTS
import Css from "../../assets/style/style";
import ButtonMat from "../../components/button/buttonMat";
import General from "../../components/general";
import Input from "../../components/input/input";
{/*import Check from "../../components/input/check";*/}



class PreCadastro2 extends Component {
    state = {
        formacao: String,
        cursos: String,
        linguas: String
    }

    handleChangeFormacao = event => {
        this.setState({
            formacao: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeCursos = event => {
        this.setState({
            cursos: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeLinguas = event => {
        this.setState({
            linguas: event.target.value,
        });
        console.log(this.state);
    };

    handleSubmit = async(event)  => {
        event.preventDefault();
        const infoAcademica = {
            formacao: this.state.formacao,
            cursos: this.state.cursos,
            linguas: this.state.linguas,
            id: getCookie("id")
        }
        const id= getCookie("id")
        axios.post("http://localhost:5000/precad2", infoAcademica);{
            console.log("foi");
            
        }
        
        axios.post(`http://localhost:5000/notificacao/${infoAcademica.id}`);{
            console.log("foi");
            
        }
    }

    render() {
        return (
            <>
                <General />
                
                <Css ref="./pc2.css" />

                <div className="conteudo">
                    <div className="row">
                        <div className="col s12">
                            <h5 className="titulo">Dados Acadêmicos</h5>
                            <div className="bloco1">
                                <div className="row">
                                    <Input fname={this.handleChangeFormacao} div="input-field col s4 bla" id="formacao" type="text" class="validate" name="Formação" />

                                    <Input fname={this.handleChangeCursos} div="input-field col s4 bla" id="cursos" type="text" class="validate" name="Cursos" />

                                    <Input fname={this.handleChangeLinguas} div="input-field col s4 bla" id="linguas" type="text" class="validate" name="Línguas" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <Link to="/PreCad1"><ButtonMat  fname={""} class="waves-effect waves-light btn" name="Voltar" iClass="fa-solid fa-arrow-left-long" /></Link>
                    <Link to="/PreCad3"><ButtonMat  fname={this.handleSubmit} class="waves-effect waves-light btn" name="Próximo" iClass="fa-solid fa-arrow-right-long" /></Link>
                </div>
            </>
        )
    }
}
export default PreCadastro2;