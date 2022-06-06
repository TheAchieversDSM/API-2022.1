import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import { cnpj, cpf } from "cpf-cnpj-validator";

// LOCAL CSS
import './cursos.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat';
import ButtonSubLink from "../../components/button/buttonSubLink";
import Check from "../../components/input/check";
import CheckChecked from "../../components/input/checkChecked";
import General from "../../components/general";
import Collapse from "../../components/collapse";
import Css from "../../assets/style/style";
import React from "react";
import { ProgressBarContainer } from "../../components/progressBar/progressBar";
import ReactPlayer from 'react-player';
class Cursos extends Component {
    state = {
        colaborador: [],
        historico: [],
        cargo: [],
        departamento: [],
        info_academica: [],
        head_colaborador: [],
        car_id: String,
        dep_id: String,
        id: getCookie("id")
    };
    handleSubmit: any;

    componentDidMount() {
        let url = window.location.href.split("/")
        if (url[3] === "PerfilColaborador") {
            this.state.id = url[4]
        }

        axios.get(`http://localhost:5000/infocolab/getInfoById/${this.state.id}`)
            .then((res) => {
                console.log(res.data);
                const colaborador = res.data.user;
                const head_colaborador = res.data.head_user;
                const historico = res.data.historico
                let dep_id = res.data.user[0].departamento_dep_id
                let car_id = res.data.user[0].cargo_car_id

                axios.get(`http://localhost:5000/cargos/userCargo/${car_id}`).then((res) => {
                    console.log(res.data);
                    const cargo = res.data;
                    this.setState({ cargo });
                })

                axios.get(`http://localhost:5000/departamentos/userDep/${dep_id}`).then((res) => {
                    console.log(res.data);
                    const departamento = res.data;
                    this.setState({ departamento });
                }
                )

                console.log(dep_id);

                this.setState({ historico })
                this.setState({ colaborador });
                this.setState({ head_colaborador });
            }
            )

        axios.get(`http://localhost:5000/infoacademica/getInfoAcademica/${this.state.id}`).then((res) => {
            console.log(res.data);
            const info_academica = res.data;
            this.setState({ info_academica });
        })
    }

    render() {

        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <ProgressBarContainer/>
               
            </>
        )
    }
}

export default Cursos;