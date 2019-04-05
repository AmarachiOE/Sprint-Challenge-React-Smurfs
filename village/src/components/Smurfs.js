import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="container Smurfs-container">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="each-smurf">
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </div>
            );
          })}
        </ul>
        <Link to="/smurf-form" className="btn add-smurf">Add Smurf</Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
