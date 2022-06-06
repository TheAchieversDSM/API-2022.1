import React, { Component } from "react";

type props = {
    nome: String,
    departamento: String,
    cargo: String,
    urlVisualizacao: any,
    urlEdicao: any
}

class TRSem extends Component<props>{
    render() {
        return (
            <tr>
                <td><a href={this.props.urlVisualizacao}>{this.props.nome}</a></td>
                <td>{this.props.departamento}</td>
                <td>{this.props.cargo}</td>
                {/*<td>
                    <a href={this.props.urlEdicao}>
                        <i className="fa-solid fa-pencil"></i>
                    </a>
                </td>
                <td>
                    <a href="#">
                        <i className="fa-solid fa-xmark "></i>
                    </a>
                </td>*/}
            </tr>
        )
    }
}

export default TRSem;