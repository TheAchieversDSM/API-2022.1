import React, { Component } from "react";
import {Link} from "react-router-dom";

type props = {
    class: string,
    name: string,
    link: string
}

class SideNav extends Component<props> {
    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
                <script src="https://kit.fontawesome.com/4d3a0277e3.js" crossOrigin="anonymous"></script>
                
                <li><Link to={this.props.link}><a><i className={this.props.class}></i>{this.props.name}</a></Link></li>
            </>
        )
    }
}

export default SideNav;