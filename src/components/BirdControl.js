import React from "react";
import NewBirdForm from "./NewBirdForm";
import BirdList from "./BirdList";
import BirdDetail from "./BirdDetail";
import EditBirdForm from "./EditBirdForm";
import Button from 'react-bootstrap/Button';

class BirdControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBirdList: [],
      selectedBird: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBird != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBird: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewBirdToList = (newBird) => {
    const newMainBirdList = this.state.mainBirdList.concat(newBird);
    this.setState({mainBirdList: newMainBirdList, formVisibleOnPage: false});
  }

  handleChangingSelectedBird = (id) => {
    const selectedBird = this.state.mainBirdList.filter(bird => bird.id === id)[0];
    this.setState({selectedBird: selectedBird});
  }

  handleDeletingBird = (id) => {
    const newMainBirdList = this.state.mainBirdList.filter(bird => bird.id !== id);
    this.setState({
      mainBirdList: newMainBirdList,
      selectedBird: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingBirdInList = (birdToEdit) => {
    const editedMainBirdList = this.state.mainBirdList
      .filter(bird => bird.id !== this.state.selectedBird.id)
      .concat(birdToEdit);
    this.setState({
      mainBirdList: editedMainBirdList,
      editing: false,
      selectedBird: null
    });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditBirdForm bird={this.state.selectedBird} onEditBird={this.handleEditingBirdInList} />;
      buttonText = "Return to Bird List";
    } else if (this.state.selectedBird != null) {
      currentlyVisibleState = <BirdDetail bird={this.state.selectedBird} onClickingDelete={this.handleDeletingBird} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Bird List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBirdForm onNewBirdCreation={this.handleAddingNewBirdToList} />;
      buttonText = "Return to Bird List";
    } else {
      currentlyVisibleState = <BirdList birdList={this.state.mainBirdList} onBirdSelection={this.handleChangingSelectedBird} />;
      buttonText = "New Bird!";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="primary" onClick={this.handleClick} style={{margin: '10px'}}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default BirdControl;