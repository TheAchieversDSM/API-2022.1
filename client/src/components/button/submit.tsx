import React ,{Component} from "react";

type props = {
    title: string,
    fname: any,
}

class Submit extends Component <props>{
    render() {
        return (
            <button className="btn btn-primary" type="submit" onSubmit={this.props.fname} >{this.props.title}</button>
        )
    }
}

export default Submit;