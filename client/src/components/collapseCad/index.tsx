import React, { Component } from "react";
import Input from "../../components/input/input";

type props = {
    title: any,
    div: string,
    type: string,
    class: string,
    id: string,
    name: string,
    fname: any,

}



class CollapseCad extends Component<props> {
    componentDidMount() {

    }
    render() {
        return (
            <>
                <li>
                    <div className="collapsible-header">{this.props.title}</div>
                    <div className="collapsible-body">
                        <div className={this.props.div} >
                            <input type={this.props.type} className={this.props.class} id={this.props.id} />
                            <label htmlFor={this.props.id}>{this.props.name}</label>
                        </div>
                    </div>
                </li>
            </>
        )
    }
}

export default CollapseCad;