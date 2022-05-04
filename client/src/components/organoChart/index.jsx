import React, { Component } from 'react';
import OrgStruct from '../organoStruct/';
import axios from 'axios';
import { nodeCreate } from '../../utils/organoNode/organoNode';

export default class OrganoChart extends Component {

    state = {
        colaboradores: [],
    }
    componentDidMount() {
        axios.get("http://localhost:5000/infocolab/getAll").then((response) => {
            const colaboradores = response.data
            this.setState({ colaboradores });
            console.log(this.state.colaboradores);
            console.log(this.state.colaboradores.length);

          }
        )
    }


    render() {
        const nodesCreate = nodeCreate(this.state.colaboradores.length,this.state.colaboradores)
        return (
            <div style={{ height: '100%' }}>
                <OrgStruct node={nodesCreate} />
            </div>
        );

    }
}