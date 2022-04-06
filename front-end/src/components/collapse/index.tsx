import React, { Component } from "react";

type props = {
    title: string,
    desc: string
}

class Collapse extends Component<props> {
    render() {
        return (
            <li>
                <div className="collapsible-header">{this.props.title}</div>
                <div className="collapsible-body"><p>{this.props.desc}</p></div>
            </li>
        )
    }
}

export default Collapse;