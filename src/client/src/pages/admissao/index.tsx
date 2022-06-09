import React, { Component } from 'react';
import General from '../../components/general';
import fileDownload from 'js-file-download';
import swal from "sweetalert";
import { getCookie, deleteCookie, setCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";
import axios from "axios"


// IMAGE
import Submit from "../../components/button/submit";
import './admissao.css'
import Check from '../../components/input/check';
import Input from '../../components/input/input';
import { info } from 'console';
import InputCheck from '../../components/input/inputCheck';


class Admissao extends Component {

    state = {
        // STATES DAS INFORMAÇÕES
        id: String,
        cargo: [],
        info_acad: [],
        colaborador: [],
        colaboradores: [],
        documentos: [],

        // STATES DOS SELECTS
        cargoSelecionado: String,
        superiorSelecionado: String,
        tipoContratacao: String,
        carDep: String,
        arquivo: "",
        planoSaude: String,
        valeTransporte: String,
        valeRefeicao: String,
        auxilioCreche: String
    };

    componentDidMount() {
        let url = window.location.href.split("/")
        var id = url[4]
        this.setState({ id })

        axios.get(`http://localhost:5000/infocolab/getInfoById/${id}`)
            .then((res) => {
                const colaborador = res.data.user
                console.log(res.data);
                this.setState({ colaborador });
            })
        axios.get(`http://localhost:5000/infoacademica/getInfoAcademica/${id}`)
            .then((res) => {
                const info_acad = res.data
                console.log(res.data);
                this.setState({ info_acad });
            })

        axios.get(`http://localhost:5000/infocolab/getDocsById/${id}`)
            .then((res) => {
                const documentos = res.data
                console.log(res.data);
                this.setState({ documentos });
            })

        axios.get("http://localhost:5000/infocolab/getAll")
            .then((res) => {
                console.log(res.data);
                const colaboradores = res.data;
                this.setState({ colaboradores });
            })
        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);

                const cargo = res.data

                this.setState({ cargo })
            }
            )
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    handleChangeSelect = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        console.log(event.target.value);

        if (event.target.value == 'sim') {
            document.getElementById("planoSaude").style.display = "block"
        }
        else {
            document.getElementById("planoSaude").style.display = "none"
        }
    }

    handleChangeSelect2 = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        console.log(event.target.value);

        if (event.target.value == 'sim') {
            document.getElementById("valeTransporte").style.display = "block"
        }
        else {
            document.getElementById("valeTransporte").style.display = "none"
        }
    }

    handleChangeSelect3 = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        console.log(event.target.value);

        if (event.target.value == 'sim') {
            document.getElementById("valeRefeicao").style.display = "block"
        }
        else {
            document.getElementById("valeRefeicao").style.display = "none"
        }
    }

    handleChangeSelect4 = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        console.log(event.target.value);

        if (event.target.value == 'sim') {
            document.getElementById("auxilioCreche").style.display = "block"
        }
        else {
            document.getElementById("auxilioCreche").style.display = "none"
        }
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
            }
            var today = new Date();

            const cargoHist = {
                colaborador_col_id: this.state.id,
                his_car_data: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                his_car_cargo: cargo,
                his_car_salario: salario
            }

            const beneficios = {
                valeTransporte: this.state.valeTransporte,
                valeRefeicao: this.state.valeRefeicao,
                auxilioCreche: this.state.auxilioCreche,
                planoSaude: this.state.planoSaude
            }

            axios.post(`http://localhost:5000/precad1/updatebenefits/${this.state.id}`, beneficios).then((res) => {
                if (res.data.erro) {
                    M.toast({ html: res.data.erro, classes: "red darken-4 rounded" })
                }
            })

            axios.put(`http://localhost:5000/infocolab/setWorkInfoUser/${this.state.id}`, InfoWork)

            axios.post(`http://localhost:5000/historico/admissao`, infoHist)

            axios.post(`http://localhost:5000/historico/newHistoricoCargo`, cargoHist)

            axios.delete(`http://localhost:5000/notificacao/deleteNotificacao/${this.state.id}`)


            //window.open("/notificacao")
            //window.close()

            swal({
                title: "Cadastro aceito!",
                text: `Agora o colaborador terá acesso aos recursos do sistema`,
                icon: "success",
                buttons: {
                    cancelar: {
                        value: false,
                        text: "Cancelar",
                        className: "cancelarButton"
                    },
                    desligar: {
                        className: "continuarButton",
                        value: true,
                        text: "OK!"
                    }
                }
            })
        })
    }

    handleRejeitado = (event) => {
        axios.delete(`http://localhost:5000/notificacao/deleteNotificacao/${this.state.id}`)
        swal({
            title: "Cadastro negado!",
            text: `Aguarde a resposta do colaborador.`,
            icon: "warning",
            buttons: {
                cancelar: {
                    value: false,
                    text: "Cancelar",
                    className: "cancelarButton"
                },
                desligar: {
                    className: "continuarButton",
                    value: true,
                    text: "OK!"
                }
            }
        })
    }

    render() {
        return (
            <>
                <General />
                <div className="conteudo">
                    {this.state.colaborador.map(info =>
                        <div key={info.col_id}>
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
                            <hr />
                        </div>
                    )}

                    {this.state.info_acad.map(info =>
                        <div key={info.colaborador_col_id}>
                            <h4>Informações Acadêmicas</h4>
                            <p><label>Formação:</label> {info.qua_formacao}</p>
                            <p><label>Curso:</label> {info.qua_curso}</p>
                            <p><label>Instituição:</label> {info.qua_nome_instituicao}</p>
                            <p><label>Língua:</label> {info.qua_lingua}</p>
                        </div>
                    )}

                    <h4>Documentos</h4>
                    {this.state.documentos.map(doc => <div key={doc.colaborador_col_id}>

                        <p>
                            <label>{doc.doc_tipo.toUpperCase()}:</label>
                            <a href={`http://localhost:5000/infocolab/` + doc.doc_link} download>
                                <button className="btn btn-primary">Download</button>
                            </a>
                        </p>

                    </div>)}

                    <div className="aceitar">
                        <div className="row">
                            <div className="col s12">
                                <h4>Informações do trabalho</h4>
                                <select className="browser-default" name='cargoSelecionado' id="cargo" onChange={this.handleChange}>
                                    <option value="" disabled selected>Cargo</option>
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

                            <div className="col s12">
                                <h4>Benefícios</h4>
                                <div className="inputGrid">
                                    <div className="divdiv">
                                        <h5 className="titulo">Possui Plano de Saúde?</h5>
                                        <form name="planoDeSaude" id="planoDeSaude" onChange={this.handleChangeSelect}>
                                            <p>
                                                <label>
                                                    <input name="planoDeSaude" value="sim" type="radio" />
                                                    <span>Sim</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input name="planoDeSaude" value="nao" type="radio" />
                                                    <span>Não</span>
                                                </label>
                                            </p>
                                        </form>
                                        <InputCheck lenght={20} stateName="planoSaude" fname={this.handleChange} div="input-field col s12 m12 l6 bla planoSaude" id="planoSaude" class="validate" type="text" name="Insira o Plano de Saúde: " />
                                    </div>
                                    <div className="divdiv">
                                        <h5 className="titulo">Possui Vale Transporte?</h5>
                                        <form name="valeDeTransporte" id="valeDeTransporte" onChange={this.handleChangeSelect2}>
                                            <p>
                                                <label>
                                                    <input name="valeDeTransporte" value="sim" type="radio" />
                                                    <span>Sim</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input name="valeDeTransporte" value="nao" type="radio" />
                                                    <span>Não</span>
                                                </label>
                                            </p>
                                        </form>

                                        <InputCheck lenght={8} stateName="valeTransporte" fname={this.handleChange} div="input-field col s12 m12 l6 bla valeTransporte" id="valeTransporte" class="validate" type="number" name="Insira o valor do Vale Transporte: " />
                                    </div>
                                    <div className="divdiv">
                                        <h5 className="titulo">Possui Vale Refeição?</h5>
                                        <form name="valeDeRefeicao" id="valeDeRefeicao" onChange={this.handleChangeSelect3}>
                                            <p>
                                                <label>
                                                    <input name="valeDeRefeicao" value="sim" type="radio" />
                                                    <span>Sim</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input name="valeDeRefeicao" value="nao" type="radio" />
                                                    <span>Não</span>
                                                </label>
                                            </p>
                                        </form>

                                        <InputCheck lenght={8} stateName="valeRefeicao" fname={this.handleChange} div="input-field col s12 m12 l6 bla valeRefeicao" id="valeRefeicao" class="validate" type="number" name="Insira o valor do Vale Transporte: " />
                                    </div>
                                    <div className="divdiv">
                                        <h5 className="titulo">Possui Auxílio Creche?</h5>
                                        <form name="auxilioDeCreche" id="auxilioDeCreche" onChange={this.handleChangeSelect4}>
                                            <p>
                                                <label>
                                                    <input name="auxilioDeCreche" value="sim" type="radio" />
                                                    <span>Sim</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input name="auxilioDeCreche" value="nao" type="radio" />
                                                    <span>Não</span>
                                                </label>
                                            </p>
                                        </form>

                                        <InputCheck lenght={8} stateName="auxilioCreche" fname={this.handleChange} div="input-field col s12 m12 l6 bla auxilioCreche" id="auxilioCreche" class="validate" type="number" name="Insira o valor do Auxílio Creche: " />
                                    </div>
                                </div>
                            </div>
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