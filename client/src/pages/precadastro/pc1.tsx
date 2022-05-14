import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import axios from "axios";
import uploadFile from "../../utils/uploadFiles/uploadFile";

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
import InputFile from "../../components/input/file";
import InputAdd from "../../utils/inputAdd/inputAdd";

class PreCadastro1 extends Component {
    state = {
        // ARQUIVOS INSERIDOS
        arqInseridos: [],

        // INFORMAÇÕES
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
        linguas: String,

        // ANEXOS
        // DOCUMENTOS PESSOAIS
        rg: File,
        carteiraTrabalho: File,
        cpfFile: File,
        cnh: File,
        foto: File,
        tituloEleitor: File,
        comprovanteResidencia: File,
        comprovanteEscolaridade: File,

        // DOCUMENTOS PROFISSIONAIS
        ensinoFundamental: File,
        ensinoMedio: File,
        ensinoSuperior: File,
        contribuicaoSindical: File,
        termoPi: File,
        cartaoPis: File,
        certificadoReservista: File,
        atestadoOcupacional: File,

        // DOCUMENTOS DO CÔNJUGE SE CASADO
        certidaoCasamento: File,
        rgConjuge: File,
        cpfConjuge: File,

        // DOCUMENTOS DOS FILHOS SE FOR PAI/MÃE    
        cerNasc: File,
        cerVaci: File,
        comprovanteEscolarFilho: File,

        // DOCUMENTO SE FORNECER PENSAO
        pensaoAlimenticia: File
    }

