import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";


// LOCAL CSS
import './pc1.css'

// FUNCTIONS
import { getCookie, setCookie, deleteCookie } from "../../utils/cookieUtil/cookieUtil";
import uploadFile from "../../utils/uploadFiles/uploadFile";
import validarCpf from "../../utils/validacaoDoc/cpf"
import validarCnpj from "../../utils/validacaoDoc/cnpj"

// COMPONENTS
import General from "../../components/general";
import Input from "../../components/input/input";
import PessoaJuridicaForm from "../../components/preCadPessoaForm/pessoaJurídica";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";
import InputValue from "../../components/input/inputValue";
import InputOnFocus from "../../components/input/inputOnFocus";

class PreCadastro1 extends Component {
    state = {
        // ARQUIVOS INSERIDOS
        arqInseridos: [],

        // INFORMAÇÕES
        nome: String,
        novaSenha: String,
        cpf: Number,
        nacionalidade: String,
        naturalidade: String,
        raca: String,
        genero: String,
        data: Date,
        idade: Number,
        ddd: Number,
        telefone: Number,
        rua: "",
        numero: Number,
        bairro: "",
        complemento: "",
        cep: Number,
        cidade: "",
        estado: "",
        regiao: String,
        estadoCivil: String,
        filho: String,

        // INFO ACADEMICAS
        formacao: String,
        cursos: String,
        linguas: String,
        instituicao: String,

        // INFORMAÇÕES SE PESSOA JURÍDICA
        nomeEmpresa: String,
        cnpj: Number,
        naturezajuridica: String,
        dataFundacao: Date,
        tempoFormalizacao: Number,

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
        pensaoAlimenticia: File,

        fomularioEnviado: false
    }

    cnpjVerify = event => {
        let cnpj = validarCnpj(event.target.value)
        console.log(cnpj);
        if (cnpj != false) {
            this.setState({
                [event.target.name]: event.target.value,
            });
            M.toast({ html: "CNPJ INVÁLIDO", classes: "red darken-4 rounded"})
            console.log(this.state);
        };
    }

    cpfVerify = event => {
        let cpf = validarCpf(event.target.value)
        console.log(cpf);
        if (cpf != false) {
            this.setState({
                [event.target.name]: event.target.value,
            });

            console.log(this.state);
        } else {
            M.toast({ html: "CPF INVÁLIDO!", classes: "red darken-4 rounded" })

        }
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

    handleChangeSelect = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        
        if (event.target.value == "Casado(a)") {
            document.getElementById("casadoLabel").style.display = "block"
            document.getElementById("casadoBody").style.display = "block"
        }
        else {
            document.getElementById("casadoLabel").style.display = "none"
            document.getElementById("casadoBody").style.display = "none"
        }

        if (event.target.value == "Masculino") {
            document.getElementById("homemLabel").style.display = "block"
            document.getElementById("homemBody").style.display = "block"
        }
        else {
            document.getElementById("homemLabel").style.display = "none"
            document.getElementById("homemBody").style.display = "none"
        }

        if (event.target.value == "sim") {
            document.getElementById("filhosLabel").style.display = "block"
            document.getElementById("filhosBody").style.display = "block"
        }
        else {
            document.getElementById("filhosLabel").style.display = "none"
            document.getElementById("filhosBody").style.display = "none"
        }
    };

