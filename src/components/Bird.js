import React from "react";
import PropTypes from "prop-types";
import Toast from 'react-bootstrap/Toast';
// import Card from 'react-bootstrap/Card';

function Bird(props){
  return(
    <React.Fragment>
      <Toast className="mb-4">
      <Toast.Header closeButton={false}>
        <div onClick={() => props.whenBirdClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <p>Color: {props.color}</p>
        <p>Location: {props.location}</p>
        <p>Date: {props.date}</p>
        <p>Notes: {props.notes}</p>
        </div>
      </Toast.Header>
            {/* <Toast.Body>{props.desc}</Toast.Body> */}
        </Toast>
    </React.Fragment>
  );
}

Bird.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string, 
  notes: PropTypes.string,
  id: PropTypes.string,
  whenBirdClicked: PropTypes.func
};

export default Bird;

