import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Css from '../../assets/style/style';
import General from '../../components/general';
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import uploadFile from '../../utils/uploadFiles/uploadFile';
import FormularioUpload from '../../components/arquivos';
import ButtonMat from "../../components/button/buttonMat";
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";
import Submit from '../../components/button/submit';
import InputFile from "../../components/input/file";

class UploadMateriais extends Component {
    state = {
        file:  File,
        departamento: String,
        cargo: String
    }

    handleChangeDepartamento = event => {
        this.setState({
            departamento: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeCargo = event => {
        this.setState({
            cargo: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeFile = event => {
        this.setState({
            file: event.target.files[0],
        });
        console.log(this.state);
    };
    


    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
          });
          console.log(this.state);
    };

    render() { 
       
        
        return (
            
            <>
            <General />

            <Css ref="./novoperfil.css" />
            <div className="conteudo">
                    <h4>Upload de Materiais</h4>

                    <div className="form">
                        <div className="teste1 row">
                            
                            <label>Cargo</label>
                            <select className="browser-default" id="cargo"   onChange={this.handleChangeCargo}>
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option function="" value="Diretor de Marketing" name="Diretor de Marketing" />
                                <Option function="" value="Diretor financeiro" name="Diretor financeiro" />
                            </select>

                            <label>Curso</label>
                            <select className="browser-default" id="curso" onChange={this.handleChangeCargo}>
                                <DisableOption disableValue="" disableNome="Escolha um curso" />
                                <Option function="" value="LGPD" name="LGPD" />
                                <Option function="" value="JavaScript" name="JavaScript" />
                                <Option function="" value="Ingles" name="Inglês" />
                            </select>


                                <form   datatype='multipart/form-data' >
                                    <input type='file' name='file' onChange={this.handleChangeFile} multiple/>
                                    <input type="button"/>
                                </form>

                                <Submit id="publicar" title="Publicar" fname="" />

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default UploadMateriais;