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
    value?: string
}

class InputCheck extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.div} id={this.props.id}>
                <input maxLength={this.props.lenght} type={this.props.type} className={this.props.class} name = {this.props.stateName} id={this.props.id} onChange={this.props.fname} value={this.props.value} />
                <label htmlFor={this.props.id}>{this.props.name}</label>
            </div>
        );
    }
}

export default InputCheck;