import React, { Component } from "react";
import {Link} from "react-router-dom";

type props = {
    link: string,
    name: string
}

class Caminho extends Component<props> {
    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
                <script src="https://kit.fontawesome.com/4d3a0277e3.js" crossOrigin="anonymous"></script>
                
                <h4><Link to={this.props.link}><a>{this.props.name}</a></Link></h4>
            </>
        )
    }
}

export default Caminho;