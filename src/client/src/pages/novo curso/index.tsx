import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
import '../novo perfil/novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import InputValue from "../../components/input/inputValue";
import General from "../../components/general";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";
import { FormErrors } from "../../utils/formErrors/formErrors";

class NovoCurso extends Component {
    state = {
        cargos: [],
        curso_nome: "",
        car_id: "",
        curso_id: "",

        // VALIDAÇÃO
        formErrors: { curso_nome: '', car_id: ''},
        curso_nomeValid: false,
        car_idValid: false,
        formValid: false
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let curso_nomeValid = this.state.curso_nomeValid;
        let car_idValid = this.state.car_idValid;

        switch (fieldName) {
            case 'curso_nome':
                curso_nomeValid = value.length != 0;
                fieldValidationErrors.curso_nome = curso_nomeValid ? '' : ' inválido';
                break;
            case 'car_id':
                car_idValid = value.length != 0;
                fieldValidationErrors.car_id = car_idValid ? '' : ' inválido';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            curso_nomeValid: curso_nomeValid,
            car_idValid: car_idValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.curso_nomeValid && this.state.car_idValid });
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);

                const cargos = res.data

                this.setState({ cargos })
            }
        )
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);

        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            curso_nome: this.state.curso_nome,
            car_id: this.state.car_id
        }

        axios.post("http://localhost:5000/curso/createNewCurso", data).then((res) => {
            M.toast({ html: res.data, classes: "green darken-4 rounded" })

            axios.get(`http://localhost:5000/curso/getCursoIdByName/${this.state.curso_nome}`).then((res) => {
                const curso_id = res.data[0].trilha_curso_id
                this.setState({ curso_id })
            })

            axios.get(`http://localhost:5000/cargos/getAllUserIdFromCargo/${this.state.car_id}`).then((res) => {
                console.log(res.data);
                for (let index = 0; index < res.data.length; index++) {
                    const curso_data = {
                        trilha_curso_id: this.state.curso_id,
                        colaborador_col_id: res.data[index].col_id
                    }
                    axios.post(`http://localhost:5000/trilha/createNewTrilha`, curso_data).then((res) => {
                        console.log(res.data);
                    })
                }
            })
            this.setState({
                curso_nome: "",
                car_id: "",
            })
        })
    }

    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Curso</h3>
                    <div className="form">
                        <div className="teste1 row">
                            <form action="">
                                <InputValue value={this.state.curso_nome} lenght={100} div="input-field" type="text" class="validate" stateName="curso_nome" id="curso" fname={this.handleChange} name="Nome do curso" />

                                <select onChange={this.handleChange} name="car_id" className="browser-default" id="car_id" >
                                    <option value="" disabled selected>Cargo que o curso será destinado</option>
                                    {this.state.cargos.map(car => <option key={car.car_id} value={car.car_id}>{car.car_descricao}</option>)}
                                </select>
                            </form>
                            
                            <FormErrors formErrors={this.state.formErrors} />
                            
                            <div className="botao-novoperfil">
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={!this.state.formValid}>Criar!</button>

                                 {/*<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Criar!</button>
                                <ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar!" iClass="{}" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoCurso;