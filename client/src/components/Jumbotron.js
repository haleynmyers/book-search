import React from "react";
import bookshelf from "./images/bookshelf.jpg";

const styles = {
  jumbotron: {
    height: 100, 
    paddingTop: 25, 
    color: 'white',
    textAlign: "center", 
    backgroundImage:`url(${bookshelf})`
  }
}

function Jumbotron({ children }) {
  return (
    <div
      style={styles.jumbotron}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
