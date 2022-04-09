import React, { Component } from "react";

// LOCAL CSS
import './style.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_login.svg"

// COMPONENTS
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Submit from "../../components/button/submit";


class Login extends Component {
    render() {
        return (
            <>
                <head>
                    // CSS LOCAL 
                    <link rel="stylesheet" href="../static/css/login.css"/>
                
                    // BOOTSTRAP 
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                
                    <title>Login</title>
                </head>
                
                <body>
                    <main>
                        <img src={LogoLogin} />

                        <Input div="form-floating mb-3" type="email" class="form-control" id="floatingInput" name="E-mail"/>

                        <Input div="form-floating mb-3" type="password" class="form-control" id="floatingPassword" name="Senha"/>
                
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
                </body>
            </>
        )
    }
};

export default Login;