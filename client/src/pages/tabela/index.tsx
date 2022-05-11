import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import TR from '../../components/tabela'

class Funcionario extends Component {
    state = {
        colaboradores: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/infocolab/getAll')
            .then((res) => {
                const colaboradores = res.data;
                
                this.setState({colaboradores})                
            }
        )
    }

    render() {
        return(
            <>
            <General />
            <div className="conteudo">
                <div className="func">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Departamento</th>
                                    <th>Cargo</th>
                                </tr>
                            </thead>

                            <tbody>
                     
                                    {this.state.colaboradores.map(colaborador => <TR key={colaborador.con_id} url={`/PerfilColaborador/${colaborador.con_id}`} nome={colaborador.con_nome} departamento={colaborador.dep_descricao} cargo={colaborador.car_descricao} />)}
            
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Funcionario;