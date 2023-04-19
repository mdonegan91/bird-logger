import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='Bird name'
        />
        <br />

        <input 
          type='text'
          name='color'
          placeholder='Bird color'
        />
        <br />

        <input 
          type='text'
          name='location'
          placeholder='Sighting location'
        />
        <br />

        <input 
          type='text'
          name='date'
          placeholder='Sighting date'
        />
        <br />

        <textarea
          name='notes'
          placeholder='Sighting notes'
        />
        <br />

        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;