import React, { Component } from 'react';
import Css from '../../assets/style/style';
import General from '../../components/general';
import { getCookie } from '../../utils/cookieUtil/cookieUtil';
import Caminho from "../../components/caminho/caminho";
import axios from "axios"
import M from 'materialize-css'

// IMAGE
import Icone from "../../assets/img/icone_azul.svg"

import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import InputFile from "../../components/input/file";
import Submit from "../../components/button/submit";
import Text from "../../components/textarea/index"

class Admissao extends Component {

    state = {
        cargo: [],
        colaboradores: []
    };

    componentDidMount() {
        axios.get("http://localhost:5000/infocolab/getAll")
            .then((res) => {
                console.log(res.data)

                const colaboradores = res.data

                this.setState({colaboradores})
            })
        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);

                const cargo = res.data

                this.setState({ cargo })
            }
        )  
    }   

    render(){
        return(
            <>
            <General/>
                    <div className="conteudo">
                            <h4>Dados pessoais</h4>
                            <p>Nome: </p>
                            <p>CPF: </p>
                            <p>Nacionalidade: </p>
                            <p>Naturalidade: </p>
                            <p>Raça: </p>
                            <p>Gênero:</p>
                            <p>Data de Nascimento: </p>

                            <hr />

                            <h4>Contato</h4>
                            <p>E-mail: </p>
                            <p>DDD: </p>
                            <p>Telefone: </p>

                            <hr />

                            <h4>Endereço</h4>
                            <p>Rua: </p>
                            <p>Complemento: </p>
                            <p>Bairro: </p>
                            <p>CEP: </p>
                            <p>Cidade: </p>
                            <p>Estado: </p>
                            <p>Região: </p>

                            <hr />

                        <div className="aceitar">
                            <div className="row">
                                <div className="col s12">
                                    <h4>Mais informações do trabalho</h4>
                                    <select className="browser-default" id="departamento">
                                        <option value="" disabled selected>Cargo</option>
                                        {this.state.cargo.map(car => <option key={car.car_id} value={car.dep_id}>{car.car_descricao}</option>)}
                                    </select>
                                    <select className="browser-default" id="superior">
                                        <option value="" disabled selected>Superior</option>
                                        {this.state.colaboradores.map(colaborador => <option key={colaborador.con_id} value={colaborador.con_id}> {colaborador.con_nome} - {colaborador.car_descricao} </option> )}
                                    </select>
                                    <select className="browser-default" id="contratacao">
                                        <option value="" disabled selected>Contratação</option>
                                        <option value="1" >CLT</option>
                                        <option value="2" >PJ</option>
                                        <option value="3" >Estagiário</option>
                                        <option value="4" >Temporário</option>
                                       {/*this.state.contratacao.map(colaborador => <option key={colaborador.con_id} value={colaborador.con_id}> {colaborador.con_nome} - {colaborador.car_descricao} </option> )*/}
                                    </select>
                                </div>
                               {/* <div className="col s6">
                                    <h4>Benefícios</h4>
                                    <Check value="1" name="Plano de Saúde"/>
                                    <Check value="2" name="Vale Transporte"/>
                                    <Check value="3" name="Vale Refeição"/>
                                    <Check value="4" name="Auxílio Creche"/>
                                    </div> */}    
                            </div>
                            <Submit title="Aceitar" fname=""/>
                        </div>

                        <div className="rejeitar">

                            <Text id=""/>            
                            <Submit title="Rejeitar" fname=""/>
                            
                        </div>
                    </div> 
            </>
        )
    }
}

export default Admissao;