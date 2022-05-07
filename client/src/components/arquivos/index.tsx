import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import React from 'react';
import { Component } from 'react';



class FormularioUpload extends Component {
    private arquivo: File

    public receberArquivo(evento) {
        this.arquivo = evento.target.files[0]
    }


    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <form action='/upload' >
                                <div className="file-field input-field">
                                    <div className="waves-effect waves-light btn" >
                                        <input type="file" />

                                        <input type="submit">ENVIAR</input>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormularioUpload