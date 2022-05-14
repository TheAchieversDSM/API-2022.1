import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

type props = {
    class: string,
    name: string,
    iClass: string,
    fname: any,

}

class ButtonLink extends Component<props> {
    render() {
        return (
            <a className={this.props.class} onClick={this.props.fname} ><Link to="/home" >{this.props.name}<i className={this.props.iClass}></i></Link></a>
        )
    }
}

export default ButtonLink;