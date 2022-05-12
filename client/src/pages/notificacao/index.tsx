import React, { Component } from "react";
import axios from "axios";

// LOCAL CSS
import './notificacao.css'

// COMPONENTS
import General from '../../components/general/index'
import Css from "../../assets/style/style";
import Modal from "../../components/modal/modal"
import { modaljs } from "../../utils/modal/modal";

class Notificacao extends Component {
    state = {
        notificacao:[],
        info_colab: [],
        info_pf: [],
        info_acad: [],
    };
    componentDidMount() {
        modaljs()
        axios.get(`http://localhost:5000/notificacao/getAll`)
            .then((res) => {
                console.log(res.data);
                
                const notificacao = res.data;
   
                this.setState({ notificacao }); 
        
            }
        )
    }


    render() {
        return (
            <>
                <General />

                <Css ref="./notificao.css" />
                
                <div className="conteudo">
                    <h3>Notificações</h3>
                    {this.state.notificacao.map(notif => <><div key={notif.notificacao_id} className="not row">

                        <h5 className="col s6">Rebeca preencheu o cadastro!</h5>
                        <a className="waves-effect waves-light btn modal-trigger col s6" data-target="modal1">Modal</a>
                    </div><ul>
                            <Modal
                                id=""
                                class="validate"
                                name1="Departamento"
                                name2="Cargo"
                                name3="Salário"
                                type="text"
                                fname="" />
                        </ul></>
                    )}
                </div>
            </>
        );
    }
}

export default Notificacao;