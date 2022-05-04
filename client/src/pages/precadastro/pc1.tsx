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
import CollapseCad from "../../components/collapseCad";


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
                        <ul className="collapsible popout" data-collapsible="accordion">
                            <CollapseCad title="Formulário"
                                fname={this.handleChangeNome}
                                div="input-field col s12"
                                id ="nome"
                                class="validate"
                                type="text"
                                name="Nome Completo"

                              
                            />

                        </ul>

                        <Link to="/Home"><ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn center-align" name="Finalizar!" iClass="fa-solid fa-arrow-right-long" /></Link>
                    </div>
                </div>



            </>
        )
    }
}
export default PreCadastro1;