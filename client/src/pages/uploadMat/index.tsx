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
import { getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";
import Submit from '../../components/button/submit';
import InputFile from "../../components/input/file";
import InputValue from "../../components/input/inputValue";
import './upload.css'

class UploadMateriais extends Component {
    state = {
        file: File,
        departamento: String,
        cargo: String,
        cursos: [],
        curso_id: "",
        aula_nome: "",
        aula_id: "",
        video_link: "",
        ids: ""
    }

    componentDidMount() {
        axios.get("http://localhost:5000/curso").then((res) => {
            const cursos = res.data
            this.setState({ cursos })
        })
    }

    handleChangeFile = event => {
        this.setState({
            file: event.target.files,
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

    handleSubmit = (event) => {
        event.preventDefault();   
        const data = {
            aula_nome: this.state.aula_nome,
            aula_id: this.state.curso_id
        }
        axios.post(`http://localhost:5000/aula/newAula`, data).then((res) => {
            if (res.data.erro) {
              M.toast({ html: res.data.erro, classes: "red darken-4 rounded" })
              return false 
            }
      })
              
      var aula_nome =  this.state.aula_nome 
      axios.post(`http://localhost:5000/aula/getAulaIdByName/${aula_nome}`).then((res) => {
          const tamanho = this.state.file.length
          console.log(res.data[0].curso_aula_id);
          const aula_id = res.data[0].curso_aula_id
          this.setState({ aula_id })
          for (let index = 0; index < tamanho; index++) {
              var dado = new FormData()
              dado.append("file", this.state.file[index])
              axios.post(`http://localhost:5000/material/newMaterial/${this.state.aula_id}`, dado).then((res) => {
                console.log(res.data);
                M.toast({ html: res.data, classes: "green darken-4 rounded" })
              })
          }
        axios.get(`http://localhost:5000/trilha/getAllUsersIdByCurso/${this.state.curso_id}`).then((res)=>{
            console.log(res.data.length);
            for (let index = 0; index < res.data.length; index++) {
                console.log("aqui");
                
                const data = {
                    colaborador_col_id: res.data[index].colaborador_col_id,
                    curso_aula_id: this.state.curso_id
                }
                axios.post("http://localhost:5000/aulaAndamento/createProgresso",data).then((res)=>{

                })
            }
        })
      })
    }


    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />
                <div className="conteudo">
                    <h4>Upload de Materiais</h4>

                    <div className="form">
                        <div className="teste1 row">
                            <label>Curso</label>
                            <select className="browser-default" name='curso_id' id="curso_id" onChange={this.handleChange}>
                                <DisableOption disableValue="" disableNome="Escolha um curso" />
                                {this.state.cursos.map(curso =>
                                    <Option function="" value={curso.trilha_curso_id} name={curso.trilha_curso_nome} />
                                )}
                            </select>

                            <InputValue value={this.state.aula_nome} lenght={100} div="input-field" type="text" class="validate" stateName="aula_nome" id="aula_nome" fname={this.handleChange} name="Nome da Aula" />

                            <form datatype='multipart/form-data' >
                                <p><label>Insira um ou mais arquivos</label></p>
                                <input type='file' name='file' onChange={this.handleChangeFile} multiple />
                            </form>

                            <div className="videoLink">
                                <p><label>Para vídeos, insira o Link do YouTube.</label></p>
                                <InputValue value={this.state.video_link} lenght={200} div="input-field" type="text" class="validate" stateName="video_link" id="video_link" fname={this.handleChange} name="Link do Youtube" />
                            </div>

                            <Submit id="publicar" title="Publicar" fname={this.handleSubmit} />

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default UploadMateriais;