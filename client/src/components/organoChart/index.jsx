import React, { Component } from 'react';
import OrgStruct from '../organoStruct/';
import axios from 'axios';
import { nodeCreate } from '../../utils/organoNode/organoNode';

export default class OrganoChart extends Component {

    state = {
        departamentos: [],
        colaboradores: [],
    }
    

    componentWillMount() {   
        axios.get("http://localhost:5000/infocolab/getAll").then((response) => {
            const colaboradores = response.data
            this.setState({ colaboradores });
            console.log(this.state.colaboradores);
            console.log(this.state.colaboradores.length);

          }
          
        )
        axios.get("http://localhost:5000/departamentos").then((response)=>{
            const departamentos = response.data
            this.setState({ departamentos }); 
        })
    }

    handleChangeDep = event =>{
        let dep_id  = event.target.value
        axios.get(`http://localhost:5000/infocolab/getAllByDep/${dep_id}`).then((response)=>{
            console.log(response.data);
            const colaboradores = response.data
            this.setState({ colaboradores });
            this.forceUpdate();
         })
    }

    render() {
        const nodesCreate = nodeCreate(this.state.colaboradores.length,this.state.colaboradores)
        return (
            <div>

                <select className="browser-default" onChange={this.handleChangeDep}>
                    <option value="" disabled selected>Escolha o departamento</option>
                    {this.state.departamentos.map(departamento => <option key={departamento.dep_id} value={departamento.dep_id}>{departamento.dep_descricao}</option>)}
                </select>
                <div style={{ height: '100%' }}>

                    <OrgStruct node={nodesCreate} />
             </div>
                  
            </div>
        );

    }
}