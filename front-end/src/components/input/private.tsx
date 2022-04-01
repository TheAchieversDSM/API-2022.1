import { Component } from "react";

class InputPrivate extends Component<{ type: string, id: string, name: string}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-floating mb-3" >
                <input type="{this.props.type}" className="form-control" id="floatingPassword"/>
                <label htmlFor="{this.props.id}">{this.props.name}</label>
            </div>
        );
    }
}

export default InputPrivate;