import { Component } from "react";

// LOCAL CSS
import './style.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_login.svg"

// COMPONENTS
import InputNormal from "../../components/input/normal";
import InputPrivate from "../../components/input/private";
import Check from "../../components/input/check";
import Button from "../../components/button/button";

class Login extends Component {
    render() {
        return (
            <div>
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

                        <InputNormal type="email" id="floatingInput" name="E-mail"/>

                        <InputPrivate type="password" id="floatingPassword" name="Senha"/>
                
                        <div className="opcao">
                            <div className="col-12">
                                <Check label="Lembrar de Mim"/>
                            </div>
                
                            <a href="#">Esqueci a senha</a>
                        </div>
                
                        <div className="col-12">
                            <Button title="Log In" />
                        </div>
                
                    </main>
                </body>
            </div>
        )
    }
};

export default Login;