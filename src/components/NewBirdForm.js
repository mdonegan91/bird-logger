import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewBirdForm(props){

  function handleNewBirdFormSubmission(event) {
    event.preventDefault();
    props.onNewBirdCreation({
      name: event.target.name.value,
      location: event.target.location.value,
      date: event.target.location.value,
      notes: event.target.notes.value,
      id: v4()
    });
}

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBirdFormSubmission} buttonText="New Bird!" />
    </React.Fragment>
  );
}

NewBirdForm.propTypes = {
  onNewBirdCreation: PropTypes.func
};

export default NewBirdForm;