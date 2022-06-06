import React, { Component } from "react";

type props = {
    value: string,
    name: string,
    function: any
}

class Option extends Component<props> {
    render() {
        return (
            <>
                <option onSelect={this.props.function} value={this.props.value}>{this.props.name}</option>
            </>
        )
    }
}

export default Option;