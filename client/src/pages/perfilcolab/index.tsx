import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";

// LOCAL CSS
import './perfil.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat'
import Check from "../../components/input/check";
import General from "../../components/general";
import Collapse from "../../components/collapse";
import Css from "../../assets/style/style";
import React from "react";


class PerfilColab extends Component {
    state = {
        colaborador: [],
        head_colaborador: [],
        id: getCookie("id")
    };

    componentDidMount() {
        console.log("indo");
        axios.get(`http://localhost:5000/infocolab/${this.state.id}`)
            .then((res) => {
                console.log(res.data);

                const colaborador = res.data.user;

                const head_colaborador = res.data.head_user;


                this.setState({ colaborador });
                this.setState({ head_colaborador });
            }
            )
    }

    render() {
        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                    <div className="row">
                        <div className="col s7">
                            <div className="teste1">
                                <div className="row" id="info">
                                    <div className="col s5">
                                        <div className="foto"></div>
                                    </div>
                                    <div className="col s6">
                                        {this.state.colaborador.map(info => <h5 key={info.con_id} className="name">{info.con_nome}</h5>)}
                                        <p>
                                            {this.state.colaborador.map(info => <p key={info.colaborador_con_id}>CPF: {info.user_cpf}</p>)}
                                            <p>Data de admissão: xx/yy/zzzz</p>
                                            <p>Data de desligamento: --/--/----</p>
                                            {this.state.colaborador.map(info => <p key={info.con_id}>Tipo de Contratação: {info.cont_descricao}</p>)}
                                            {this.state.colaborador.map(info => <p key={info.con_id}>E-mail: {info.con_email}</p>)}
                                            {this.state.colaborador.map(info => <p key={info.con_id}>Tel: ({info.con_ddd}) {info.con_telefone}</p>)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s5">
                            <div className="teste1">
                                <h4>Contrato</h4>
                                <div className="contrato-info">
                                    <p>
                                        <ButtonMat fname={"a"} class="waves-effect waves-light btn-large" name="Visualizar" iClass="fa-solid fa-book-open-reader" />
                                    </p>
                                    <p id="p1">ou</p>
                                    <p id="p2">
                                        <ButtonMat fname={"a"} class="waves-effect waves-light btn-large" name="Baixar em PDF" iClass="fa-solid fa-file-arrow-down" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <div className="teste2">
                                <h4>Informações</h4>
                                <div className="teste2-info">
                                    {this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Departamento: {info.dep_descricao}</p>)}
                                    {this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Cargo: {info.car_descricao}</p>)}
                                    <p>Status: ----</p>
                                    {this.state.head_colaborador.map(info => <p key={info.con_id}>Head: {info.con_nome} - {info.car_descricao}</p>)}
                                    <p>Faixa Salarial: ----</p>
                                    <p>Tempo de casa: ----</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s8">
                            <div className="teste3">
                                <ul className="collapsible popout" data-collapsible="accordion">

                                    <Collapse title="Informações Pessoais" desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Gênero: {info.user_genero}</p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Nacionalidade: {info.user_nacionalidade}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Naturalidade: {info.user_naturalidade}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Raça: {info.user_raca}</p>)}
                                        desc5={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Data de Nascimento: {info.data_nascimento} <em>({info.idade} Anos)</em></p>)}
                                        desc6={null} />

                                    <Collapse title="Informações do Endereço" desc1={this.state.colaborador.map(info => <p key={info.con_id}>Endereço: {info.end_rua}, n° {info.end_numero}, {info.end_bairro} </p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.con_id}>Estado: {info.end_estado}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.con_id}>CEP: {info.end_cep}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.con_id}>Região: {info.end_regiao}</p>)}
                                        desc5={this.state.colaborador.map(info => <p key={info.con_id}>Complemento: {info.end_complemento}</p>)}
                                        desc6={null} />


                                    <Collapse title="Dados Acadêmicos"
                                        desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Formação: {info.qua_formacao}</p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Instituição: {info.qua_nome_instituição}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Curso: {info.qua_curso}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Línguas: {info.qua_lingua}</p>)}
                                        desc5={null}
                                        desc6={null} />

                                    <Collapse title="Documentos Profissionais" desc1="Contribuição Sindical"
                                        desc2="Termo de PI"
                                        desc3="Cartão de PIS"
                                        desc4="Certificado de reservista"
                                        desc5="Atestado de Saúde Ocupacional"
                                        desc6="" />

                                    <Collapse title="Estado Civil"
                                        desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Estado Civil: {info.user_estado_civil}</p>)}
                                        desc2="Certidão de casamento"
                                        desc3="CPF do conjuge"
                                        desc4="RG do conjuge"
                                        desc5=""
                                        desc6="" />

                                    <Collapse title="Paternidade/Maternidade"
                                        desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}>Dependentes: {info.user_filho}</p>)}
                                        desc2="Certidão de nascimento"
                                        desc3="Certificado de vacinação"
                                        desc4="Comprovante de frequência escolar"
                                        desc5="Pensão alimentícia"
                                        desc6="" />

                                    <Collapse title="Informações do desligamento" desc1="Não houve desligamento" desc2="" desc3="" desc4="" desc5="" desc6="" />

                                </ul>
                            </div>
                        </div>

                        <div className="col s4">
                            <div className="teste3">
                                <h4>Benefícios</h4>
                                <form action="#">
                                    <p className="grid-check">
                                        <Check value="" name="Plano de Saúde" />

                                        <Check value="" name="Vale Transporte" />

                                        <Check value="" name="Vale Refeição" />

                                        <Check value="" name="Auxílio Creche" />
                                    </p>
                                </form>
                            </div>
                        </div>

                        <div className="col s4">
                            <div className="teste4">
                                <div className="botao-edicao">
                                    <p>
                                        <ButtonMat fname={""} class="waves-effect waves-light btn-large" name="Editar" iClass="fa-solid fa-user-pen" />
                                    </p>
                                    <p>
                                        <ButtonMat fname={""} class="waves-effect waves-light btn-large" name="Excluir" iClass="fa-solid fa-user-slash" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PerfilColab;