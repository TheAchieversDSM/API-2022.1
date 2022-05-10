import React, { Component } from "react";

type props = {
    nome: String,
    departamento: String,
    cargo: String
}

class TR extends Component<props>{
    render() {
        return (
            <tr>
                <td>{this.props.nome}</td>
                <td>{this.props.departamento}</td>
                <td>{this.props.cargo}</td>
            </tr>
        )
    }
}

export default TR;