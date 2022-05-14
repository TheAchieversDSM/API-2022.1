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
import './admissao.css'

class Admissao extends Component {

    state = {
        cargo: [],
        colaborador: [],
        colaboradores: []
    };

    componentDidMount() {
        let url = window.location.href.split("/")
        var id = url[4]

        axios.get(`http://localhost:5000/infocolab/getInfoById/${id}`)
        .then((res)=>{
                const colaborador = res.data
                console.log( res.data);
                

                this.setState({colaborador})
        })
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
          {this.state.colaborador.map(info => <div key={info.colaborador_con_id }>
                            <h4>Dados pessoais</h4>
                            <p><label>  Nome:</label> {info.con_nome} </p>
                            <p><label htmlFor="">CPF:</label> {info.user_cpf} </p>
                            <p><label htmlFor="">Nacionalidade:</label> {info.user_nacionalidade}</p>
                            <p><label htmlFor="">Naturalidade:</label> {info.user_naturalidade}</p>
                            <p><label htmlFor="">Raça:</label> {info.user_raca}</p>
                            <p><label htmlFor="">Gênero:</label> {info.user_genero}</p>
                            <p><label htmlFor="">Data de</label> Nascimento: {info.data_nascimento}</p>

                            <hr />

                            <h4>Contato</h4>
                            <p><label htmlFor="">E-mail</label>: {info.con_email}</p>
                            <p><label htmlFor="">DDD:</label> {info.con_ddd}</p>
                            <p><label htmlFor="">Telefone:</label> {info.con_telefone}</p>

                            <hr />

                            <h4>Endereço</h4>
                            <p><label htmlFor="">Rua:</label> {info.end_rua}</p>
                            <p><label htmlFor="">Complemento:</label> {info.end_complemento}</p>
                            <p><label htmlFor="">Bairro:</label> {info.end_bairro}</p>
                            <p><label htmlFor="">CEP:</label> {info.end_cep}</p>
                            <p><label htmlFor="">Cidade:</label> {info.end_cidade}</p>
                            <p><label htmlFor="">Estado:</label> {info.end_estado}</p>
                            <p><label htmlFor="">Região:</label> {info.end_regiao}</p>
                            <hr />
                            
                            </div>
                            )}
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
                            <Submit id="res" title="Aceitar" fname=""/>
                        </div>

                        <div className="rejeitar">

                            {/*<Text id=""/>*/}
                            <Submit id="rejeitar" title="Rejeitar" fname=""/>
                            
                        </div>
                     
                    </div> 
            </>
        )
    }
}

export default Admissao;