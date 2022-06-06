import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import { cnpj, cpf } from "cpf-cnpj-validator";

// LOCAL CSS
import './perfil.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat'
import ButtonSubLink from "../../components/button/buttonSubLink";
import Check from "../../components/input/check";
import CheckChecked from "../../components/input/checkChecked";
import General from "../../components/general";
import Collapse from "../../components/collapse";
import Css from "../../assets/style/style";
import React from "react";
import Cursos from "../../components/carouselCursos";
import Button from "../../components/button/buttonFun";
import perfil from "./profile.png"

class PerfilColab extends Component {
    state = {
        colaborador: [],
        historico: [],
        cargo: [],
        cursos: [],
        departamento: [],
        info_academica: [],
        head_colaborador: [],
        car_id: String,
        dep_id: String,
        id: getCookie("id")
    };

    componentDidMount() {
        let url = window.location.href.split("/")
        if (url[3] === "PerfilColaborador") {
            this.state.id = url[4]
        }

        axios.get(`http://localhost:5000/infocolab/getInfoById/${this.state.id}`)
            .then((res) => {
                console.log(res.data);
                const colaborador = res.data.user;
                const head_colaborador = res.data.head_user;
                const historico = res.data.historico
                let dep_id = res.data.user[0].departamento_dep_id
                let car_id = res.data.user[0].cargo_car_id

                axios.get(`http://localhost:5000/cargos/userCargo/${car_id}`).then((res) => {
                    console.log(res.data);
                    const cargo = res.data;
                    this.setState({ cargo });
                })

                axios.get(`http://localhost:5000/departamentos/userDep/${dep_id}`).then((res) => {
                    console.log(res.data);
                    const departamento = res.data;
                    this.setState({ departamento });
                }
                )

                console.log(dep_id);

                this.setState({ historico })
                this.setState({ colaborador });
                this.setState({ head_colaborador });
            }
            )

        axios.get(`http://localhost:5000/infoacademica/getInfoAcademica/${this.state.id}`).then((res) => {
            console.log(res.data);
            const info_academica = res.data;
            this.setState({ info_academica });
        }
        )
        axios.get(`http://localhost:5000/infocolab/getAllCurso/${this.state.id}`).then((res)=>{
            const cursos = res.data
            console.log(res.data);
            
            this.setState({cursos})
        })


    }

