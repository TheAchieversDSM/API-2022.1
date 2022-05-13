import React from "react";

class InputAdd extends React.Component {
  constructor(props) {
    super(props)
    this.label = ""
    this.state = { 
       formValues: [{ label: "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { label: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  }

  render() {

    return (
        <form  onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>{this.props.label} </label>
              <input type="text" name={this.props.props} value={element.name || ""} onChange={e => this.handleChange(index, e)} />
              
              {
                index ? 
                    <button type="button" className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}

          <div className="button-section">
              <button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    );
  }
}
export default InputAdd;