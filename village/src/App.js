import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // GET data
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(res => {
      console.log(res.data);
      this.setState({ smurfs: res.data });
    });
  }

  // POST data
  addSmurf = (event, smurf) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
        alert(`Congrats! You've added ${smurf.name} to the village!`);
        // redirect to home
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.resolve);
      });
  };

  // DELETE data
  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
        // redirect to home
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.resolve);
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/" activeClassName="active-nav">
            Village
          </NavLink>
          <NavLink to="/smurf-form" activeClassName="active-nav">
            Add Smurf
          </NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />

        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
