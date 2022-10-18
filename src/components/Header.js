import React from "react";
import friendsLogo from "./../img/Friends_logo.svg.png";

function Header() {
  return (
    <React.Fragment>
      <img src={friendsLogo} alt="Logo" width={1100} />
      <h1> Web store</h1>;
    </React.Fragment>
  );
}

export default Header;
