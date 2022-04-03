import React, { Component } from "react";

type props = {
    name: string,
    iClass: string
}

class ButtonMat extends Component<props> {
    render() {
        return (
            <a className="waves-effect waves-light btn">{this.props.name}<i className={this.props.iClass}></i></a>
        )
    }
}

export default ButtonMat;