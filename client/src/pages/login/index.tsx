import React, { Component } from "react";
import axios from "axios";

import { setCookie, getCookie } from "../../utils/cookieUtil/cookieUtil";
import LoginRoute from "../../utils/login/loginAuth";
import nivelCheck from "../../utils/nivelCheck/nivelCheck";

// LOCAL CSS
import './login.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_para_fundo_claro.svg"

// COMPONENTS
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Submit from "../../components/button/submit";


class Login extends Component {
    state = {
        email: String,
        password: String,
        loggedin: false
    };

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
        }

        await axios.get(`http://localhost:5000/login/${user.email}/${user.password}`).then((res) => {
            if (res.data.erro){
                M.toast({html: res.data.erro , classes: "red darken-4 rounded"})
            }else{
                if (res.data.token) {
                    setCookie("token", res.data.token);
                    setCookie("id", res.data.user[0].col_id);
                    if (res.data.user[0].col_nome == null) {
                        setCookie("firstAcess", true)
                        setCookie("tipoPessoa", res.data.user[0].tipo_pessoa)
                    }else if (res.data.user[0].cargo_car_id == null) {
                        setCookie("aguardoConfirmacao", true)
                    }
                    else {
                        setCookie("nivel", nivelCheck(res.data.nivel_id[0].car_nivel_acesso));
                    }
                    this.setState({
                        loggedin: true
                    })
                }
            }
        })
    };

    isLoggedin = () => {
        if (this.state.loggedin == true) {
            return <LoginRoute redirect="/home" />
        }
        else {
            return (null)
        }
    }

    render() {
        return (
            <>
                <this.isLoggedin />
                <main>
                    <div className="bloco">

                        <img src={LogoLogin} />
                        <form onSubmit={this.isLoggedin} >
                            <div className="row">
                                <Input stateName="email" div="input-field" fname={this.handleChange} type="email" id="email" name="E-mail" class="validate" />
                            </div>
                            <div className="row">
                                <Input stateName="password" div="input-field" fname={this.handleChange} type="password" id="password" name="Senha" class="validate" />
                            </div>


                            <div className="row">
                                <div className="col s6">
                                    <Check fname="" value="" name="Lembrar de Mim" />
                                </div>

                                <div className="opcao col s6 right-align">
                                    <a href="#">Esqueci a senha</a>
                                </div>
                            </div>

                            <div className="row col-12 center-align">
                                <Submit id="" fname={this.handleSubmit} title="Log In" />
                            </div>
                        </form>
                    </div>
                </main>
            </>
        )
    }
};

export default Login;