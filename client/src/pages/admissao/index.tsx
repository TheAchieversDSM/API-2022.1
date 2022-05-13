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
                            <select className="browser-default" id="departamento">
                                <option value="" disabled selected>Cargo</option>
                                {this.state.cargo.map(car => <option key={car.car_id} value={car.dep_id}>{car.car_descricao}</option>)}
                            </select>
                            <select className="browser-default" id="superior">
                                <option value="" disabled selected>Superior</option>
                                {this.state.colaboradores.map(colaborador => <option key={colaborador.con_id} value={colaborador.con_id}> {colaborador.con_nome} - {colaborador.car_descricao} </option> )} 
                            </select>
                        
                        
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat" >Aceitar</a>
                        </div>

                        <div className="rejeitar">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Rejeitar</a>
                        </div>
                    </div> 
            </>
        )
    }
}

export default Admissao;