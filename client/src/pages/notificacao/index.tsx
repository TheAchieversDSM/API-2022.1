import React, { Component } from "react";
import axios from "axios";

// LOCAL CSS
import './notificacao.css'

// COMPONENTS
import General from '../../components/general/index'
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";
import Modal from "../../components/modal/modal"
import { modaljs } from "../../utils/modal/modal";

class Notificacao extends Component {
    state = {
        info_colab: [],
        info_pf: [],
        info_acad: [],
    };
    componentDidMount() {
        modaljs()
        console.log("indo");
        axios.get(`http://localhost:5000/infocolab/`)
            .then((res) => {
                console.log(res.data);
                
                const info_colab = res.data.colab;
                const info_pf = res.data.pf;
                const info_acad = res.data.acad;

                console.log(info_colab[0].con_id);
                
                this.setState({ info_colab }); 
                this.setState({ info_pf });
                this.setState({ info_acad });      
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
                    <div className="not row">
                        <h5 className="col s6">Rebeca preencheu o cadastro!</h5>
                        <a className="waves-effect waves-light btn modal-trigger col s6" data-target="modal1">Modal</a>
                    </div>

                    <ul>
                        <Modal
                            id=""
                            class="validate"
                            name1="Departamento"
                            name2="Cargo"
                            name3="Salário"
                            type="text"
                            fname=""
                        />
                    </ul>
                </div>
            </>
        );
    }
}

export default Notificacao;