import React, { Component } from "react";

type props = {
    name: string,
    value :string,
    fname: any,
}

class Check extends Component<props> {
    render() {
        return (
            <label>
                <input onChange={this.props.fname} type="checkbox"  value={this.props.value} />
                <span>{this.props.name}</span>
            </label>
        )
    }
}

export default Check;