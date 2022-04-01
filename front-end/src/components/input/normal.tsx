import { Component } from "react";

type props ={
    type: string, 
    id: string, 
    name: string
}

class InputNormal extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-floating mb-3" >
                <input type="{this.props.type}" className="form-control" id="floatingInput"/>
                <label htmlFor="{this.props.id}">{this.props.name}</label>
            </div>
        );
    }
}

export default InputNormal;