import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";
import swal from "sweetalert";

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
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";
import InputValueDisabled from "../../components/input/inputValueDisabled";
import InputOnFocus from "../../components/input/inputOnFocus";
import Check from "../../components/input/check";

class PreCadastro1 extends Component {
   private edicao: boolean = false;
   
    state = {
        // ARQUIVOS INSERIDOS
        arqInseridos: [],
        colaborador: [],
        // INFORMAÇÕES
        nome: "",
        novaSenha: "",
        cpf: "",
        rg: "",
        nacionalidade: "",
        naturalidade: "",
        raca: "",
        genero: "",
        data: new Date(),
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
        regiao: "",
        estadoCivil: "",
        filho: "",

        // INFO ACADEMICAS
        formacao: "",
        cursos: "",
        linguas: "",
        instituicao: "",

        // INFORMAÇÕES SE PESSOA JURÍDICA
        nomeEmpresa: "",
        cnpj: "",
        naturezajuridica: "",
        dataFundacao: Date,
        tempoFormalizacao: Number,

        // ANEXOS
        // DOCUMENTOS PESSOAIS
        rgDoc: File,
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

        // DOCUMENTO DIVÓRCIO SE DIVORCIADO
        divorcioDoc: File,

        // DOCUMENTOS DOS FILHOS SE FOR PAI/MÃE    
        cerNasc: File,
        cerVaci: File,
        comprovanteEscolarFilho: File,

        // DOCUMENTO SE FORNECER PENSAO
        pensaoAlimenticia: File,

        fomularioEnviado: false,
        id: getCookie("id")
    };

    componentDidMount() {
        let url = window.location.href.split("/")
        if (url[3] === "EditarCadastro") { 
            this.state.id = url[4]
            this.edicao = true;
        }
        else{
            this.state.id = getCookie("id")
        }

        axios.get(`http://localhost:5000/infocolab/getInfoById/${this.state.id}`)
            .then((res) => {
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
                this.state.nome = this.state.colaborador[0].col_nome;
                this.state.novaSenha = this.state.colaborador[0].col_senha;
                this.state.cpf = this.state.colaborador[0].col_cpf;
                this.state.rg = this.state.colaborador[0].col_rg;
                this.state.nacionalidade = this.state.colaborador[0].col_nacionalidade;
                this.state.naturalidade = this.state.colaborador[0].col_naturalidade;
                this.state.raca = this.state.colaborador[0].col_raca;
                this.state.genero = this.state.colaborador[0].col_genero;
                
                this.state.data = new Date(this.state.colaborador[0].col_data_nascimento);
                this.state.ddd = this.state.colaborador[0].col_ddd;
                this.state.telefone = this.state.colaborador[0].col_telefone;
                this.state.rua = this.state.colaborador[0].col_end_rua;
                this.state.numero = this.state.colaborador[0].col_end_numero;
                this.state.bairro = this.state.colaborador[0].col_end_bairro;
                this.state.complemento = this.state.colaborador[0].col_end_complemento;
                this.state.cep = this.state.colaborador[0].col_end_cep;
                this.state.cidade = this.state.colaborador[0].col_end_cidade;
                this.state.estado = this.state.colaborador[0].col_end_estado;
                this.state.regiao = this.state.colaborador[0].col_end_regiao;
                this.state.estadoCivil = this.state.colaborador[0].col_estado_civil;
                this.state.filho = this.state.colaborador[0].col_filho;
                // this.state.
                




            }
        )
        
        axios.get(`http://localhost:5000/infoacademica/getInfoAcademica/${this.state.id}`).then((res) => {
            console.log(res.data);
            const info_academica = res.data;
            this.setState({ info_academica });
            this.state.linguas = info_academica[0].qua_lingua;
            this.state.formacao = info_academica[0].qua_formacao;
            this.state.cursos = info_academica[0].qua_curso;
            this.state.instituicao = info_academica[0].qua_nome_instituicao;
            this.state.formacao = info_academica[0].qua_formacao;


        }
        )

     
    }

    cnpjVerify = event => {
        let cnpj = validarCnpj(event.target.value)
        console.log(cnpj);
        if (cnpj != false) {
            this.setState({
                [event.target.name]: event.target.value,
            });
        } else {
            M.toast({ html: "CNPJ INVÁLIDO!", classes: "red darken-4 rounded" })
            console.log(this.state);
        }
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

    handleChangeSelectFilho = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);

