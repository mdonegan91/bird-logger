import React from "react";
import PropTypes from "prop-types";

function BirdDetail(props) {
    const { bird, onClickingDelete } = props;
    return (
        <React.Fragment>
            <h1>Bird Details</h1>
            <h3>{bird.name}</h3>
            <h3>{bird.color}</h3>
            <h3>{bird.location}</h3>
            <h3>{bird.date}</h3>
            <h3>{bird.notes}</h3>
            <button onClick={props.onClickingEdit}>Update Bird Details</button>
            <button onClick={() => onClickingDelete(bird.id)}>Close Form</button>
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