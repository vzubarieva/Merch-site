import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  // const item = "Cup with logo";
  // const item2 = "Shirt with logo";
  return (
    <React.Fragment>
      <h3>
        {props.name}- {props.description}-{props.quantity}-{props.price}
      </h3>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