        if (event.target.value == "sim") {
            document.getElementById("filhosLabel").style.display = "block";
            document.getElementById("filhosBody").style.display = "block";
        }
        else {
            document.getElementById("filhosLabel").style.display = "none";
            document.getElementById("filhosBody").style.display = "none";
        }
    }

    handleChangeSelectHomem = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);

        if (event.target.value == "Masculino") {
            document.getElementById("homemLabel").style.display = "block";
            document.getElementById("homemBody").style.display = "block";
        }
        else {
            document.getElementById("homemLabel").style.display = "none";
            document.getElementById("homemBody").style.display = "none";
        }
    }

    handleChangeSelectTermos = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);

        if (event.target.value == "aceito") {
            document.getElementById("termosUsoCheck").style.display = "block";
            document.getElementById("termosUsoNoCheck").style.display = "none";
        }
    };

    handleChangeSelect = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);

        if (event.target.value == "Casado(a)") {
            document.getElementById("casadoLabel").style.display = "block";
            document.getElementById("casadoBody").style.display = "block";
        }
        else {
            document.getElementById("casadoLabel").style.display = "none";
            document.getElementById("casadoBody").style.display = "none";
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
            tipoPessoa: getCookie("tipoPessoa"),
            cpf: this.state.cpf,
            rg: this.state.rg,
            nacionalidade: this.state.nacionalidade,
            naturalidade: this.state.naturalidade,
            raca: this.state.raca,
            genero: this.state.genero,
            data: this.state.data,
            estadoCivil: this.state.estadoCivil,
            filho: this.state.filho,
            id: this.state.id
        }


        const infoAcademica = {
            formacao: this.state.formacao,
            cursos: this.state.cursos,
            linguas: this.state.linguas,
            instituicao: this.state.instituicao,
            id: this.state.id
        }

        if (getCookie("tipoPessoa") == "Juridica") {
            const pessoaJuridica = {
                nomeEmpresa: this.state.nomeEmpresa,
                cnpj: this.state.cnpj,
                naturezajuridica: this.state.naturezajuridica,
                dataFundacao: this.state.dataFundacao,
                tempoFormalizacao: this.state.tempoFormalizacao,
                id: this.state.id
            }

            if(!this.edicao){
                axios.post("http://localhost:5000/precad1/insertpessoajuridica", pessoaJuridica); {
                }
            }
        }

        swal({
            title: "Cadastro realizado!",
            text: `Aguarde a validação.`,
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

        const anexos = {
            rgDoc: this.state.rgDoc,
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

            // DOCUMENTO DO DIVÓRCIO SE DIVORCIADO
            divorcioDoc: this.state.divorcioDoc,

            // DOCUMENTOS DOS FILHOS SE FOR PAI/MÃE    
            cerNasc: this.state.cerNasc,
            cerVaci: this.state.cerVaci,
            comprovanteEscolarFilho: this.state.comprovanteEscolarFilho,

            // DOCUMENTO SE FORNECER PENSAO
            pensaoAlimenticia: this.state.pensaoAlimenticia
        }

        const id = this.state.id

        axios.put(`http://localhost:5000/precad1/updatecolaborador/${this.state.id}`, user).then((res) => {
            if (res.data.erro) {
                M.toast({ html: res.data.erro, classes: "red darken-4 rounded" })
            }
        })

        if(this.edicao){
            console.log("http://localhost:5000/infoacademica/updateInfoAcademica/" + this.state.id);
            axios.put("http://localhost:5000/infoacademica/updateInfoAcademica/" + this.state.id, infoAcademica).then((res) => {})
        }
        else{
            axios.post("http://localhost:5000/infoacademica/insertInfoAcademica", infoAcademica).then((res) => {})
        }
        
        if(!this.edicao){
            this.setState({
                formularioEnviado: true
            })
    
            deleteCookie("firstAcess")
            setCookie("aguardoConfirmacao", true)
        }

        uploadFile(anexos)
        //alert('Cadastro Enviado.\nAguarde seu cadastro e aguarde ser aprovado.')
        const urlRedirect = this.edicao? "/Funcionario": "/home";
        
        window.location.href = "http://localhost:3000" + urlRedirect;
        // window.open("/home")
        // window.close()
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
                        <h4>Formulário</h4>
                        <div className="campo1">
                            <div className="row">
                                {form}
                                <h5 className="titulo">Dados Pessoais</h5>
                                <form className="col s12">

                                    <div className="row">
                                        <Input lenght={100} stateName="nome" value={this.state.nome} fname={this.handleChange} div="input-field col s12" id="nome" class="validate" type="text" name="Nome Completo" />
                                    </div>

                                    <div className="row">
                                        <Input lenght={20} stateName="novaSenha" value={this.state.novaSenha} fname={this.handleChange} div="input-field col s12" id="novaSenha" class="validate" type="password" name="Nova Senha" />
                                    </div>

                                    <div className="row">
                                        <InputOnFocus lenght={11} value={this.state.cpf} focus={this.cpfVerify} stateName="cpf" div="input-field col col s12 m12 l6" id="cpf" class="validate" type="number" name="CPF" />

                                        <Input lenght={12} stateName="rg" value={this.state.rg} fname={this.handleChange} div="input-field col col s12 m12 l6" id="rg" class="validate" type="number" name="RG" />
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12 m12 l6">
                                            <select name="nacionalidade" className="browser-default" id="nacionalidade" onChange={this.handleChangeSelect} value={this.state.nacionalidade}>
                                                <DisableOption disableValue="" disableNome="Nacionalidade" />
                                                <Option function="" value="Nato" name="Brasileiro nato - Aquisição da nacionalidade originária brasileira" />
                                                <Option function="" value="Natural" name="Brasileiro naturalizado - aquisição secundária da nacionalidade brasileira" />
                                                <Option function="" value="Estrangeiro" name="Estrangeiro" />
                                            </select>
                                        </div>

                                        <Input lenght={100} value={this.state.naturalidade} stateName="naturalidade" fname={this.handleChange} div="input-field col s12 m12 l6" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12 m12 l6">
                                            <select name="genero" className="browser-default" id="genero" onChange={this.handleChangeSelectHomem} value={this.state.genero}>
                                                <DisableOption disableValue="" disableNome="Gênero" />
                                                <Option function="" value="Feminino" name="Feminino" />
                                                <Option function="" value="Masculino" name="Masculino" />
                                                <Option function="" value="Outro" name="Outro" />
                                            </select>
                                        </div>

                                        <div className="input-field col s12 m12 l6">
                                            <select name="raca" className="browser-default" id="raca" onChange={this.handleChange} value={this.state.raca} >
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
                                        <Input value={this.state.data.toString()} lenght={10} 
                                            stateName="data" fname={this.handleChange} div="input-field col s12 m12 12" 
                                            id="data" class="datepicker" 
                                            type="date" name="Data de Nascimento" />
                                    </div>

                                    <div className="row">
                                        <Input value={this.state.ddd != null? this.state.ddd.toString(): ""} lenght={2} stateName="ddd" fname={this.handleChange} div="input-field col s12 m12 l6" id="icol_telephone" class="validate" type="tel" name="DDD" />
                                        <Input value={this.state.telefone != null? this.state.telefone.toString(): ""} lenght={10} stateName="telefone" fname={this.handleChange} div="input-field col s12 m12 l6" id="icol_telephone" class="validate" type="tel" name="Telefone" />
                                    </div>

                                    <hr />

                                    <h5 className="titulo">Endereço</h5>
                                    <div className="row">
                                        <InputValueDisabled value={this.state.rua} ph="Rua" stateName="rua" fname={this.handleChange} div="input-field col s12 m12 l9 bla" id="rua" class="validate" type="text" name="Rua" />
                                        <Input value={this.state.numero != null? this.state.numero.toString(): ""} lenght={5} stateName="numero" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="numero" class="validate" type="number" name="Número" />
                                    </div>

                                    <div className="row">
                                        <InputValueDisabled value={this.state.bairro} stateName="bairro" ph="Bairro" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="bairro" class="validate" type="text" name="Bairro" />
                                        <Input value={this.state.complemento} lenght={10} stateName="complemento" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="complemento" class="validate" type="number" name="Complemento" />
                                        <Input value={this.state.cep != null ? this.state.cep.toString(): ""} lenght={8} stateName="cep" fname={this.handleChange} div="input-field col s12 m12 l3 bla" id="cep" class="validate" type="number" name="CEP" />
                                    </div>

                                    <div className="row">
                                        <InputValueDisabled value={this.state.cidade} ph="Cidade" stateName="cidade" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="cidade" class="validate" type="text" name="Cidade" />


                                        <InputValueDisabled value={this.state.estado} ph="Estado" stateName="estado" fname={this.handleChange} div="input-field col s12 m12 l6 bla" id="estado" class="validate" type="text" name="" />

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

                                    <hr />

                                    <h5 className="titulo">Estado Civil</h5>
                                    <select name="estadoCivil" className="browser-default" id="estadoCivil" onChange={this.handleChangeSelect} value={this.state.estadoCivil}>
                                        <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                        <Option function="" value="Solteiro(a)" name="Solteiro(a)" />
                                        <Option function="" value="Casado(a)" name="Casado(a)" />
                                        <Option function="" value="Divorciado(a)" name="Divorciado(a)" />
                                        <Option function="" value="Viúvo(a)" name="Viúvo(a)" />
                                    </select>

                                    <hr />

                                    <h5 className="titulo">Possui filhos?</h5>
                                    <form name="filho" id="filho" onChange={this.handleChangeSelectFilho}>
                                        <p>
                                            <label>
                                                <input name="filho" value="sim" type="radio" checked={this.state.filho === "sim"}/>
                                                <span>Sim</span>
                                            </label>
                                        </p>

                                        <p>
                                            <label>
                                                <input name="filho" value="nao" type="radio" checked={this.state.filho === "nao"}/>
                                                <span>Não</span>
                                            </label>
                                        </p>
                                    </form>

                                    <hr />

                                    <div className="row">

                                        <h5 className="titulo">Dados Acadêmicos</h5>

                                        <Input value={this.state.formacao} lenght={100} stateName="formacao" fname={this.handleChange} div="input-field col s12 m12 l5 bla" id="formacao" type="text" class="validate" name="Formação" />


                                        <Input value={this.state.cursos} lenght={100} stateName="cursos" fname={this.handleChange} div="input-field col s12 m12 l7 bla" id="cursos" type="text" class="validate" name="Cursos" />

                                    </div>

                                    <div className="row">
                                        <Input lenght={100} value={this.state.linguas} stateName="linguas" fname={this.handleChange} div="input-field col s12 bla" id="linguas" type="text" class="validate" name="Línguas" />
                                    </div>

                                    <div className="row">
                                        <Input value={this.state.instituicao} lenght={100} stateName="instituicao" fname={this.handleChange} div="input-field col s12 bla" id="instituicao" type="text" class="validate" name="Instituição" />
                                    </div>

                                </form>
                            </div>
                        </div>


                        <h4>Documentos</h4>
                        <div className=" campo2">
                            <div className="row">
                                <h5 className="titulo">Documentos Pessoais</h5>
                                <form className="col s12" datatype='multipart/form-data'>
                                    <div className="row">
                                        <div className="file">
                                            <label>RG</label>
                                            <input type="file" name="rgDoc" onChange={this.handleChangeFile} />
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

                                    <hr />

                                    <h5 className="titulo">Certificados</h5>
                                    <div datatype='multipart/form-data'>
                                        <div className="row">
                                            <div className="file">
                                                <label>Comprovante de Escolaridade</label>
                                                <input type="file" name="comprovanteEscolaridade" onChange={this.handleChangeFile} />
                                            </div>
                                        </div>
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
                                    </div>

                                    <hr />

                                    <h5 className="titulo">Documentos profissionais</h5>
                                    <div datatype='multipart/form-data'>
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
                                    </div>

                                    <div id="casadoBody">
                                        <hr />
                                        <h5 className="titulo" id="casadoLabel">Documentos do Cônjuge</h5>
                                        <div className="row">
                                            <div className="file">
                                                <label>Certidão de Casamento</label>
                                                <input type="file" name="certidaoCasamento" onChange={this.handleChangeFile} />
                                            </div>

                                            <div className="file" >
                                                <label>RG do Cônjuge</label>
                                                <input type="file" name="RGconjuge" onChange={this.handleChangeFile} />
                                            </div>

                                            <div className="file">
                                                <label>CPF do Cônjuge</label>
                                                <input type="file" name="CPFconjuge" onChange={this.handleChangeFile} />
                                            </div>
                                        </div>
                                    </div>

                                    <div id="filhosBody">
                                        <h5 className="titulo" id="filhosLabel">Documentos dos filhos</h5>
                                        <div className="row">
                                            <div className="file">
                                                <label>Certidão de Nascimento</label>
                                                <input type="file" name="certidaoNascFilho" onChange={this.handleChangeFile} />
                                            </div>

                                            <div className="file" id="vac">
                                                <label>Certidão de Vacinação</label>
                                                <input type="file" name="certidaoVacFilho" onChange={this.handleChangeFile} />
                                            </div>

                                            <div className="file">
                                                <label>Comprovante de Frequência Escolar</label>
                                                <input type="file" name="comproEscolar" onChange={this.handleChangeFile} />
                                            </div>
                                            <div className="file">
                                                <label>Pensão Alimentícia</label>
                                                <input type="file" name="pensao" onChange={this.handleChangeFile} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="termosUso">
                                <label>
                                    <form action="">
                                    <input type="checkbox" value="Aceito" required={true} />
                                        <span>Eu concordo com o Termos de Uso.</span>
                                    </form>
                                </label>
                            
                            
                            <div className="eeeee">
                                <span>
                                    <ul>
                                        <li>Eu aceito usarem e armazenarem meus dados no sistema Ionic Health.</li>
                                        <li>Leia mais sobre <a href="https://drive.google.com/file/d/196kDFHwXdQUsYKsde_D00Fzs0g2-1IX4/view?usp=sharing" target="_blank">aqui</a>!</li>
                                    </ul>
                                </span>
                                <i className="fa-solid fa-question"></i>
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