import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import { getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";
import axios from "axios"
import M from 'materialize-css'
import fileDownload from 'js-file-download'

// IMAGE
import Icone from "../../assets/img/icone_azul.svg"

import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import InputFile from "../../components/input/file";
import Submit from "../../components/button/submit";
import Text from "../../components/textarea/index"
import './admissao.css'

class Admissao extends Component {

    state = {
        // STATES DAS INFORMAÇÕES
        id: String,
        cargo: [],
        colaborador: [],
        colaboradores: [],
        documentos: [],

        // STATES DOS SELECTS
        cargoSelecionado: String,
        superiorSelecionado: String,
        tipoContratacao: String,
        carDep: String,
        arquivo: "",
    };

    componentDidMount() {
        let url = window.location.href.split("/")
        var id = url[4]
        this.setState({id})

        axios.get(`http://localhost:5000/infocolab/getInfoById/${id}`)
        .then((res)=>{
                const colaborador = res.data
                console.log( res.data);

                this.setState({colaborador})
        })

        axios.get(`http://localhost:5000/infocolab/getDocsById/${id}`)
        .then((res)=>{
                const documentos = res.data
                console.log( res.data);
                
                this.setState({documentos})
        })
        
        axios.get("http://localhost:5000/infocolab/getAll")
            .then((res) => {
                console.log(res.data)

                const colaboradores = res.data

                this.setState({colaboradores})
            })
        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);

                const cargo = res.data

                this.setState({ cargo })
            }
        )  
    }  
    handleDownload = (filePath) => {
        filePath = filePath.split("\\")     
        let file = filePath[1]
        axios.post(`http://localhost:5000/infocolab/download/${file}`).then((res)=>{
            const arquivo = res.data

            this.setState({arquivo})

            console.log(this.state.arquivo);
            
            
            
        })
        
      }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    handleSubmit = (event) => {
        axios.get(`http://localhost:5000/departamentos/getDepByCar/${this.state.cargoSelecionado}`).then((res)=>{
            const carDep = res.data
            this.setState({ carDep })
            const data = {
                dep_id: this.state.carDep[0].dep_id,
                car_id: this.state.cargoSelecionado,
                head_id: this.state.superiorSelecionado,
                tipo_contratacao: this.state.tipoContratacao
            }
            axios.put(`http://localhost:5000/infocolab/setWorkInfoUser/${this.state.id}`,data)
            axios.delete(`http://localhost:5000/notificacao/deleteNotificacao/${this.state.id}`)
        })
   
    }

    render(){
        return(
            <>
                <General/>
                <div className="conteudo">
                    {this.state.colaborador.map(info => 
                    <div key={info.colaborador_con_id }>
                       
                            <h4>Dados pessoais</h4>
                            <p><label>  Nome:</label> {info.con_nome} </p>
                            <p><label htmlFor="">CPF:</label> {info.user_cpf} </p>
                            <p><label htmlFor="">Nacionalidade:</label> {info.user_nacionalidade}</p>
                            <p><label htmlFor="">Naturalidade:</label> {info.user_naturalidade}</p>
                            <p><label htmlFor="">Raça:</label> {info.user_raca}</p>
                            <p><label htmlFor="">Gênero:</label> {info.user_genero}</p>
                            <p><label htmlFor="">Data de Nascimento:</label>  {info.data_nascimento}</p>
                            <p><label htmlFor="">Estado Civil:</label>  {info.user_estado_civil}</p>
                            <p><label htmlFor="">Dependentes:</label>  {info.user_filho}</p>
                        <hr/>

                     
                            <h4>Contato</h4>
                            <p><label htmlFor="">E-mail</label>: {info.con_email}</p>
                            <p><label htmlFor="">DDD:</label> {info.con_ddd}</p>
                            <p><label htmlFor="">Telefone:</label> {info.con_telefone}</p>
                        <hr />

                    
                            <h4>Endereço</h4>
                            <p><label htmlFor="">Rua:</label> {info.end_rua}</p>
                            <p><label htmlFor="">Complemento:</label> {info.end_complemento}</p>
                            <p><label htmlFor="">Bairro:</label> {info.end_bairro}</p>
                            <p><label htmlFor="">CEP:</label> {info.end_cep}</p>
                            <p><label htmlFor="">Cidade:</label> {info.end_cidade}</p>
                            <p><label htmlFor="">Estado:</label> {info.end_estado}</p>
                            <p
                            ><label htmlFor="">Região:</label> {info.end_regiao}</p>
                        <hr/>    
                            
                            
                        
                            <h4>Informações Acadêmicas</h4>
                            <p><label htmlFor="">Formação:</label> {info.qua_formacao}</p>
                            <p><label htmlFor="">Curso:</label> {info.qua_curso}</p>
                            <p><label htmlFor="">Instituição:</label> {info.qua_nome_instituição}</p>
                            <p><label htmlFor="">Língua:</label> {info.qua_lingua}</p>
                                                                                            
                    </div>
                    )}
                   
                   <h4>Documentos</h4>
                    {this.state.documentos.map(doc => <div key={doc.contratado_con_id }>
                       
                            
                            <p><label htmlFor="">{doc.doc_tipo.toUpperCase()}:</label><a href={this.state.arquivo}onClick={()=>this.handleDownload(doc.doc_link)}  download>{doc.doc_link}</a></p>
                        
                    </div>)}
                        
                    <div className="aceitar">
                        <div className="row">
                            <div className="col s12">
                                <h4>Informações do trabalho</h4>
                                <select className="browser-default" name='cargoSelecionado' id="cargo" onChange={this.handleChange}>
                                    <option value=" " disabled selected>Cargo</option>
                                    {this.state.cargo.map(car => <option key={car.car_id} value={car.car_id}>{car.car_descricao}</option>)}
                                </select>
                                    
                                <select className="browser-default" name='superiorSelecionado' id="superior" onChange={this.handleChange}>
                                    <option value="" disabled selected>Superior</option>
                                    {this.state.colaboradores.map(colaborador => <option key={colaborador.con_id} value={colaborador.con_id}> {colaborador.con_nome} - {colaborador.car_descricao} </option> )}
                                </select>
                                    
                                <select className="browser-default" name='tipoContratacao' id="contratacao" onChange={this.handleChange} >
                                    <option value="" disabled selected>Contratação</option>
                                    <option value="1" >CLT</option>
                                    <option value="2" >PJ</option>
                                    <option value="3" >Estagiário</option>
                                    <option value="4" >Temporário</option>
                                       {/*this.state.contratacao.map(colaborador => <option key={colaborador.con_id} value={colaborador.con_id}> {colaborador.con_nome} - {colaborador.car_descricao} </option> )*/}
                                </select>
                            </div>
                               {/* <div className="col s6">
                                    <h4>Benefícios</h4>
                                    <Check value="1" name="Plano de Saúde"/>
                                    <Check value="2" name="Vale Transporte"/>
                                    <Check value="3" name="Vale Refeição"/>
                                    <Check value="4" name="Auxílio Creche"/>
                                    </div> */}    
                    </div>
                        <Submit id="res" title="Aceitar" fname={this.handleSubmit}/>
                    </div>

                    <div className="rejeitar">
                        {/*<Text id=""/>*/}
                        <Submit id="rejeitar" title="Rejeitar" fname=""/>   
                    </div>
                </div> 
            </>
        )
    }
}

export default Admissao;