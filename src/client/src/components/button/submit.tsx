import React ,{Component} from "react";
import {Link} from "react-router-dom"

type props = {
    title: string,
    fname: any,
    link: string
}

class Submit extends Component <props>{
    render() {
        return (
          <Link to={this.props.link}><button className="btn btn-primary" type="submit" onClick={this.props.fname} >{this.props.title}</button></Link>
        )
    }
}

export default Submit;