    handleChangeFile = event => {
        this.setState({
            [event.target.name]: event.target.files[0],
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

        const anexos = {
            rg: this.state.rg,
            carteiraTrabalho: this.state.carteiraTrabalho,
            cpfFile: this.state.cpfFile,
            cnh: this.state.cnh,
            foto: this.state.foto,
            tituloEleitor: this.state.tituloEleitor,
            compResidencia: this.state.comprovanteResidencia,
            compEscolaridade: this.state.comprovanteEscolaridade,

            // DOCUMENTOS PROFISSIONAIS
            ensinoFundamental: this.state.ensinoFundamental,
            ensinoMedio: this.state.ensinoMedio,
            ensinoSuperior: this.state.ensinoSuperior,
            contribuicaoSindical: this.state.contribuicaoSindical,
            termoPi: this.state.termoPi,
            cartaoPis: this.state.cartaoPis,
            certificadoReservista: this.state.certificadoReservista,
            atestadoOcupacional: this.state.atestadoOcupacional,

            // DOCUMENTOS DO CÔNJUGE SE CASADO
            certidaoCasamento: this.state.certidaoCasamento,
            rgConjuge: this.state.rgConjuge,
            cpfConjuge: this.state.cpfConjuge,

            // DOCUMENTOS DOS FILHOS SE FOR PAI/MÃE    
            cerNasc: File,
            cerVaci: File,
            comprovanteEscolarFilho: File,

            // DOCUMENTO SE FORNECER PENSAO
            pensaoAlimenticia: File
        }

        const id = getCookie("id")

        // axios.put(`http://localhost:5000/precad1/updatecolaborador/${id}`, user); {

        // }
        // axios.post("http://localhost:5000/precad1/insertpessoafisica", pessoaFisica); {

        // }    
        //axios.post("http://localhost:5000/precad1/insertInfoAcademica",infoAcademica){

        //}

        Object.keys(anexos).map(anexo => {
            console.log(anexos[anexo]);
            console.log(anexo);
            if (anexos[anexo] != null || anexos[anexo] != undefined) {
                uploadFile(anexos[anexo], anexo)
            }
        })
    };

    render() {
        let tipoPessoa = getCookie("tipoPessoa")
        if (tipoPessoa == "Física" )
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
                                        <Input stateName="nome" fname={this.handleChange} div="input-field col s12" id="nome" class="validate" type="text" name="Nome Completo" />

                                        <InputAdd label="TESTE" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="cpf" fname={this.handleChange} div="input-field col col s12 m12 l7" id="cpf" class="validate" type="text" name="CPF" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="nacionalidade" fname={this.handleChange} div="input-field col col s12 m12 l7" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />
                                        <Input stateName="naturalidade" fname={this.handleChange} div="input-field col s12 m12 l5" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                    </div>

                                    <div className="row">

                                        <div className="input-field col s12 m12 l5">
                                            <select name="genero" className="browser-default" id="genero" onChange={this.handleChange}>
                                                <DisableOption disableValue="" disableNome="Gênero" />
                                                <Option value="Feminino" name="Feminino" />
                                                <Option value="Masculino" name="Masculino" />
                                                <Option value="Outro" name="Outro" />
                                            </select>
                                        </div>

                                        <div className="input-field col s12 m12 l7">
                                            <select name="raca" className="browser-default" id="raca" onChange={this.handleChange}>
                                                <DisableOption disableValue="" disableNome="Raça" />
                                                <Option value="Branco(a)" name="Branco(a)" />
                                                <Option value="Preto(a)" name="Preto(a)" />
                                                <Option value="Amarelo(a)" name="Amarelo(a)" />
                                                <Option value="Indígena" name="Indígena" />
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <Input stateName="data" fname={this.handleChange} div="input-field col s12 m12 l6" id="data" class="datepicker" type="date" name="Data de Nascimento" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="telefone" fname={this.handleChange} div="input-field col s12 m12 l6" id="icon_telephone" class="validate" type="tel" name="Telefone" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <Input stateName="rua" fname={this.handleChange} div="input-field col s12 m12 l9 bla" id="rua" class="validate" type="text" name="Rua" />
                                        <Input stateName="numero" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="numero" class="validate" type="number" name="Número" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="bairro" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="bairro" class="validate" type="text" name="Bairro" />
                                        <Input stateName="complemento" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="complemento" class="validate" type="number" name="Complemento" />
                                        <Input stateName="cep" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="cep" class="validate" type="number" name="CEP" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="cidade" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="cidade" class="validate" type="text" name="Cidade" />

                                        <div className="input-field col s12 m12 l3 bla">
                                            <select name="estado" className="browser-default" id="estado" onChange={this.handleChange}>
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
                                            <select name="regiao" className="browser-default" id="regiao" onChange={this.handleChange}>
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
                                    <select name="estadoCivil" className="browser-default" id="estadoCivil" onChange={this.handleChange}>
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
                                    <form name="filho" id="filho" onChange={this.handleChange}>
                                        <p>
                                            <Check value="sim" name="Sim" />
                                        </p>

                                        <p>
                                            <Check value="nao" name="Não" />
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

                                        <Input stateName="formacao" fname={this.handleChange} div="input-field col s12 m12 l5 bla" id="formacao" type="text" class="validate" name="Formação" />


                                        <Input stateName="cursos" fname={this.handleChange} div="input-field col s12 m12 l7 bla" id="cursos" type="text" class="validate" name="Cursos" />

                                    </div>

                                    <div className="row">
                                        <Input stateName="linguas" fname={this.handleChange} div="input-field col s12 bla" id="linguas" type="text" class="validate" name="Línguas" />
                                    </div>


                                </form>
                            </div>
                        </div>

                        <div className="collapsible-header">Documentos Pessoais</div>
                        <div className=" campo2">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>
                                    <div className="row">
                                        <label>RG</label>
                                        <input type="file" name="rg" onChange={this.handleChangeFile} />

                                        <label>Carteira de Trabalho</label>
                                        <input type="file" name="carteiraTrabalho" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>CPF</label>
                                        <input type="file" name="cpfFile" onChange={this.handleChangeFile} />

                                        <label>Carteira de Motorista</label>
                                        <input type="file" name="cnh" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Foto 3x4</label>
                                        <input type="file" name="foto" onChange={this.handleChangeFile} />

                                        <label>Título de Eleitor</label>
                                        <input type="file" name="tituloEleitor" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Comprovante de Residência</label>
                                        <input type="file" name="comprovanteResidencia" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Comprovante de Escolaridade</label>
                                        <input type="file" name="comprovanteEscolaridade" onChange={this.handleChangeFile} />
                                    </div>
                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Certificados</div>
                        <div className=" campo3">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>
                                    <div className="row">
                                        <label>Ensino Fundamental</label>
                                        <input type="file" name="ensinoFundamental" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Ensino Médio</label>
                                        <input type="file" name="ensinoMedio" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Ensino Superior</label>
                                        <input type="file" name="ensinoSuperior" onChange={this.handleChangeFile} />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="collapsible-header">Documentos Profissionais</div>
                        <div className="campo4">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>

                                    <div className="row">
                                        <label>Contribuição Sindical</label>
                                        <input type="file" name="contribuicao" onChange={this.handleChangeFile} />

                                        <label>Termo de PI</label>
                                        <input type="file" name="termo" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Cartão do PIS</label>
                                        <input type="file" name="pis" onChange={this.handleChangeFile} />

                                        <label>Certificado de Reservista</label>
                                        <input type="file" name="reservista" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Atestado de Saúde Ocupacional</label>
                                        <input type="file" name="atestadoSaude" onChange={this.handleChangeFile} />
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Estado Civil</div>
                        <div className=" campo5">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>

                                    <div className="row">
                                        <label>Certidao de Casamento</label>
                                        <input type="file" name="certidaoCasamento" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>RG do Cônjuge</label>
                                        <input type="file" name="rgConjuge" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>CPF do Cônjuge</label>
                                        <input type="file" name="cpfConjuge" onChange={this.handleChangeFile} />
                                    </div>
                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header">Filhos</div>
                        <div className="campo6">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>

                                    <div className="row">
                                        <label>Certidão de Nascimento</label>
                                        <input type="file" name="certidaoNascFilho" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Certidão de Vacinação</label>
                                        <input type="file" name="certidaoVacFilho" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Comprovante de Frequência Escolar</label>
                                        <input type="file" name="comproEscolar" onChange={this.handleChangeFile} />
                                    </div>

                                    <div className="row">
                                        <label>Pensão Alimentícia</label>
                                        <input type="file" name="pensao" onChange={this.handleChangeFile} />
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