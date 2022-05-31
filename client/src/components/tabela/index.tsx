import React, { Component } from "react";

type props = {
    nome: String,
    departamento: String,
    cargo: String,
    urlVisualizacao: any,
    urlEdicao: any 
}

class TR extends Component<props>{
    render() {
        return (
            <tr>
                <td><a href={this.props.urlVisualizacao}>{this.props.nome}</a></td>
                <td>{this.props.departamento}</td>
                <td>{this.props.cargo}</td>
                <td><a href={this.props.urlEdicao}>Editar</a></td>
            </tr>
        )
    }
}

export default TR;