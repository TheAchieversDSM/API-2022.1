import React, { Component } from "react";

type props = {
    div: string;
    type: string, 
    class: string,
    id: string, 
    name: string,
    fname: any,
    stateName: string,
    lenght: number,
    value ?: string
}

class Input extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.div} >
                <input maxLength={this.props.lenght} value={this.props.value} type={this.props.type} className={this.props.class} name = {this.props.stateName} id={this.props.id} onChange={this.props.fname} required />
                <label htmlFor={this.props.id}>{this.props.name}</label>
            </div>
        );
    }
}

export default Input;