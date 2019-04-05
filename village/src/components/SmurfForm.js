import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    // invoking addSmurf function from App.js
    this.props.addSmurf(event, this.state.smurf);

    // clears from after submission
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  handleInputChange = event => {
    event.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    return (
      <div className="container SmurfForm-container">
        <h1>Add a New Smurf</h1>
        <form onSubmit={this.addSmurf} className="SmurfForm">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            type="string"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            type="string"
          />
          <button type="submit" className="btn form-btn">
            Add Smurf to Village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
