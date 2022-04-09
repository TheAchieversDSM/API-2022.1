import React, { Component } from "react";

type props = {
    class: string,
    name: string,
}

class Button extends Component<props> {
    render() {
        return (
            <button type="button" className={this.props.class}>{this.props.name}</button>
        )
    }
}

export default Button;