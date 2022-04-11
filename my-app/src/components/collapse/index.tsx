import React, { Component } from "react";

type props = {
    title: string,
    desc: string
}

class Collapse extends Component<props> {
    render() {
        return ( 
            <>
            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
            <li>
                <div className="collapsible-header">{this.props.title}</div>
                <div className="collapsible-body"><p>{this.props.desc}</p></div>
            </li>
            </>
        )
    }
}

export default Collapse;