import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h2>{props.name}</h2>
      <p><strong>{props.height} short</strong></p>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

