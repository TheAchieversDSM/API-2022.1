import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setCookie, getCookie,deleteCookie } from "../../utils/cookieUtil/cookieUtil";
import LoginRoute from "../../utils/login/loginAuth";

// LOCAL CSS
import './login.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_fundo_claro.svg"

// COMPONENTS
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Submit from "../../components/button/submit";


class Login extends Component {
    state = {
        email: String,
        password: String
    };

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        });
        console.log(this.state);
    };

    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
        console.log(this.state);
    };
 
    handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }


        await axios.get(`http://localhost:5000/login/${user.email}/${user.password}`).then((response) => {
            console.log(response.data);
            if (response.data.token) {
                setCookie("oioi",)
                setCookie("token", response.data.token);
                setCookie("acesso", response.data.user[0].con_precad)
                setCookie("id", response.data.user[0].con_id);
                console.log(getCookie("token"));
                console.log(getCookie("id"));
            }
        })
    };

    render() {    
        return (
            <>
            <LoginRoute redirect={"/home"} />
                <main>
                    <img src={LogoLogin} />

                    <div className="bloco">
                        <Input div="input-field" fname={this.handleChangeEmail} type="email" id="email" name="E-mail" class="validate" />
                        <Input div="input-field" fname={this.handleChangePassword} type="password" id="password" name="Senha" class="validate" />
                    </div>

                    <div className="opcao">
                        <div className="col-12">
                            <Check value="" name="Lembrar de Mim" />
                        </div>

                        <a href="#">Esqueci a senha</a>
                    </div>

                    <div className="col-12">
                      <Submit link="/home" fname={this.handleSubmit} title="Log In" />
                    </div>
                </main>
            </>
        )
    }
};

export default Login;