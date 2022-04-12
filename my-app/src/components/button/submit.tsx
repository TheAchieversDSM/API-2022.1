import React, { Props } from "react";
import { Component } from "react";

type props = {
    title: string
}

class Submit extends Component<props>{
    render() {
        return (

            <button className="btn waves-effect waves-light" type="submit" name="action">{this.props.title}</button>
            
        )
    }
}

export default Submit;