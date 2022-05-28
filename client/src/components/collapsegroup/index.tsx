import React, { Component } from "react";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import InputOnFocus from "../../components/input/inputOnFocus";
import Input from "../../components/input/input";
import PessoaJuridicaForm from "../../components/preCadPessoaForm/pessoaJurídica";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import InputValueDisabled from "../../components/input/inputValueDisabled";


type props = {
    
}


class Group extends Component<props> {
    componentDidMount() {

    }
    render() {
        return ( 
            <>{/*
                <ul>
                    <li>
                        <div className="collapsible-header">Formulário</div>
                        <div className="collapsible-body">
                            <h5 className="titulo">Dados Pessoais</h5>
                            <form className="col s12">
                                        <div className="row">
                                            <Input stateName="nome" fname="" div="input-field col s12" id="nome" class="validate" type="text" name="Nome Completo" />
                                        </div>
                                        <div className="row">
                                            <Input stateName="novaSenha" fname="" div="input-field col s12" id="novaSenha" class="validate" type="password" name="Nova Senha" />
                                        </div>
                                        <div className="row">
                                            <InputOnFocus focus="" stateName="cpf" div="input-field col col s12 m12 l6" id="cpf" class="validate" type="number" name="CPF" />
                                            <Input stateName="rg" fname="" div="input-field col col s12 m12 l6" id="rg" class="validate" type="number" name="RG" />
                                        </div>
                                        <div className="row">
                                            <Input stateName="nacionalidade" fname="{this.handleChange}" div="input-field col col s12 m12 l6" id="nacionalidade" class="validate" type="text" name="Nacionalidade" />
                                            <Input stateName="naturalidade" fname="{this.handleChange}" div="input-field col s12 m12 l6" id="naturalidade" class="validate" type="text" name="Naturalidade" />
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12 m12 l6">
                                                <select name="genero" className="browser-default" id="genero" onChange="">
                                                    <DisableOption disableValue="" disableNome="Gênero" />
                                                    <Option function="" value="Feminino" name="Feminino" />
                                                    <Option function="" value="Masculino" name="Masculino" />
                                                    <Option function="" value="Outro" name="Outro" />
                                                </select>
                                            </div>
                                            <div className="input-field col s12 m12 l6">
                                                <select name="raca" className="browser-default" id="raca" onChange="">
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
                                            <Input stateName="data" fname="{this.handleChange}" div="input-field col s12 m12 12" id="data" class="datepicker" type="date" name="Data de Nascimento" />
                                        </div>
                                        <div className="row">
                                            <Input stateName="ddd" fname="{this.handleChange}" div="input-field col s12 m12 l6" id="icol_telephone" class="validate" type="tel" name="DDD" />
                                            <Input stateName="telefone" fname="{this.handleChange}" div="input-field col s12 m12 l6" id="icol_telephone" class="validate" type="tel" name="Telefone" />
                                        </div>
                            </form>        
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header">Endereço</div>
                        <div className="collapsible-body">
                            <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <InputValueDisabled value="{this.state.rua}" ph="Rua" stateName="rua" fname="{this.handleChange}" div="input-field col s12 m12 l9 bla" id="rua" class="validate" type="text" name="Rua" />
                                                <Input stateName="numero" fname="{this.handleChange}" div="input-field col s12 m12 l3 bla" id="numero" class="validate" type="number" name="Número" />
                                            </div>
                                            <div className="row">
                                                <InputValueDisabled value="{this.state.bairro}" stateName="bairro" ph="Bairro" fname="{this.handleChange}" div="input-field col s12 m12 l6 bla" id="bairro" class="validate" type="text" name="Bairro" />
                                                <Input stateName="complemento" fname="{this.handleChange}" div="input-field col s12 m12 l3 bla" id="complemento" class="validate" type="number" name="Complemento" />
                                                <Input stateName="cep" fname="{this.handleChange}" div="input-field col s12 m12 l3 bla" id="cep" class="validate" type="number" name="CEP" />
                                            </div>
                                            <div className="row">
                                                <InputValueDisabled value="{this.state.cidade}" ph="Cidade" stateName="cidade" fname="{this.handleChange}" div="input-field col s12 m12 l6 bla" id="cidade" class="validate" type="text" name="Cidade" />
                                                <InputValueDisabled value="{this.state.estado}" ph="Estado" stateName="estado" fname="{this.handleChange}" div="input-field col s12 m12 l6 bla" id="estado" class="validate" type="text" name="" />
                                                <ButtonMat fname="{this.buscarCep}" class="waves-effect waves-light btn center-align" name="Buscar! " iClass="fa-solid fa-arrow-right-long" />
                                            </div>
                                        </form>
                            </div>
                        </div>
                    </li>

                    <li>
                    <div className="collapsible-header">Estado Civil</div>
                        <div className="collapsible-body">
                        <div className="row">
                                <form className="col s12">

                                    <label>Estado Civil</label>
                                    <select name="estadoCivil" className="browser-default" id="estadoCivil" onChange="{this.handleChangeSelect}">
                                        <DisableOption disableValue="" disableNome="Escolha uma das opções" />
                                        <Option function="" value="Solteiro(a)" name="Solteiro(a)" />
                                        <Option function="" value="Casado(a)" name="Casado(a)" />
                                        <Option function="" value="Divorciado(a)" name="Divorciado(a)" />
                                        <Option function="" value="Viúvo(a)" name="Viúvo(a)" />
                                    </select>

                                </form>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header">Filhos</div>
                        <div className="collapsible-body">
                            <div className="row">

                                    <label id="radioLabel">Possui filhos?</label>
                                    <form name="filho" id="filho" onChange="{this.handleChangeSelect}">
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
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header">Dados Acadêmicos</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <form className="col s12">

                                    <div className="row">

                                        <Input stateName="formacao" fname="{this.handleChange}" div="input-field col s12 m12 l5 bla" id="formacao" type="text" class="validate" name="Formação" />


                                        <Input stateName="cursos" fname="{this.handleChange}" div="input-field col s12 m12 l7 bla" id="cursos" type="text" class="validate" name="Cursos" />

                                    </div>

                                    <div className="row">
                                        <Input stateName="linguas" fname="{this.handleChange}" div="input-field col s12 bla" id="linguas" type="text" class="validate" name="Línguas" />
                                    </div>

                                    <div className="row">
                                        <Input stateName="instituicao" fname="{this.handleChange}" div="input-field col s12 bla" id="instituicao" type="text" class="validate" name="Instituição" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header">Documentos Pessoais</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <form className="col s12" datatype='multipart/form-data'>
                                    <div className="row">
                                        <div className="file">
                                            <label>RG</label>
                                            <input type="file" name="rgDoc" onChange="{this.handleChangeFile}" />
                                            <label>Carteira de Trabalho</label>
                                            <input type="file" name="carteiraTrabalho" onChange="{this.handleChangeFile}" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>CPF</label>
                                            <input type="file" name="cpfFile" onChange="{this.handleChangeFile}" />
                                            <label>Carteira de Motorista</label>
                                            <input type="file" name="cnh" onChange="{this.handleChangeFile}" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Foto 3x4</label>
                                            <input type="file" name="foto" onChange="{this.handleChangeFile}" />
                                            <label>Título de Eleitor</label>
                                            <input type="file" name="tituloEleitor" onChange="{this.handleChangeFile}" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Comprovante de Residência</label>
                                            <input type="file" name="comprovanteResidencia" onChange="{this.handleChangeFile}" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="file">
                                            <label>Comprovante de Escolaridade</label>
                                            <input type="file" name="comprovanteEscolaridade" onChange="{this.handleChangeFile}" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header">Certificados</div>
                        <div className="collapsible-body">
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
                    </li>

                    <li>
                        <div className="collapsible-header">Documentos Profissionais</div>
                        <div className="collapsible-body">
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
                    </li>

                    <li>
                        <div className="collapsible-header" id="casadoLabel">Estado Civil</div>
                        <div className="collapsible-body" id="casadoBody">
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
                    </li>

                    <li>
                        <div className="collapsible-header" id="filhosLabel"><h6>Filhos</h6></div>
                        <div className="collapsible-body" id="filhosBody">
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
                    </li>

                </ul> */}
            </>
        )
    }
}

export default Group;