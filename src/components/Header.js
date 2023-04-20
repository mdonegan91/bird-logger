import React from "react";
import Robin from "./../img/robin-header.png"

function Header(){
  const headerStyles = {
    textAlign: "right",
    padding: 30,
    margin: 5,
    backgroundImage:`url(${Robin})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 35%",
    color: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
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