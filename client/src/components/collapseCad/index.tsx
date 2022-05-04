import React, { Component } from "react";
import Input  from '../input/input';

type props = {
    title: any,
    
}


class CollapseCad extends Component<props> {
    componentDidMount() {

    }
    render() {
        return ( 
            <>
            <li>
                <div className="collapsible-header">{this.props.title}</div>
                <div className="collapsible-body">
                    <Input fname="" div="input-field col s12" id="nome" class="validate" type="text" name="" />  
                    <Input fname="" div="input-field col s6" id="nome" class="validate" type="text" name="" />  
                    
                </div>
            </li>
            </>
        )
    }
}

export default CollapseCad;