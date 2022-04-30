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
        return (
            <div style={{ height: '100%' }}>

                <OrgStruct />
            </div>
        );
    }
}