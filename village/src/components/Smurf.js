import React from 'react';

const Smurf = props => {

  // deleteSmurf function invocation
  // const whatever name = event => then onClick={this.whatever name}
  const deleteSmurf = event => {
    event.preventDefault();
    props.deleteSmurf(props.smurf.id)
  }

  return (
    <div className="each-smurf">
      <h2>
        {props.name}  
        <i onClick={deleteSmurf} class="fas fa-trash-alt delete-icon" ></i>
      </h2>
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

