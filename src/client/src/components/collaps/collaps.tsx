import React, { Component } from "react";
import axios from "axios"
type props = {
    title: any,
    title2: any,
    desc1: any,
    desc2: any,
    desc3: any,
    desc4: any,
    desc5: any,
    desc6: any,
    desc7: any,
    type: any,
    class: any,
    id: any,
    name1: any,
    name2: any,
    name3: any,
    fname: any
}

class Collaps extends Component<props> {
    state = {
        departamento: [],
        cargo: []

        
    };
    componentDidMount() {
        axios.get(`http://localhost:5000/departamentos/`)
            .then((res) => {
                console.log(res.data);
                
               const departamento = res.data
               
               this.setState({departamento})
            }
        )
        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);
                
               const cargo = res.data
               
               this.setState({cargo})
            }
        )

    }

    render(){
        return(
            
                <>
            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
            <li>
                <div className="collapsible-header">{this.props.title}</div>
                <div className="collapsible-body">
                <h4>{this.props.title2}</h4>
                    <p>{this.props.desc1}</p>
                    <p>{this.props.desc2}</p>
                    <p>{this.props.desc3}</p>
                    <p>{this.props.desc4}</p>
                    <p>{this.props.desc5}</p>
                    <p>{this.props.desc6}</p>
                    <p>{this.props.desc7}</p>

                    <hr/>
                    <h4>Contato</h4>
                    <p>E-mail: </p>
                    <p>DDD: </p>
                    <p>Telefone: </p>

                    <hr/>
                    <h4>Endereço</h4>
                    <p>Rua: </p>
                    <p>Complemento: </p>
                    <p>Bairro: </p>
                    <p>CEP: </p>
                    <p>Cidade: </p>
                    <p>Estado: </p>
                    <p>Região: </p>

                    <hr/>
                    <select className="browser-default" id="departamento">
                        <option value="" disabled selected>Departamento</option>
                        { this.state.departamento.map(departamento => <option key={departamento.dep_id} value={departamento.dep_id}>{departamento.dep_descricao}</option>)}
                    </select>

                    <select className="browser-default" id="departamento">
                        <option value="" disabled selected>Cargo</option>
                        { this.state.cargo.map(car => <option key={car.car_id} value={car.dep_id}>{car.car_descricao}</option>)}
                    </select>

                    <select className="browser-default" id="departamento">
                        <option value="" disabled selected>Contratação</option>
                        <option value="CLT">CLT</option>
                        <option value="PJ">PJ</option>
                        <option value="temporario">Temporário</option>
                        <option value="estagiario">Estagiário</option>
                    </select>
                    

                    <hr/>
                    <button type="submit" className="btn waves-effect waves-light">Aceitar</button>
                    <button type="button" className="waves-effect waves-light btn">Recusar</button>

                </div>
            </li>
            </>
            
        )
    }
}


export default Collaps;