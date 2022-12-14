import React from "react";
import NewItemForm from "./NewItemForm";
import ListOfItems from "./ListOfItems";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainListOfItems: [
        {
          name: "Cup",
          description: "Cup with logo",
          quantity: 150,
          price: 15,
        },
        {
          name: "T-shirt",
          description: "T-shirt with logo",
          quantity: 50,
          price: 35,
        },
        {
          name: "Jacket",
          description: "Jacket with logo",
          quantity: 25,
          price: 50,
        },
      ],
    };
    //his.handleClick = this.handleClick.bind(this);
  }
  handleAddingNewItemToList = (newItem) => {
    const newMainListOfItems = this.state.mainListOfItems.concat(newItem);
    this.setState({
      mainListOfItems: newMainListOfItems,
      formVisibleOnPage: false,
    });
  };
  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewItemForm onNewTicketCreation={this.handleAddingNewItemToList} />
      );
      buttonText = " Return to List of Items";
    } else {
      currentlyVisibleState = (
        <ListOfItems listOfItems={this.state.mainListOfItems} />
      );
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;
