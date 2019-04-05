import React from "react";

const Smurf = props => {
  // deleteSmurf function invocation
  // const whatever name = event => then onClick={this.whatever name}
  // added window confirmation message before deleting smurf
  // otherwise, just extract props.deleteSmurf(props.smurf.id)
  const deleteSmurf = event => {
    event.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${props.smurf.name}`)) {
      props.deleteSmurf(props.smurf.id);
    }
  };

  return (
    <div className="each-smurf">
      <h2>
        {props.name}
        <i onClick={deleteSmurf} class="fas fa-trash-alt delete-icon" />
      </h2>
      <p>
        <strong>{props.height} short</strong>
      </p>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
