import React from "react";

function SaveBtn(props) {
  return (
    <button 
      className="btn btn-info" 
      id={props._id} 
      onClick={() => saveBook(props._id)}>
        Save
    </button>
  );
}

export default SaveBtn;
