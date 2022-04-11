import React, { Component } from "react";

type props = {
    class: string,
    name: string,
    iClass: string
}

class ButtonMat extends Component<props> {
    render() {
        return (
            <a className={this.props.class}>{this.props.name}<i className={this.props.iClass}></i></a>
        )
    }
}

export default ButtonMat;