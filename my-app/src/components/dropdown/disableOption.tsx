import React, { Component } from "react";

type props = {
    disableValue: string,
    disableNome: string
}

class DisableOption extends Component<props> {
    render() {
        return (
            <option value={this.props.disableValue} disabled selected>{this.props.disableNome}</option>
        )
    }
}

export default DisableOption;