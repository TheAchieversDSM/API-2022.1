import React ,{Component} from "react";
import {Link} from "react-router-dom"

type props = {
    title: string,
    fname: any
}

class Submit extends Component <props>{
    render() {
        return (
            <button id="" className="btn btn-primary" type="submit" onClick={this.props.fname} >{this.props.title}</button>
        )
    }
}

export default Submit;