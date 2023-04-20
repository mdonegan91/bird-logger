import React from "react";
import Bird from "./Bird";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BirdList(props){
  return (
    <React.Fragment>
      <Row>
        {props.birdList.map((bird) =>
        <Col md={4} className="mb-4">
          <Bird
          whenBirdClicked = { props.onBirdSelection }
          name={bird.name}
          color={bird.color}
          location={bird.location}
          date={bird.date}
          notes={bird.notes}
          id={bird.id} 
          key={bird.id} />
        </Col>
        )}
      </Row>
    </React.Fragment>
  );
}


BirdList.propTypes = {
  birdList: PropTypes.array,
  onBirdSelection: PropTypes.func
};

export default BirdList;