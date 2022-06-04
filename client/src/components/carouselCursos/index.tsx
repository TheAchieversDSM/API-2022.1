import React, { Component } from "react";
import M from "materialize-css";

// IMAGE
import JS from "../../assets/img/JavaScript.png"
import Rt from "../../assets/img/React.png"
import LGPD from "../../assets/img/LGPD.png"
import GitHub from "../../assets/img/logotipo-do-github.png"
import Typescript from "../../assets/img/Typescript.png"

type props = {
}

class Cursos extends Component<props> {
    Carousel: Element;
    componentDidMount() {
        const options = {
            duration: 300,
            onCycleTo: () => {
                console.log("New Slide");
            }
        };
        M.Carousel.init(this.Carousel, options);

        //Instance Plugin
        // let instance = M.Carousel.getInstance(this.Carousel);
        // instance.next(2);
    }



    render() {
        return (
            <div
                ref={Carousel => {
                    this.Carousel = Carousel;
                }}
                className="carousel"
            >
                <a className="carousel-item  center-align">
                    <div className="col s12 center-align">
                        <img src={JS} width={200} />
                        <div className="col s12 center-align">
                            <p><label>Javascript</label></p>
                        </div>    
                    </div>
                </a>

                <a className="carousel-item center-align">
                    <div className="col s12 center-align">
                        <img src={Rt} width={200}/>
                        <div className="col s12 center-align">
                            <p><label>React</label></p>
                        </div>
                    </div>
                </a>

                <a className="carousel-item center-align">
                    <div className="col s12 center-align">
                        <img src={LGPD} width={250}/>
                        <div className="col s12 center-align">
                            <p><label>LGPD</label></p>
                        </div>
                    </div>
                </a>

                <a className="carousel-item  center-align">
                    <div className="col s12 center-align">
                        <img src={GitHub} width={220}/>
                        <div className="col s12 center-align">
                            <p><label>GitHub</label></p>
                        </div>
                    </div>
                </a>

                <a className="carousel-item  center-align">
                    <div className="col s12 center-align">
                        <img src={Typescript} width={220}/>
                        <div className="col s12 center-align">
                            <p><label>Typescript</label></p>
                        </div>
                    </div>
                </a>
               
            </div>
        );
    }
}

export default Cursos;