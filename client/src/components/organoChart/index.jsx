import React, { Component } from 'react';
import OrgStruct from '../organoStruct/';
import OrganoNode from '../organoNode';
import axios from 'axios';

export default class OrganoChart extends Component {

    state = {
        colaboradores: []
    }
    componentDidMount() {

        axios.get("http://localhost:5000/infocolab/getAll").then((response) => {
            const colaboradores = response.data
            this.setState({ colaboradores });
            console.log(this.state.colaboradores);
        })



    }

    render() {
        function nodeCreate() {
            console.log("ffinaalmentte");
            for (let index = 0; index < this.state.colaboradores.length; index++) {
                const node = { id: this.state.colaboradores[index].con_id, name: this.state.colaboradores[index].con_nome, pid: "", title: this.state.colaboradores[index].car_descricao, img: "" }
                return (node)
            }
        }
        return (
            <div style={{ height: '100%' }}>

                <OrgStruct node = {[
                    nodeCreate()
                ]
                } />
            </div>
        );
    }
}