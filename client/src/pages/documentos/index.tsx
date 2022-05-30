import React, { Component } from 'react';
import axios from "axios";
import Css from '../../assets/style/style';
import General from '../../components/general';
import {getCookie } from '../../utils/cookieUtil/cookieUtil';
import Carousel from "../../components/carousel/index"


class Documentos extends Component {
    
    componentDidMount() {
        
    }

    render() {
        return(
            <>
                <General />
                <div className="conteudo">
                    <Carousel />
                </div>
            </>
        )
    }
}

export default Documentos;