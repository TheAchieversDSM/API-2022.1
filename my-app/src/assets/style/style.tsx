import React, { Component } from "react";

type props = {
    ref: string
}

class Css extends Component<props> {
    render() {
        return (
            <>
                <link rel="stylesheet" href={this.props.ref} />
            </>
        )
    }
}

export default Css;