import React, { Component } from "react";

type props = {
    title: any,
    desc1: any,
    desc2: any,
    desc3: any,
    desc4: any,
    desc5: any,
    desc6: any
}

class Collapse extends Component<props> {
    render() {
        return ( 
            <>
            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
            <li>
                <div className="collapsible-header">{this.props.title}</div>
                <div className="collapsible-body">
                    <p>{this.props.desc1}</p>
                    <p>{this.props.desc2}</p>
                    <p>{this.props.desc3}</p>
                    <p>{this.props.desc4}</p>
                    <p>{this.props.desc5}</p>
                    <p>{this.props.desc6}</p>
                </div>
            </li>
            </>
        )
    }
}

export default Collapse;