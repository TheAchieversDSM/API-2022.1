import React, { Component } from "react";

import axios from "axios";

// LOCAL CSS
import './style.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_login.svg"

// COMPONENTS
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import ButtonMat from "../../components/button/buttonMat";


class Login extends Component {
    state = {
        email: String,
        password: String,
    }

    handleChange = event => {
        this.setState({
            email: event.target.value,
            password: event.target.value,        
        });
    };
    handleSubmit = async(event) => { 
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        await axios.post("http://localhost:5000/login", user)
        alert("data foi")
    };

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

                        <Input div="input-field col s12" type="email" id="email" name="E-mail" class="validate" fname={this.handleChange} />

                        <Input div="input-field col s12" type="password" id="password" name="Senha" class="validate" fname={this.handleChange}/>
                
                        <div className="opcao">
                            <div className="col-12">
                                <Check name="Lembrar de Mim"/>
                            </div>
                
                            <a href="#">Esqueci a senha</a>
                        </div>
                
                        <div className="col-12">
                            <ButtonMat class="waves-effect waves-light btn" fname="Submit" name="Login" iClass={""} />
                        </div>
                    </main>
                </body>
            </>
        )
    }
};

export default Login;