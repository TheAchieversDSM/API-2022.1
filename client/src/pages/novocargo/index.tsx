import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
//import './novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import General from "../../components/general";
import ButtonMat from "../../components/button/buttonMat";
import Css from "../../assets/style/style";
import Check from "../../components/input/check";

class NovoCargo extends Component {
    state = {
        email: String,
        password: String,
        tipoPessoa: String
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
          });
          console.log(this.state);
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
            tipoPessoa: this.state.tipoPessoa
        }
        axios.post("http://localhost:5000/novocolaborador/create", user ).then((res)=>{
            if (res.data.erro){
                M.toast({html: res.data.erro , classes: "red darken-4 rounded"})
            }else{
                M.toast({html: res.data , classes: "green darken-4 rounded"})
            }
        })
    };
    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Perfil</h3>

                    <div className="form">
                        <div className="teste1 row">
                            <Input stateName="cargo" fname={this.handleChange} div="input-field" type="text" id="cargo" name="Novo Cargo" class="validate" />

                            <Input stateName="salario" fname={this.handleChange} div="input-field" type="text" id="salario" name="Salário" class="validate" />

                            <Check fname="" name="Vale Refeição" value=""/>
                            <Check fname="" name="Vale Transporte" value=""/>
                            <Check fname="" name="Auxílio Creche" value=""/>
                            <Check fname="" name="Plano de Saúde" value=""/>
    
                            <div className="botao-novoperfil">
                                <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar novo perfil" iClass="{}" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoCargo;