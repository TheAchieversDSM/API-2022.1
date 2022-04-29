import React, { Component } from 'react';
import OrgStruct from '../organoStruct/';
import OrganoNode from '../organoNode';
import axios from 'axios';

export default class OrganoChart extends Component {

    
    componentDidMount(){
 
    }

    render() {
        return (
            <div style={{height: '100%'}}>

                <OrgStruct  /> 
            </div>
        );
    }
}