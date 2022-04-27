import React, { Component } from "react";
import axios from "axios";

// LOCAL CSS
import './notificacao.css'

// COMPONENTS
import General from '../../components/general/index'
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";
import Collaps from "../../components/collaps/collaps"

class Notificacao extends Component {
    state = {
        info_colab: [],
        info_pf: [],
        info_acad: [],
    };
    componentDidMount() {
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
                this.setState({info_acad})   ;      
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
                    <ul className="collapsible popout" data-collapsible="accordion">
                        <Collaps title="Rebeca preencheu o pre-cadastro!" 
                        title2="Dados pessoais"
                        desc1="Nome: " 
                        desc2="CPF: " 
                        desc3="Nacionalidade: " 
                        desc4="Naturalidade: " 
                        desc5="Raça: " 
                        desc6="Gênero: "
                        desc7="Data de Nascimento: "
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