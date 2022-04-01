import { Component } from "react";

class Button extends Component<{ title: string }>{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className="btn btn-primary" type="submit">{this.props.title}</button>
        )
    }
}

export default Button;