    buscarCep = () => {
        axios.get(`http://localhost:5000/consultarCEP/${this.state.cep}`).then(res => {
            console.log(res.data);
            const rua = res.data.logradouro
            const bairro = res.data.bairro
            const cidade = res.data.localidade
            const estado = res.data.uf

            this.setState({ rua })
            this.setState({ bairro })
            this.setState({ cidade })
            this.setState({ estado })
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            nome: this.state.nome,
            novaSenha: this.state.novaSenha,
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
            id: getCookie("id"),
        }

        const pessoaFisica = {
            cpf: this.state.cpf,
            nacionalidade: this.state.nacionalidade,
            naturalidade: this.state.naturalidade,
            raca: this.state.raca,
            genero: this.state.genero,
            data: this.state.data,
            estadoCivil: this.state.estadoCivil,
            filho: this.state.filho,
            id: getCookie("id"),
        }

        const infoAcademica = {
            formacao: this.state.formacao,
            cursos: this.state.cursos,
            linguas: this.state.linguas,
            instituicao: this.state.instituicao,
            id: getCookie("id")
        }

        if (getCookie("tipoPessoa") == "Juridica") {
            const pessoaJuridica = {
                nomeEmpresa: this.state.nomeEmpresa,
                cnpj: this.state.cnpj,
                naturezajuridica: this.state.naturezajuridica,
                dataFundacao: this.state.dataFundacao,
                tempoFormalizacao: this.state.tempoFormalizacao,
                id: getCookie("id")
            }

            axios.post("http://localhost:5000/precad1/insertpessoajuridica", pessoaJuridica); {
            }
        }

        const anexos = {
            rg: this.state.rg,
            carteiraTrabalho: this.state.carteiraTrabalho,
            cpfFile: this.state.cpfFile,
            cnh: this.state.cnh,
            foto: this.state.foto,
            tituloEleitor: this.state.tituloEleitor,
            comprovanteResidencia: this.state.comprovanteResidencia,
            comprovanteEscolaridade: this.state.comprovanteEscolaridade,

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

        axios.put(`http://localhost:5000/precad1/updatecolaborador/${id}`, user); {

        }

        axios.post("http://localhost:5000/precad1/insertpessoafisica", pessoaFisica).then((res) => {

        })

        axios.post("http://localhost:5000/precad1/insertInfoAcademica", infoAcademica).then((res) => {

        })

        this.setState({
            formularioEnviado: true
        })
        deleteCookie("firstAcess")
        setCookie("aguardoConfirmacao", true)

        uploadFile(anexos)
        //alert('Cadastro Enviado.\nAguarde seu cadastro e aguarde ser aprovado.')
        //window.close()
        //window.open("/home")
    };

    redirect = () => {
        if (this.state.fomularioEnviado == true) {
            alert('Cadastro Enviado.\nAguarde seu cadastro e aguarde ser aprovado.')
            return <Navigate to="/home" />
        }
        else {
            return (null)
        }
    }

    render() {
        let form
        if (getCookie("tipoPessoa") == "Juridica") {
            form = <PessoaJuridicaForm fname={this.handleChange} focus={this.cnpjVerify} />
        }
        return (
            <>
                <this.redirect />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
                <script src="https://kit.fontawesome.com/4d3a0277e3.js" />

                <General />

                <Css ref="./pc1" />

                <div className="conteudo">
                    <div className="row">
                        <div className="collapsible-header"><h6>Formulário</h6></div>
                        <div className="campo1">
                            <div className="row">
                                {form}
                                <h5 className="titulo">Dados Pessoais</h5>
                                <form className="col s12">

                                    <div className="row">
                                        <Input stateName="nome" fname={this.handleChange} div="input-field col s12" id="nome" class="validate" type="text" name="Nome Completo" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="novaSenha" fname={this.handleChange} div="input-field col s12" id="novaSenha" class="validate" type="password" name="Nova Senha" />
                                    </div>

                                    <div className="row">
                                        <InputOnFocus focus={this.cpfVerify} stateName="cpf" div="input-field col col s12 m12 l7" id="cpf" class="validate" type="text" name="CPF" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="nacionalidade" fname={this.handleChange} div="input-field col col s12 m12 l7" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />
                                        <Input stateName="naturalidade" fname={this.handleChange} div="input-field col s12 m12 l5" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12 m12 l5">
                                            <select name="genero" className="browser-default" id="genero" onChange={this.handleChangeSelect}>
                                                <DisableOption disableValue="" disableNome="Gênero" />
                                                <Option function="" value="Feminino" name="Feminino" />
                                                <Option function="" value="Masculino" name="Masculino" />
                                                <Option function="" value="Outro" name="Outro" />
                                            </select>
                                        </div>

                                        <div className="input-field col s12 m12 l7">
                                            <select name="raca" className="browser-default" id="raca" onChange={this.handleChange}>
                                                <DisableOption disableValue="" disableNome="Raça" />
                                                <Option function="" value="Branco(a)" name="Branco(a)" />
                                                <Option function="" value="Pardo(a)" name="Pardo(a)" />
                                                <Option function="" value="Preto(a)" name="Preto(a)" />
                                                <Option function="" value="Amarelo(a)" name="Amarelo(a)" />
                                                <Option function="" value="Indígena" name="Indígena" />
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <Input stateName="data" fname={this.handleChange} div="input-field col s12 m12 l6" id="data" class="datepicker" type="date" name="Data de Nascimento" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="ddd" fname={this.handleChange} div="input-field col s12 m12 l6" id="icol_telephone" class="validate" type="tel" name="DDD" />
                                        <Input stateName="telefone" fname={this.handleChange} div="input-field col s12 m12 l6" id="icol_telephone" class="validate" type="tel" name="Telefone" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">
                                        <InputValue value={this.state.rua} ph="" stateName="rua" fname={this.handleChange} div="input-field col s12 m12 l9 bla" id="rua" class="validate" type="text" name="Rua" />
                                        <Input stateName="numero" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="numero" class="validate" type="number" name="Número" />
                                    </div>

                                    <div className="row">
                                        <InputValue value={this.state.bairro} stateName="bairro" ph="" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="bairro" class="validate" type="text" name="Bairro" />
                                        <Input stateName="complemento" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="complemento" class="validate" type="number" name="Complemento" />
                                        <Input stateName="cep" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="cep" class="validate" type="number" name="CEP" />
                                    </div>

                                    <div className="row">
                                        <InputValue value={this.state.cidade} ph="" stateName="cidade" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="cidade" class="validate" type="text" name="Cidade" />

                                       
                                        <InputValue value={this.state.estado} ph="Estado" stateName="estado" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="estado" class="validate" type="text" name="" />

                                        {/*<div className="input-field col s12 m12 l3 bla">
                                            <select name="regiao" className="browser-default" id="regiao" onChange={this.handleChange}>
                                                <DisableOption disableValue="" disableNome="Região" />
                                                <Option value="Norte" name="Norte" />
                                                <Option value="Nordeste" name="Nordeste" />
                                                <Option value="Centro-Oeste" name="Centro-Oeste" />
                                                <Option value="Sudeste" name="Sudeste" />
                                                <Option value="Sul" name="Sul" />
                                            </select>
                                        </div>*/}

                                        <ButtonMat fname={this.buscarCep} class="waves-effect waves-light btn center-align" name="Buscar! " iClass="fa-solid fa-arrow-right-long" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <label>Estado Civil</label>
                                    <select name="estadoCivil" className="browser-default" id="estadoCivil" onChange={this.handleChangeSelect}>
                                        <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                        <Option function="" value="Solteiro(a)" name="Solteiro(a)" />
                                        <Option function="" value="Casado(a)" name="Casado(a)" />
                                        <Option function="" value="Divorciado(a)" name="Divorciado(a)" />
                                        <Option function="" value="Viúvo(a)" name="Viúvo(a)" />
                                    </select>

                                </form>
                            </div>
                        </div>

                        <div className="campo1">
                            <div className="row">
                                <form className="col s12">

                                    <label id="radioLabel">Possui filhos?</label>
                                    <form name="filho" id="filho" onChange={this.handleChangeSelect}>
                                        <p>
                                            <label>
                                                <input name="filho" value="sim" type="radio" />
                                                <span>Sim</span>
                                            </label>
                                        </p>

                                        <p>
                                            <label>
                                                <input name="filho" value="nao" type="radio" />
                                                <span>Não</span>
                                            </label>
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

                                    <div className="row">
                                        <Input stateName="instituicao" fname={this.handleChange} div="input-field col s12 bla" id="instituicao" type="text" class="validate" name="Instituição" />
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="collapsible-header"><h6>Documentos Pessoais</h6></div>
                        <div className=" campo2">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>
                                    <div className="row">
                                        <div className="file">
                                            <label>RG</label>
                                            <input type="file" name="rg" onChange={this.handleChangeFile} />
                                            <label>Carteira de Trabalho</label>
                                            <input type="file" name="carteiraTrabalho" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>CPF</label>
                                            <input type="file" name="cpfFile" onChange={this.handleChangeFile} />
                                            <label>Carteira de Motorista</label>
                                            <input type="file" name="cnh" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Foto 3x4</label>
                                            <input type="file" name="foto" onChange={this.handleChangeFile} />
                                            <label>Título de Eleitor</label>
                                            <input type="file" name="tituloEleitor" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Comprovante de Residência</label>
                                            <input type="file" name="comprovanteResidencia" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Comprovante de Escolaridade</label>
                                            <input type="file" name="comprovanteEscolaridade" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header"><h6>Certificados</h6></div>
                        <div className=" campo3">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>
                                    <div className="row">
                                        <div className="file">
                                            <label>Ensino Fundamental</label>
                                            <input type="file" name="ensinoFundamental" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Ensino Médio</label>
                                            <input type="file" name="ensinoMedio" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Ensino Superior</label>
                                            <input type="file" name="ensinoSuperior" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="collapsible-header"><h6>Documentos Profissionais</h6></div>
                        <div className="campo4">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>

                                    <div className="row">
                                        <div className="file">
                                            <label>Contribuição Sindical</label>
                                            <input type="file" name="contribuicao" onChange={this.handleChangeFile} />


                                            <label>Termo de PI</label>
                                            <input type="file" name="termo" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Cartão do PIS</label>
                                            <input type="file" name="pis" onChange={this.handleChangeFile} />
                                            <label id="homemLabel">Certificado de Reservista</label>
                                            <input id="homemBody" type="file" name="reservista" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Atestado de Saúde Ocupacional</label>
                                            <input type="file" name="atestadoSaude" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className="collapsible-header" id="casadoLabel"><h6>Estado Civil</h6></div>
                        <div className=" campo5" id="casadoBody">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>

                                    <div className="row">
                                        <div className="file">
                                            <label>Certidao de Casamento</label>
                                            <input type="file" name="certidaoCasamento" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>RG do Cônjuge</label>
                                            <input type="file" name="rgConjuge" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>CPF do Cônjuge</label>
                                            <input type="file" name="cpfConjuge" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="collapsible-header" id="filhosLabel"><h6>Filhos</h6></div>
                        <div className="campo6" id="filhosBody">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>

                                    <div className="row">
                                        <div className="file">
                                            <label>Certidão de Nascimento</label>
                                            <input type="file" name="certidaoNascFilho" onChange={this.handleChangeFile} />
                                        </div>

                                        <div className="row">
                                            <div className="file" id="vac">
                                                <label>Certidão de Vacinação</label>
                                                <input type="file" name="certidaoVacFilho" onChange={this.handleChangeFile} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Comprovante de Frequência Escolar</label>
                                            <input type="file" name="comproEscolar" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Pensão Alimentícia</label>
                                            <input type="file" name="pensao" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="Buttom">
                            <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn center-align" name="Finalizar!" iClass="fa-solid fa-arrow-right-long"></ButtonMat>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default PreCadastro1;