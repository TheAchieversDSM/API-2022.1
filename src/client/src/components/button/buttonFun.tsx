import React, { Component } from "react";

type props = {
    class: string,
    name: string,
    type: any,
    label: string,
    iClass: string,
    func: any
}

class Button extends Component<props> {
    render() {
        return (
            <button className={this.props.class} type={this.props.type} name={this.props.name} onClick={this.props.func}>{this.props.label}
                <i className={this.props.iClass}></i>
            </button>
    
        )
    }
}

export default Button;