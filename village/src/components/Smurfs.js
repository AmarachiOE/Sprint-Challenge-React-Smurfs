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
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf={this.props.deleteSmurf}
                  smurf={smurf}
                />  
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
