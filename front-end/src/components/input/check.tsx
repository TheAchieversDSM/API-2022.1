import { Component } from "react";

class Check extends Component<{ label: string }> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label className="form-check-label" htmlFor="invalidCheck">
                    {this.props.label}
                </label>
            </div>
        )
    }
}

export default Check;