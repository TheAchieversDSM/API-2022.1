import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import Carousel from "../../components/carousel/index"
import { appendScript } from '../../utils/append/appendScript';


class Documentos extends Component {
    render() {
        return(
            <>
                <General />
                
                <div className="conteudo">
                    <h3>Documentos</h3>
                    <Carousel />
                </div>
            </>
        )
    }
}

export default Documentos;