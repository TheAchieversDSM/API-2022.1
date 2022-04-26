import React, { Component } from "react";
import axios from "axios";

import { setCookie, getCookie} from "../../utils/cookieUtil/cookieUtil";
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
        password: String,
        loggedin: false
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
                setCookie("token", response.data.token);
                setCookie("acesso", response.data.user[0].con_precad)
                setCookie("id", response.data.user[0].con_id);
                this.setState({
                    loggedin: true
                })
                console.log(getCookie("token"));
                console.log(getCookie("id"));
                console.log(getCookie("acesso"));
            }
        })
    };

    isLoggedin = () =>{
        if(this.state.loggedin == true){
            return <LoginRoute redirect="/home"/>
        }
        else{
            return(null)
        }
    }

    render() {    
        return (
            <>
            <this.isLoggedin/>
                <main>
                    <img src={LogoLogin} />

                <form onSubmit={this.isLoggedin} >
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
                      <Submit fname={this.handleSubmit} title="Log In" />
                    </div>
                </form>
                </main>
            </>
        )
    }
};

export default Login;