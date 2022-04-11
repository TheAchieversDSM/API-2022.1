import React, { Component } from "react";

// LOCAL CSS
import './login.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_fundo_claro.svg"

// COMPONENTS
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Submit from "../../components/button/submit";


class Login extends Component {
    render() {
        return (
            <>
                    <main>
                        <img src={LogoLogin} />

                        <div className="bloco">
                            <Input div="input-field" type="email" id="email" name="E-mail" class="validate" />
                            <Input div="input-field" type="password" id="password" name="Senha" class="validate" />
                        </div>
                
                        <div className="opcao">
                            <div className="col-12">
                                <Check name="Lembrar de Mim"/>
                            </div>
                
                            <a href="#">Esqueci a senha</a>
                        </div>
                
                        <div className="col-12">
                            <Submit title="Log In" />
                        </div>
                    </main>
            </>
        )
    }
};

export default Login;