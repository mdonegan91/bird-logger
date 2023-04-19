import React from "react";
import PropTypes from "prop-types";

function Bird(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBirdClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.color}</p>
        <p>{props.location}</p>
        <p>{props.date}</p>
        <p>{props.notes}</p>
      </div>
    </React.Fragment>
  );
}

Bird.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.instanceOf(Date), //find React date function??
  notes: PropTypes.string,
  id: PropTypes.string,
  whenBirdClicked: PropTypes.func
};

export default Bird;