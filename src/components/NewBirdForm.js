import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
// import ColorfulBirds from "./../img/colorfulBirds.jpg"
import Button from 'react-bootstrap/Button';

function NewBirdForm(props){

  function handleNewBirdFormSubmission(event) {
    event.preventDefault();
    props.onNewBirdCreation({
      name: event.target.name.value,
      color: event.target.color.value,
      location: event.target.location.value,
      date: event.target.date.value,
      notes: event.target.notes.value,
      id: v4()
    });
}

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBirdFormSubmission}
        buttonText={<Button variant="primary" style={{margin: '10px'}}>Add Bird</Button>} />
    </React.Fragment>   
  );
}

NewBirdForm.propTypes = {
  onNewBirdCreation: PropTypes.func
};

export default NewBirdForm;

// <br />
// <img src={ColorfulBirds} height={300} alt="Two colorful birds" />