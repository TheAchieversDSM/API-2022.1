import React, { Component } from "react";

type props = {
    name: string
}

class Check extends Component<props> {
    render() {
        return (
            <label>
                <input type="checkbox" />
                <span>{this.props.name}</span>
            </label>
        )
    }
}

export default Check;