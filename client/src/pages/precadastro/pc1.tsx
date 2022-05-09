import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import axios from "axios";

// LOCAL CSS
import './pc1.css'

// COMPONENTS
import General from "../../components/general";
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";


class PreCadastro1 extends Component {
    state = {
        nome: String,
        cpf: Number,
        nacionalidade: String,
        naturalidade: String,
        raca: String,
        genero: String,
        data: Date,
        idade: Number,
        ddd: Number,
        telefone: Number,
        rua: String,
        numero: Number,
        bairro: String,
        complemento: Number,
        cep: Number,
        cidade: String,
        estado: String,
        regiao: String,
        estadoCivil: String,
        filho: String,
        tipoContratacao: String,
        formacao: String,
        cursos: String,
        linguas: String
    }

    handleChangeNome = event => {
        this.setState({
            nome: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeCPF = event => {
        this.setState({
            cpf: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeNaturalidade = event => {
        this.setState({
            naturalidade: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeNacionalidade = event => {
        this.setState({
            nacionalidade: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeRaca = event => {
        this.setState({
            raca: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeGenero = event => {
        this.setState({
            genero: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeData = event => {
        this.setState({
            data: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeIdade = event => {
        this.setState({
            idade: event.target.value,
        });
        console.log(this.state);
    };


    handleChangeDDD = event => {
        this.setState({
            ddd: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeTelefone = event => {
        this.setState({
            telefone: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeRua = event => {
        this.setState({
            rua: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeNumero = event => {
        this.setState({
            numero: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeBairro = event => {
        this.setState({
            bairro: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeComplemento = event => {
        this.setState({
            complemento: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeCEP = event => {
        this.setState({
            cep: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeCidade = event => {
        this.setState({
            cidade: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeEstado = event => {
        this.setState({
            estado: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeRegiao = event => {
        this.setState({
            regiao: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeEstadoCivil = event => {
        this.setState({
            estadoCivil: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeFilho = event => {
        this.setState({
            filho: event.target.value,
        });
        console.log(this.state);
    };

    handleChangeTipoContratacao = event => {
        this.setState({
            tipoContratacao: event.target.value,
        });
        console.log(this.state);
    };

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



    handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            nome: this.state.nome,
            ddd: this.state.ddd,
            telefone: this.state.telefone,
            rua: this.state.rua,
            numero: this.state.numero,
            bairro: this.state.bairro,
            complemento: this.state.complemento,
            cep: this.state.cep,
            cidade: this.state.cidade,
            estado: this.state.estado,
            regiao: this.state.regiao,
            tipoContratacao: this.state.tipoContratacao,
            id: getCookie("id"),
        }

        const pessoaFisica = {
            cpf: this.state.cpf,
            nacionalidade: this.state.nacionalidade,
            naturalidade: this.state.naturalidade,
            raca: this.state.raca,
            genero: this.state.genero,
            data: this.state.data,
            idade: this.state.idade,
            estadoCivil: this.state.estadoCivil,
            filho: this.state.filho,
            id: getCookie("id"),
        }

        const infoAcademica = {
            formacao: this.state.formacao,
            cursos: this.state.cursos,
            linguas: this.state.linguas,
            id: getCookie("id")
        }
        const id = getCookie("id")

        axios.put(`http://localhost:5000/precad1/updatecolaborador/${user.id}`, user); {
            alert("data foi")
        }

        axios.post("http://localhost:5000/precad1/insertpessoafisica", pessoaFisica); {
            alert("data foi")
        }
    };


    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
                <script src="https://kit.fontawesome.com/4d3a0277e3.js" />

                <General />

                <Css ref="./pc1" />

                <div className="conteudo">
                    <div className="row">
                    <div className="collapsible-header">Formulário</div>
                        <div className="campo1">
                            <div className="row">
                                <h5 className="titulo">Dados Pessoais</h5>
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeNome} div="input-field col s12" id="nome" class="validate" type="text" name="Nome Completo" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeCPF} div="input-field col col s12 m12 l7" id="cpf" class="validate" type="text" name="CPF" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col col s12 m12 l7" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l5" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                    </div>

                                    <div className="row">

                                        <div className="input-field col s12 m12 l5">
                                            <select className="browser-default" id="genero" onChange={this.handleChangeGenero}>
                                                <DisableOption disableValue="" disableNome="Gênero" />
                                                <Option value="Feminino" name="Feminino" />
                                                <Option value="Masculino" name="Masculino" />
                                                <Option value="Outro" name="Outro" />
                                            </select>
                                        </div>

                                        <div className="input-field col s12 m12 l7">
                                            <select className="browser-default" id="raca" onChange={this.handleChangeRaca}>
                                                <DisableOption disableValue="" disableNome="Raça" />
                                                <Option value="Branco(a)" name="Branco(a)" />
                                                <Option value="Preto(a)" name="Preto(a)" />
                                                <Option value="Amarelo(a)" name="Amarelo(a)" />
                                                <Option value="Indígena" name="Indígena" />
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeData} div="input-field col s12 m12 l6" id="data" class="datepicker" type="date" name="Data de Nascimento" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeTelefone} div="input-field col s12 m12 l6" id="icon_telephone" class="validate" type="tel" name="Telefone" />
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeRua} div="input-field col s12 m12 l9 bla" id="rua" class="validate" type="text" name="Rua" />
                                        <Input fname={this.handleChangeNumero} div="input-field col s12 m12 l3 bla" id="numero" class="validate" type="number" name="Número" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeBairro} div="input-field col s12 m12 l6 bla" id="bairro" class="validate" type="text" name="Bairro" />
                                        <Input fname={this.handleChangeComplemento} div="input-field col s12 m12 l3 bla" id="complemento" class="validate" type="number" name="Complemento" />
                                        <Input fname={this.handleChangeCEP} div="input-field col s12 m12 l3 bla" id="cep" class="validate" type="number" name="CEP" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeCidade} div="input-field col s12 m12 l6 bla" id="cidade" class="validate" type="text" name="Cidade" />

                                        <div className="input-field col s12 m12 l3 bla">
                                            <select className="browser-default" id="estado" onChange={this.handleChangeEstado}>
                                                <DisableOption disableValue="" disableNome="Estado" />
                                                <Option value="Acre" name="AC" />
                                                <Option value="Alagoas" name="AL" />
                                                <Option value="Amapá" name="AP" />
                                                <Option value="Amazonas" name="AM" />
                                                <Option value="Bahia" name="BA" />
                                                <Option value="Ceará" name="CE" />
                                                <Option value="Distrito Federal" name="DF" />
                                                <Option value="Espírito Santo" name="ES" />
                                                <Option value="Goiás" name="GO" />
                                                <Option value="Maranhão" name="MA" />
                                                <Option value="Minas Gerais" name="MG" />
                                                <Option value="Mato Grosso do Sul" name="MS" />
                                                <Option value="Mato Grosso" name="MT" />
                                                <Option value="Pará" name="PA" />
                                                <Option value="Pernambuco" name="PB" />
                                                <Option value="Pernambuco" name="PE" />
                                                <Option value="Piauí" name="PI" />
                                                <Option value="Paraná" name="PR" />
                                                <Option value="Rio de Janeiro" name="RJ" />
                                                <Option value="Rio Grande do Norte" name="RN" />
                                                <Option value="Rondônia" name="RO" />
                                                <Option value="Rio Grande do Sul" name="RS" />
                                                <Option value="Roraima" name="RR" />
                                                <Option value="Santa Catarina" name="SC" />
                                                <Option value="Sergipe" name="SE" />
                                                <Option value="São Paulo" name="SP" />
                                                <Option value="Tocantins" name="TO" />
                                            </select>
                                        </div>

                                        <div className="input-field col s12 m12 l3 bla">
                                            <select className="browser-default" id="regiao" onChange={this.handleChangeRegiao}>
                                                <DisableOption disableValue="" disableNome="Região" />
                                                <Option value="Norte" name="Norte" />
                                                <Option value="Nordeste" name="Nordeste" />
                                                <Option value="Centro-Oeste" name="Centro-Oeste" />
                                                <Option value="Sudeste" name="Sudeste" />
                                                <Option value="Sul" name="Sul" />
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <label>Estado Civil</label>
                                    <select className="browser-default" id="estadoCivil" onChange={this.handleChangeEstadoCivil}>
                                        <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                        <Option value="Solteiro(a)" name="Solteiro(a)" />
                                        <Option value="Casado(a)" name="Casado(a)" />
                                        <Option value="Divorciado(a)" name="Divorciado(a)" />
                                        <Option value="Viúvo(a)" name="Viúvo(a)" />
                                    </select>

                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <label>Possui filhos?</label>
                                    <form action="#" id="filho" onChange={this.handleChangeFilho}>
                                        <p>
                                            <Check value="si" name="Sim" />
                                        </p>

                                        <p>
                                            <Check value="no" name="Não" />
                                        </p>
                                    </form>
                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">
                                    <h5 className="titulo">Dados Acadêmicos</h5>
                                    <div className="row">
                                        <Input fname={this.handleChangeFormacao} div="input-field col s12 m12 l5 bla" id="formacao" type="text" class="validate" name="Formação" />

                                        <Input fname={this.handleChangeCursos} div="input-field col s12 m12 l7 bla" id="cursos" type="text" class="validate" name="Cursos" />


                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeLinguas} div="input-field col s12 bla" id="linguas" type="text" class="validate" name="Línguas" />
                                    </div>


                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Documentos Pessoais</div>
                        <div className=" campo2">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l5" id="rg" class="validate" type="text" name="RG" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l7" id="carteiradetrabalho" class="validate" type="text" name="Carteira de Trabalho" />

                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l5" id="cpf" class="validate" type="text" name="CPF" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l7" id="cnh" class="validate" type="text" name="CNH" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l5" id="foto" class="validate" type="text" name="Foto(3x4)" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l7" id="titulodeeleitor" class="validate" type="text" name="Título de Eleitor" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l5" id="comprovantederesidencia" class="validate" type="text" name="Comprovante de Residência" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l7" id="copiadocartao" class="validate" type="text" name="Copia do Cartão do Banco" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12" id="Comprovante de Escolaridade" class="validate" type="text" name="Comprovante de Escolaridade" />
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">certificados</div>
                        <div className=" campo3">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12" id="ensinofundamental" class="validate" type="text" name="Ensino Fundamental" />

                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12" id="ensinomedio" class="validate" type="text" name="Ensino Médio" />

                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12" id="ensinosuperior" class="validate" type="text" name="Ensino Superior" />
                                    </div>




                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Documentos Profissionais</div>
                        <div className="campo4">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l5" id="comtrubuicao" class="validate" type="text" name="Contribução Sindical" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l7" id="termo" class="validate" type="text" name="Termo de PI" />

                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l5" id="pis" class="validate" type="text" name="Cartão do PIS" />
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12 m12 l7" id="reservista" class="validate" type="text" name="Certificado de Reservista" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12 m12 l6" id="atestadosaude" class="validate" type="text" name="Atestado de Saúde Ocupacional" />
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Estado Civil</div>
                        <div className=" campo5">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12" id="certidaocasamento" class="validate" type="text" name="Certidão de Casamento" />

                                    </div>

                                    <div className="row">

                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12" id="rgconjuge" class="validate" type="text" name="RG do Conjuge" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12" id="cpfconjuge" class="validate" type="text" name="CPF do Conjuge" />
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Filhos</div>
                        <div className="campo6">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12" id="certidaonascfilho" class="validate" type="text" name="Certidão de Nascimento" />

                                    </div>

                                    <div className="row">

                                        <Input fname={this.handleChangeNaturalidade} div="input-field col s12" id="vacinacao" class="validate" type="text" name="Certidao de Vacinação" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12" id="comproescolar" class="validate" type="text" name="Comprovante de Frequência Escolar" />
                                    </div>

                                    <div className="row">
                                        <Input fname={this.handleChangeNacionalidade} div="input-field col s12" id="pensao" class="validate" type="text" name="Pensão Alimentícia" />
                                    </div>

                                </form>
                            </div>
                        </div>



                        <Link to="/PreCad2"><ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn center-align" name="Finalizar!" iClass="fa-solid fa-arrow-right-long" /></Link>
                    </div>
                </div>



            </>
        )
    }
}
export default PreCadastro1;