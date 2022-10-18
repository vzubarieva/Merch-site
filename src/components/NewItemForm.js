import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      price: parseInt(event.target.price.value),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="description" placeholder="Description" />
        <input type="number" name="quantity" placeholder="Quantity" />
        <input type="number" name="price" placeholder="Price $" />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};
export default NewItemForm;
