import React from "react";
import Bird from "./Bird";
import PropTypes from "prop-types";

function BirdList(props){
  return (
    <React.Fragment>
      {props.birdList.map((bird) =>
      <Bird
        whenBirdClicked = { props.onBirdSelection }
        name={bird.name}
        color={bird.color}
        location={bird.location}
        date={bird.date}
        notes={bird.notes}
        id={bird.id} 
        key={bird.id} />
      )}
      </React.Fragment>
  );
}

BirdList.propTypes = {
  birdList: PropTypes.array,
  onBirdSelection: PropTypes.func
};

export default BirdList;