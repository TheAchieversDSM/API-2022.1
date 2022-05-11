import React, { Component } from "react";

type props = {
    nome: String,
    departamento: String,
    cargo: String,
    url: any 
}

class TR extends Component<props>{
    render() {
        return (
            <tr>
                <td><a href={this.props.url}>{this.props.nome}</a></td>
                <td>{this.props.departamento}</td>
                <td>{this.props.cargo}</td>
            </tr>
        )
    }
}

export default TR;