    render() {

        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                    <div className="row">
                        <div className="col s12 m12 l7">
                            <div className="teste1">
                                <div className="row" id="info">
                                    <div className="col s12 m12 l5 center-align ft">
                                        <div className="foto center-align">
                                            <img src={perfil}></img>
                                        </div>
                                    </div>

                                    <div className="col s12 m12 l7 center-align">
                                        {this.state.colaborador.map(info => <h5 key={info.col_id} className="name">{info.col_nome}</h5>)}
                                        <p>
                                            {this.state.colaborador.map(info => <p key={info.col_id}><label>CPF:</label> {cpf.format(info.col_cpf.toString())}</p>)}
                                            {this.state.historico.map(info =>
                                                <>
                                                    <p><label>Data de admissão:</label>{info.data_admissao}</p>
                                                    {info.hist_data_desligamento ? <p><label>Data de desligamento:</label>{info.hist_data_desligamento}</p> : null}
                                                </>
                                            )}
                                            {this.state.colaborador.map(info => <p key={info.col_id}><label>Tipo de Contratação:</label> {info.cont_descricao}</p>)}
                                            {this.state.colaborador.map(info => <p key={info.col_id}><label>E-mail:</label> {info.col_email}</p>)}
                                            {this.state.colaborador.map(info => <p key={info.col_id}><label>Tel:</label> ({info.col_ddd}) {info.col_telefone}</p>)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l5">
                            <div className="teste4">
                                <h4>Colaborador</h4>
                                <div className="botao-edicao center-align">
                                    <p>
                                        <ButtonSubLink id="" title="Editar" fname="" link="/EditarCadastro/:id" />
                                    </p>
                                    <p>ou</p>
                                    <p>
                                        <Button class="btn btn-primary" name="" type="" label="Inativar" iClass="fa-solid fa-user-large-slash" func="" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <div className="teste2">
                                <h4>Informações</h4>
                                <div className="teste2-info ">
                                    {this.state.departamento.map(info => <p key={info.col_id}><label>Departamento:</label> {info.dep_descricao}</p>)}
                                    {this.state.cargo.map(info => <p key={info.col_id}><label>Cargo:</label> {info.car_descricao}</p>)}

                                    {this.state.historico.map(info =>
                                        <>
                                            {info.hist_data_desligamento ? <p><label>Status:</label>Desligado</p> : <p><label>Status:</label>Ativo</p>}
                                        </>
                                    )}
                                    {this.state.head_colaborador.map(info => <p key={info.col_id}><label>Head:</label> {info.col_nome} - {info.car_descricao}</p>)}
                                    {this.state.cargo.map(info => <p key={info.col_id}><label>Salário:</label> R${info.car_salario}</p>)}
                                    {this.state.historico.map(info => <p key={info.col_id}><label>Tempo de Casa:</label> {info.tempo_casa} mês(es)</p>)}
                                </div>
                            </div>
                        </div>

                        <div className="col col s12 m12 l8">
                            <div className="teste3">
                                <ul className="collapsible popout" data-collapsible="accordion">

                                    <Collapse title="Informações Pessoais" desc1={this.state.colaborador.map(info => <p key={info.colaborador_col_id}><label>Gênero:</label> {info.col_genero}</p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.col_id}><label>Nacionalidade:</label> {info.col_nacionalidade}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.col_id}><label>Naturalidade:</label> {info.col_naturalidade}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.col_id}><label>Raça:</label> {info.col_raca}</p>)}
                                        desc5={this.state.colaborador.map(info => <p key={info.col_id}><label>Data de Nascimento:</label> {info.data_nascimento} <em>({info.idade} Anos)</em></p>)}
                                        desc6={null} />

                                    <Collapse title="Informações do Endereço" desc1={this.state.colaborador.map(info => <p key={info.col_id}><label>Endereço:</label> {info.col_end_rua}, n° {info.col_end_numero}, {info.col_end_bairro} </p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.col_id}><label>Estado:</label> {info.col_end_estado}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.col_id}><label>CEP:</label> {info.col_end_cep}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.col_id}><label>Região:</label> {info.col_end_regiao}</p>)}
                                        desc5={this.state.colaborador.map(info => <p key={info.col_id}><label>Complemento:</label> {info.col_end_complemento}</p>)}
                                        desc6={null} />


                                    <Collapse title="Dados Acadêmicos"
                                        desc1={this.state.info_academica.map(info => <p key={info.qua_id}><label>Formação:</label> {info.qua_formacao}</p>)}
                                        desc2={this.state.info_academica.map(info => <p key={info.qua_id}><label>Instituição:</label> {info.qua_nome_instituicao}</p>)}
                                        desc3={this.state.info_academica.map(info => <p key={info.qua_id}><label>Curso:</label> {info.qua_curso}</p>)}
                                        desc4={this.state.info_academica.map(info => <p key={info.qua_id}><label>Línguas:</label> {info.qua_lingua}</p>)}
                                        desc5={null}
                                        desc6={null} />

                                    <Collapse title="Documentos Pessoais" 
                                        desc1="RG"
                                        desc2="CPF"
                                        desc3="Carteira de Trabalho"
                                        desc4="Comprovante de Residência"
                                        desc5="Comprovante de Escolaridade"
                                        desc6="Certidão de Nascimento" />

                                    <Collapse title="Documentos Profissionais" desc1="Contribuição Sindical"
                                        desc2="Termo de PI"
                                        desc3="Cartão de PIS"
                                        desc4="Certificado de reservista"
                                        desc5="Atestado de Saúde Ocupacional"
                                        desc6="" />

                                    <Collapse title="Estado Civil"
                                        desc1={this.state.colaborador.map(info => <p key={info.col_id}><label>Estado Civil:</label> {info.col_estado_civil}</p>)}
                                        desc2="Certidão de casamento"
                                        desc3="CPF do conjuge"
                                        desc4="RG do conjuge"
                                        desc5=""
                                        desc6="" />

                                    <Collapse title="Paternidade/Maternidade"
                                        desc1={this.state.colaborador.map(info => <p key={info.col_id}><label>Dependentes:</label> {info.col_filho}</p>)}
                                        desc2="Certidão de nascimento"
                                        desc3="Certificado de vacinação"
                                        desc4="Comprovante de frequência escolar"
                                        desc5="Pensão alimentícia"
                                        desc6="" />
                                    {this.state.historico.map(info =>
                                        <>
                                            {info.hist_data_desligamento ? <Collapse title="Informações do desligamento" desc1={<p key={info.qua_id}><label>Descrição:</label> {info.his_desligamento_descricao}</p>}

                                                desc2={<p key={info.qua_id}><label>Distrato:</label> {info.his_distrato}</p>}
                                                desc3={<p key={info.qua_id}><label>Pesquisa de Desligamento:</label> {info.his_pesquisa_desligamento}</p>}
                                                desc4=""
                                                desc5=""
                                                desc6="" /> : null}
                                        </>

                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="col col s12 m12 l4">
                            <div className="teste3">
                                <h4>Benefícios</h4>
                                <form action="#">
                                    {this.state.colaborador.map(info =>
                                        <p key={info.colaborador_col_id} className="grid-check">
                                            {info.car_plano_saude ? <CheckChecked value="" name="Plano de Saúde" /> : <Check fname="" value="" name="Plano de Saúde" />}

                                            {info.car_vale_refeicao != 0 ? <CheckChecked value="" name="Vale Refeição" /> : <Check fname="" value="" name="Vale Refeição" />}

                                            {info.car_vale_transporte != 0 ? <CheckChecked value="" name="Vale Transporte" /> : <Check fname="" value="" name="Vale Transporte" />}

                                            {info.car_auxilio_creche != 0 ? <CheckChecked value="" name="Auxílio Creche" /> : <Check fname="" value="" name="Auxílio Creche" />}

                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>

                        


                        <div className="col col s12 m12 l8">
                            <div className="teste3">
                                <h4>Cursos</h4>
                                <div className="collection">
                                    <Cursos href="" name="JavaScript"/>
                                    <Cursos href="" name="Typescript"/>
                                    <Cursos href="" name="LGPD"/>
                                    <Cursos href="" name="GitHub"/>
                                </div>
                            </div>
                        </div>

                        <div className="col col s12 m12 l4">
                            <div className="teste3">
                                <h4>Cursos completados</h4>
                                <form action="#">
                                    {this.state.cursos.map(info =>
                                        <p className="grid-check">
                                            {info.trilha_status == 1?
                                            <CheckChecked key={info.trilha_curso_id} value="" name={info.trilha_curso_nome} />: <Check key={info.trilha_curso_id} fname="" value="" name={info.trilha_curso_nome} /> }

                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PerfilColab;