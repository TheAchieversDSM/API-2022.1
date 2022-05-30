import React, { Component } from "react";
import M from "materialize-css";
type props = {
}
    
class Carousel extends Component<props> {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
          });
    }

    render() {
        return (
            <>
                <div className="carousel carousel-slider center">
                    <div className="carousel-item red white-text">
                        <h2>Normas de Treinamento e Desenvolvimento</h2>
                        <h1><i className="fa-solid fa-chalkboard-user"></i></h1>
                        <a className="btn waves-effect white grey-text darken-text-2" target="_blank" href="https://drive.google.com/file/d/1RpqbTCcnuoqe57E-UMdkKcilXxaYaZXe/view?usp=sharing">Visualizar PDF</a>
                    </div>

                    <div className="carousel-item amber white-text">
                        <h2>Código de Conduta para Funcionários</h2>
                        <h1><i className="fa-solid fa-people-roof"></i></h1>
                        <a className="btn waves-effect white grey-text darken-text-2" ref="https://drive.google.com/file/d/1LYjyguViZptkdUja4xZAl1Rj-_mvpGUO/view?usp=sharing">Visualizar PDF</a>
                    </div>

                    <div className="carousel-item green white-text">
                        <h2>Normas de Benefícios</h2>
                        <h1><i className="fa-solid fa-face-grin-wide"></i></h1>
                        <a className="btn waves-effect white grey-text darken-text-2" ref="https://drive.google.com/file/d/1LYjyguViZptkdUja4xZAl1Rj-_mvpGUO/view?usp=sharing">Visualizar PDF</a>
                    </div>

                    <div className="carousel-item blue white-text">
                        <h2>Normas de Desligamento e Afastamento</h2>
                        <h1><i className="fa-solid fa-user-xmark"></i></h1>
                        <a className="btn waves-effect white grey-text darken-text-2" ref="https://drive.google.com/file/d/1QWFfPkypCY19rUPKscM8b-c7LR87fkob/view?usp=sharing">Visualizar PDF</a>
                    </div>

                    <div className="carousel-item blue white-text">
                        <h2>Normas de Recrutamento e Seleção</h2>
                        <h1><i className="fa-solid fa-person-circle-plus"></i></h1>
                        <a className="btn waves-effect white grey-text darken-text-2" ref="https://drive.google.com/file/d/1teymr5dNYITXHJ70eY3Vl1G80hDdeaun/view?usp=sharing">Visualizar PDF</a>
                    </div>

                    <div className="carousel-item blue white-text">
                        <h2>LGPD</h2>
                        <h1><i className="fa-solid fa-file-shield"></i></h1>
                        <a className="btn waves-effect white grey-text darken-text-2" ref="https://drive.google.com/file/d/1gMaoylG8icXhcGCiCYXVrMIR_ZEagz1G/view?usp=sharing">Visualizar PDF</a>
                    </div>

                </div>
            </>
        )
    }
}

export default Carousel;