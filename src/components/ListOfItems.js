import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ListOfItem(props) {
  return (
    <React.Fragment>
      <hr />
      {props.listOfItems.map(
        (
          item,
          index // Loop through the list passed down from TicketControl.
        ) => (
          <Item
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            key={index}
          />
        )
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
ListOfItem.propTypes = {
  listOfItems: PropTypes.array,
};

export default ListOfItem;
