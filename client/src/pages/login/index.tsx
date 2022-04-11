import React, { Component } from "react";
import axios from "axios";

// LOCAL CSS
//import './login.css'

// IMAGE
import LogoLogin from "../../assets/img/logo_login.svg"

// COMPONENTS
import Input from "../../components/input/input";
import Check from "../../components/input/check";
import Submit from "../../components/button/submit";
import Css from "../../assets/style/style";


class Login extends Component {
    state = {
        email: String,
        password: String,
    }

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
        await axios.get(`http://localhost:5000/novocolaborador/findemail/${user.email}/${user.password}`).then((response)=>{
            console.log(response.data);
            
        })
        alert("data foi")
    };
    render() {
        return (
            <>
                <head>
                
                    // BOOTSTRAP 
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                
                    <title>Login</title>
                    <Css ref="./login.css"/>
                </head>
                
                <body>
                    <main>
                        <img src={LogoLogin} />

                        <Input div="form-floating mb-3" type="email" class="form-control" id="floatingInput" name="E-mail" fname={this.handleChangeEmail}/>

                        <Input div="form-floating mb-3" type="password" class="form-control" id="floatingPassword" name="Senha" fname={this.handleChangePassword}/>
                
                        <div className="opcao">
                            <div className="col-12">
                                <Check name="Lembrar de Mim"/>
                            </div>
                
                            <a href="#">Esqueci a senha</a>
                        </div>
                
                        <div className="col-12">
                            <Submit fname={this.handleSubmit} title="Log In" />
                        </div>
                    </main>
                </body>
            </>
        )
    }
};

export default Login;