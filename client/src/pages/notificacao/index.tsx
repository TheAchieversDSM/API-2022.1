import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// LOCAL CSS
import './notificacao.css'

// COMPONENTS
import General from '../../components/general/index'
import Css from "../../assets/style/style";
import ButtonMat from "../../components/button/buttonMat";

class Notificacao extends Component {
    state = {
        notificacao:[],
        colab:[],
        info_colab: [],
        info_pf: [],
        info_acad: [],
    };
    componentDidMount() {
        axios.get(`http://localhost:5000/notificacao/getAll`)
            .then((res) => {
                console.log(res.data);
                const notificacao = res.data;
                this.setState({ notificacao }); 
            }
        )
  
    }
    axiosget= (id)=>{
        let nome =  String
          axios.get(`http://localhost:5000/infocolab/${id}`) .then((res) => {
              nome = res.data.user.con_nome
              console.log(res.data);
              
          })
          
          
          return (nome)
        }


    render() {

        return (
            <>
                <General />

                <Css ref="./notificao.css" />
                
                <div className="conteudo">
                    <h3>Notificações</h3>
                    {this.state.notificacao.map(notif => 
                    <>
                    <div key={notif.notificacao_id} className="not row">

                        <h5 className="col s6">{this.axiosget(notif.user_id)}</h5>
                        
                        <Link to="/admissao"><ButtonMat fname="" class="waves-effect waves-light btn modal-trigger col s6" name="Visualizar!" iClass="" /></Link>
                    </div><ul>
                         
                        </ul>
                        </>
                    )}
                </div>
            </>
        );
    }
}

export default Notificacao;