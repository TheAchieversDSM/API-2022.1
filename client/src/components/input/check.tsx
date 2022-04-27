import React, { Component } from "react";

type props = {
    name: string,
    value :string
}

class Check extends Component<props> {
    render() {
        return (
            <label>
                <input type="checkbox" value={this.props.value} />
                <span>{this.props.name}</span>
            </label>
        )
    }
}

export default Check;