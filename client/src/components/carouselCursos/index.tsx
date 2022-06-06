import React, { Component } from "react";
import M from "materialize-css";
import axios from "axios";

type props = {
    href: any,
    name: any
}

class Cursos extends Component<props> {
    componentDidMount() {}
    render() {
        return (
            <>
            <a href={this.props.href} className="collection-item">{this.props.name}</a>
            </>
        );
    }
}

export default Cursos;