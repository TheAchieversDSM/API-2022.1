import React, { Component } from 'react';
import axios from "axios";
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
    
    handleSubmit = async (event) => {
        uploadFile(this.state.file,"rg")
    }

    render() { 
       
        
        return (
            
            <>
            <General />

            <Css ref="./home.css" />
            <div className="conteudo">
                    <h2>Upload de Materiais</h2>

                    <div className="form">
                        <div className="teste1 row">

                            <label>Departamento</label>
                            <select className="browser-default" id="departamento"  onChange={this.handleChangeDepartamento}>
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option value="Financeiro" name="Financeiro" />
                                <Option value="Marketing" name="Marketing" />
                            </select>
                            
                            <label>Cargo</label>
                            <select className="browser-default" id="cargo"   onChange={this.handleChangeCargo}>
                                <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                <Option value="Diretor de Marketing" name="Diretor de Marketing" />
                                <Option value="Diretor financeiro" name="Diretor financeiro" />
                            </select>
                                <form   datatype='multipart/form-data' >
                                    <input type='file' name='file' onChange={this.handleChangeFile}/>
                                    <input onClick={this.handleSubmit} type="button"/>
                                </form>

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default UploadMateriais;