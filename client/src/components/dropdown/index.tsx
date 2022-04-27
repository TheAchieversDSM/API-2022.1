import React, { Component } from "react";

type props = {
    value: string,
    name: string
}

class Option extends Component<props> {
    render() {
        return (
            <>
                <option value={this.props.value}>{this.props.name}</option>
            </>
        )
    }
}

export default Option;