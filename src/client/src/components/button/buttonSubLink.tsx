import React, { Component } from "react";
import { Link } from "react-router-dom"

type props = {
    id: string,
    title: string,
    fname: any,
    link:string
}

class ButtonSubLink extends Component<props>{
    render() {
        return (
            <button id={this.props.id} className="btn btn-primary" type="submit" onClick={this.props.fname} ><Link to={this.props.link}>{this.props.title}</Link></button>
        )
    }
}

export default ButtonSubLink;