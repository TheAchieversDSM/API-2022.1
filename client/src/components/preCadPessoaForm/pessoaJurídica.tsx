import React, { Component, useState } from "react"
import Input from "../../components/input/input";
import InputOnFocus from "../input/inputOnFocus";

type props = {
    fname: any,
    focus: any,
}

class PessoaJuridicaForm extends Component<props> {

    render() {
        return (
            <>
                <h5 className="titulo">Dados da Empresa</h5>
                <div className="row">
                    <Input stateName="tempoFormalizacao" fname={this.props.fname} div="input-field col s12 m12 l6 bla" id="tempoFormalizacao" type="text" class="validate" name="Tempo de Formalização" />

                    <Input stateName="naturezajuridica" fname={this.props.fname} div="input-field col s12 m12 l6 bla" id="naturezajuridica" type="text" class="validate" name="Natureza Jurídica" />

                    <Input stateName="dataFundacao" fname={this.props.fname} div="input-field col s12 m12 l6" id="dataFundacao" class="datepicker" type="date" name="Data de Fundação" />

                    <Input stateName="nomeEmpresa" fname={this.props.fname} div="input-field col s12 m12 l6 bla" id="nomeEmpresa" type="text" class="validate" name="Nome da Empresa" />

                    <InputOnFocus stateName="cnpj" focus={this.props.focus} div="input-field col s12 m12 l6 bla" id="cnpj" type="number" class="validate" name="CNPJ" />
                </div>
            </>
        )
    }

}

export default PessoaJuridicaForm