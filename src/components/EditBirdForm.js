import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';


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
        <Button variant="primary" style={{margin: '10px', backgroundColor: 'red', border: 'none', boxShadow: 'none'}} onClick={props.onClickingCancel}>Edit Bird</Button>
      </React.Fragment>
    );
}

export default EditBirdForm;