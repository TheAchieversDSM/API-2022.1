import React, { Component } from "react";

type props = {
    name: string,
    value :string
}

class CheckChecked extends Component<props> {
    render() {
        return (
            <label>
                <input type="checkbox" checked value={this.props.value} />
                <span>{this.props.name}</span>
            </label>
        )
    }
}

export default CheckChecked;