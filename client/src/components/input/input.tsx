import React, { Component } from "react";

type props ={
    div: string;
    type: string, 
    class: string,
    id: string, 
    name: string,
    fname: any,
    stateName: string,
}

class Input extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.div} >
                <input type={this.props.type} className={this.props.class} name = {this.props.stateName} id={this.props.id} onChange={this.props.fname} />
                <label htmlFor={this.props.id}>{this.props.name}</label>
            </div>
        );
    }
}

export default Input;