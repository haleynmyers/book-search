import React from "react";
import SaveBtn from "./SaveBtn";
import API from "../utils/API";

function Card(props) {
  let d = props.data;
  let image;
  if (d.imageLinks) {
    image = d.imageLinks.thumbnail
  }
  else {
    image = "https://via.placeholder.com/150"
  }

  let card = {
    title: d.title,
    authors: d.authors,
    description: d.description,
    image: image,
    link: d.previewLink,
    publishedDate: d.publishedDate,
    rating: d.averageRating,
    categories: d.categories,
    pageCount: d.pageCount
  }

  function save() {
    API.saveBook(card)
      .then(res => console.log(res))
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
              <button 
              href={props.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-info">
                View
              </button>
              <SaveBtn 
              onClick={() => save()}/>
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