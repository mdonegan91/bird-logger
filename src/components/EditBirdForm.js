import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

EditBirdForm.propTypes = {
    Bird: PropTypes.object,
    onEditBird: PropTypes.func
  };

function EditBirdForm(props){
  const { bird } = props;

  function handleEditBirdFormSubmission(event) {
    event.preventDefault();
    props.onEditBird({name: event.target.name.value, 
        color: event.target.color.value, 
        location: event.target.location.value, 
        date: event.target.date.value,
        notes : event.target.notes.value,
        id: bird.id});
    }

    return (
        <React.Fragment>
          <ReusableForm 
            formSubmissionHandler={handleEditBirdFormSubmission} 
            buttonText="Update Bird" />
        </React.Fragment>
      );
}

export default EditBirdForm;