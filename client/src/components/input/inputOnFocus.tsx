import React, { Component } from "react";

type props = {
    div: string;
    type: string, 
    class: string,
    id: string, 
    name: string,
    focus: any,
    stateName: string,
    lenght: number,
}

class InputOnFocus extends Component<props> {
      render() {
        return (
            <div className={this.props.div}>
                <input maxLength={this.props.lenght} type={this.props.type} onBlur={this.props.focus} className={this.props.class} name = {this.props.stateName} id={this.props.id} />
                <label htmlFor={this.props.id}>{this.props.name}</label>
            </div>
        );
    }
}

export default InputOnFocus;