import React from "react";

function Header(){
  const headerStyles = {
    padding: 20,
    margin: 5
  }
  return(

    <React.Fragment>
      <div style={headerStyles}>
      <h1>Bird Logger</h1>
      <h5>Keep track of the birds you spot!</h5>
      </div>
      <br />
    </React.Fragment>

  );
}

export default Header;