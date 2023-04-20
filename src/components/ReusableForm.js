import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReusableForm(props) {
  return(
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId="name">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter bird name" />
        </Form.Group>

        <Form.Group controlId="color">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter bird color" />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter sighting location" />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label></Form.Label>
          <Form.Control type="date" placeholder="Enter sighting date" />
        </Form.Group>

        <Form.Group controlId="notes">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter sighting notes" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{margin: '10px'}}>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;