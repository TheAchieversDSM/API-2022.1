import React, { Component } from "react";

type props ={
    name: string,
    fname: any,
    stateName: string,
}

class InputFile extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="file-field input-field">
                <div className="btn">
                    <span>Arquivo</span>
                    <input onChange={this.props.fname} name={this.props.stateName} type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path" placeholder={this.props.name} type="text"/>
                </div>
                </div>
        );
    }
}

export default InputFile;