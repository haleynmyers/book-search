import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button 
      className="btn btn-danger" 
      id={props._id} 
      onClick={() => deleteSaved(props._id)}>
        Delete
    </button>
  );
}

export default DeleteBtn;


