import React from "react";

function Item() {
  const item = "Cup with logo";
  const item2 = "Shirt with logo";
  return (
    <React.Fragment>
      <h3>{item}</h3>
      <h3>{item2}</h3>
      <p>
        <em>Firebase entries not saving!</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default Item;
