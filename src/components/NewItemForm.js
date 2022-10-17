import React from "react";

function NewItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="description" placeholder="Description" />
        <input type="number" name="quantity" placeholder="Quantity" />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.description.value);
    console.log(event.target.quantity.value);
  }
}

export default NewItemForm;
