import React from "react";
import API from "../utils/API";

function Card(props) {
  
  function deleteSaved(id) {
    API.deleteBook(id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  

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
              <a type="button" 
              href={props.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-info">
                View
              </a>
            {props.children.button}
            </div>
            <div className="col-lg-8">
              <p className="card-text">Description: {props.description}</p>
              <br />
              <p className="card-text">Published: {props.publishedDate}</p>
              <br />
              <p className="card-text">Category: {props.categories}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card;