import React from "react";
import API from "../utils/API";

function SavedCard(props) {
  
  function deleteSaved(id) {
    API.deleteBook(id)
      .then(res => {window.location.reload();})
      .catch(err => console.log(err))
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{props.title}</h2>
        <h5 className="card-text">By: {props.authors}</h5>
      </div>
      <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <img src={props.image} className="card-img-left" alt={props.title} />
              <br />
              <a href={props.infoLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-info">
                  Info
                </button>
              </a> 
              <button className="btn delete btn-danger" id={props._id} onClick={() => deleteSaved(props._id)} >
                Delete
              </button>  
            </div>
            <div className="col-lg-8">
              <h5>Description:</h5>
              <p className="card-text">{props.description}</p>
              <h5>Published:</h5>
              <p className="card-text">{props.publishedDate}</p>
              <h5>Publisher:</h5>
              <p className="card-text">{props.publisher}</p>
              <h5>Category:</h5>
              <p className="card-text">{props.categories}</p>
              <h5>Page Count:</h5>
              <p>{props.pageCount}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SavedCard;