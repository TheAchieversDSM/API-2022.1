import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import FormularioUpload from "../../components/arquivos/formularioUpload";
import ButtonMat from "../../components/button/buttonMat";
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";

class UploadMateriais extends Component {
    state = {
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

    handleSubmit = async (event) => {
        event.preventDefault();
        const uploadMateriais = {
            departamento: this.state.departamento,
            cargo: this.state.cargo
        }
        
        await axios.post("http://localhost:5000/uploadmateriais/create", uploadMateriais )
        
        
    };
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
                            
                            <FormularioUpload />

                            <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Enviar" iClass="{}" />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default UploadMateriais;