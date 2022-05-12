import React, { Component } from "react";
import axios from "axios"
import { modaljs } from "../../utils/modal/modal"

type props = {
    type: any,
    class: any,
    id: any,
    name1: any,
    name2: any,
    name3: any,
    fname: any
}

class Modal extends Component<props> {
    state = {
        departamento: [],
        cargo: [],
        colaboradores: []
    };

    componentDidMount() {
        modaljs()

        axios.get("http://localhost:5000/infocolab/getAll")
            .then((res) => {
                console.log(res.data)

                const colaboradores = res.data

                this.setState({colaboradores})
            })

        axios.get(`http://localhost:5000/departamentos/`)
            .then((res) => {
                console.log(res.data);

                const departamento = res.data

                this.setState({ departamento })
            }
        )

        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);

                const cargo = res.data

                this.setState({ cargo })
            }
        )  
    }   

    render() {
        return (

            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                <li>

                    <div id="modal1" className="modal modal-fixed-footer">
                        <div className="modal-content">
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

                            <select className="browser-default" id="departamento">
                                <option value="" disabled selected>Departamento</option>
                                {this.state.departamento.map(departamento => <option key={departamento.dep_id} value={departamento.dep_id}>{departamento.dep_descricao}</option>)}
                            </select>
                            <select className="browser-default" id="departamento">
                                <option value="" disabled selected>Cargo</option>
                                {this.state.cargo.map(car => <option key={car.car_id} value={car.dep_id}>{car.car_descricao}</option>)}
                            </select>
                            <select className="browser-default" id="superior">
                                <option value="" disabled selected>Superior</option>
                                {this.state.colaboradores.map(colaborador => <option key={colaborador.con_id} value={colaborador.con_id}> {colaborador.con_nome} - {colaborador.car_descricao} </option> )} 
                            </select>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Aceitar</a>
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Rejeitar</a>
                        </div>
                    </div>
                </li>
            </>

        )
    }
}


export default Modal;