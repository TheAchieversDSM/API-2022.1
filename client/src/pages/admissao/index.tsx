import React, { Component } from 'react';
import General from '../../components/general';
import { getCookie, deleteCookie, setCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";
import axios from "axios"


// IMAGE
import Icone from "../../assets/img/icone_azul.svg"

import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import InputFile from "../../components/input/file";
import Submit from "../../components/button/submit";
import Text from "../../components/textarea/index";
import './admissao.css'
import uploadFile from '../../utils/uploadFiles/uploadFile';

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
        this.setState({ id })

        axios.get(`http://localhost:5000/infocolab/getInfoById/${id}`)
            .then((res) => {
                const colaborador = res.data
                console.log(res.data);

                this.setState({ colaborador })
            })

        axios.get(`http://localhost:5000/infocolab/getDocsById/${id}`)
            .then((res) => {
                const documentos = res.data
                console.log(res.data);

                this.setState({ documentos })
            })

        axios.get("http://localhost:5000/infocolab/getAll")
            .then((res) => {
                console.log(res.data)

                const colaboradores = res.data

                this.setState({ colaboradores })
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
        axios.post(`http://localhost:5000/infocolab/download/${file}`).then((res) => {
            const arquivo = res.data

            this.setState({ arquivo })

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
        axios.get(`http://localhost:5000/departamentos/getDepByCar/${this.state.cargoSelecionado}`).then((res) => {
            const carDep = res.data
            this.setState({ carDep })

            const InfoWork = {
                dep_id: this.state.carDep[0].dep_id,
                car_id: this.state.cargoSelecionado,
                head_id: this.state.superiorSelecionado,
                tipo_contratacao: this.state.tipoContratacao
            }
            
            var salario = 0
            var cargo = 0
            this.state.cargo.map(info => {
                if (info.car_id == this.state.cargoSelecionado) {
                    salario = info.car_salario
                    cargo = info.car_descricao
                }
            })

            console.log(salario)
            console.log(cargo)

            const infoHist = {
                id: this.state.id,
                cargo: cargo,
                salario: salario
            }
            axios.put(`http://localhost:5000/infocolab/setWorkInfoUser/${this.state.id}`, InfoWork)

            axios.post(`http://localhost:5000/historico/admissao`, infoHist)
            
            axios.delete(`http://localhost:5000/notificacao/deleteNotificacao/${this.state.id}`)

            //window.close()
            //window.open("/notificacao")

            alert('Cadastro Aprovado.\nPara mais informações, procure pela página do colaborador no Organograma ou na Lista de Colaboradores')
        })
    }

    handleRejeitado = (event) => {
        axios.delete(`http://localhost:5000/notificacao/deleteNotificacao/${this.state.id}`)

        alert('Cadastro rejeitado.\nEnviado aviso ao usuário para atualização de informação.')
    }

    render() {
        return (
            <>
                <General />
                <div className="conteudo">
                    {this.state.colaborador.map(info =>
                        <div key={info.colaborador_col_id}>
                            <h4>Dados pessoais</h4>
                            <p><label>Nome:</label> {info.col_nome} </p>
                            <p><label>CPF:</label> {info.col_cpf} </p>
                            <p><label>Nacionalidade:</label> {info.col_nacionalidade}</p>
                            <p><label>Naturalidade:</label> {info.col_naturalidade}</p>
                            <p><label>Raça:</label> {info.col_raca}</p>
                            <p><label>Gênero:</label> {info.col_genero}</p>
                            <p><label>Data de Nascimento:</label>  {info.col_nascimento}</p>
                            <p><label>Estado Civil:</label>  {info.col_estado_civil}</p>
                            <p><label>Dependentes:</label>  {info.col_filho}</p>
                            <hr />

                            <h4>Contato</h4>
                            <p><label>E-mail:</label> {info.col_email}</p>
                            <p><label>DDD:</label> {info.col_ddd}</p>
                            <p><label>Telefone:</label> {info.col_telefone}</p>
                            <hr />

                            <h4>Endereço</h4>
                            <p><label>Rua:</label> {info.col_end_rua}</p>
                            <p><label>Complemento:</label> {info.col_end_complemento}</p>
                            <p><label>Bairro:</label> {info.col_end_bairro}</p>
                            <p><label>CEP:</label> {info.col_end_cep}</p>
                            <p><label>Cidade:</label> {info.col_end_cidade}</p>
                            <p><label>Estado:</label> {info.col_end_estado}</p>
                            <p
                            ><label>Região:</label> {info.col_end_regiao}</p>
                            <hr />

                            <h4>Informações Acadêmicas</h4>
                            <p><label>Formação:</label> {info.qua_formacao}</p>
                            <p><label>Curso:</label> {info.qua_curso}</p>
                            <p><label>Instituição:</label> {info.qua_nome_instituição}</p>
                            <p><label>Língua:</label> {info.qua_lingua}</p>
                        </div>
                    )}

                    <h4>Documentos</h4>
                    {this.state.documentos.map(doc => <div key={doc.colaborador_col_id}>

                        <p><label>{doc.doc_tipo.toUpperCase()}:</label><a href={this.state.arquivo} onClick={() => this.handleDownload(doc.doc_link)} download>{doc.doc_link}</a></p>

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
                                    {this.state.colaboradores.map(colaborador => <option key={colaborador.col_id} value={colaborador.col_id}> {colaborador.col_nome} - {colaborador.car_descricao} </option>)}
                                </select>

                                <select className="browser-default" name='tipoContratacao' id="contratacao" onChange={this.handleChange} >
                                    <option value="" disabled selected>Contratação</option>
                                    <option value="1" >CLT</option>
                                    <option value="2" >PJ</option>
                                    <option value="3" >Estagiário</option>
                                    <option value="4" >Temporário</option>
                                    {/*this.state.contratacao.map(colaborador => <option key={colaborador.col_id} value={colaborador.col_id}> {colaborador.col_nome} - {colaborador.car_descricao} </option> )*/}
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

                        <Submit id="aceitar" title="Aceitar" fname={this.handleSubmit} />

                    </div>

                    <div className="rejeitar">
                        {/*<Text id=""/>*/}
                        <Submit id="rejeitar" title="Rejeitar" fname={this.handleRejeitado} />
                    </div>
                </div>
            </>
        )
    }
}

export default Admissao;