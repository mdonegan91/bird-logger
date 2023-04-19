import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function BirdDetail(props) {
    const { bird, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Bird Details</h1>
            <h3>Bird Name: {bird.name}</h3>
            <h3>Color: {bird.color}</h3>
            <h3>Location of sighting: {bird.location}</h3>
            <h3>Date of sighting: {bird.date}</h3>
            <h3>Notes: {bird.notes}</h3>
            <Button variant="primary" onClick={props.onClickingEdit} style={{margin: '10px'}}>Update Bird Details</Button>{' '}
            <Button variant="danger" onClick={() => onClickingDelete(bird.id)} style={{margin: '10px'}}>Delete Bird</Button>
            <hr />
        </React.Fragment>
    );
}

BirdDetail.propTypes = {
    bird: PropTypes.object,
    onClickingDelete: PropTypes.func ,
    onClickingEdit: PropTypes.func
};

export default BirdDetail;