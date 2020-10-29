import React from "react";
import API from "../utils/API";

function Card(props) {
  let d = props.data;
  console.log(d);
  let image;
  if (d.imageLinks) {
    image = d.imageLinks.thumbnail
  }
  else {
    image = "https://via.placeholder.com/150"
  }

  let bookData = {
    title: d.title,
    authors: d.authors,
    description: d.description,
    image: image,
    link: d.infoLink,
    publishedDate: d.publishedDate,
    publisher: d.publisher,
    categories: d.categories,
    pageCount: d.pageCount
  }

  function saveIt() {
    API.saveBook(bookData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      alert("Saved!");
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{d.title}</h2>
        <h5 className="card-text">By: {d.authors}</h5>
      </div>
      <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <img src={image} className="card-img-left" alt={d.title} />
              <br />
              <a href={d.infoLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-info">
                  Info
                </button>
                {"   "}
              </a> 
              <button className="btn btn-info save" onClick={() => saveIt()} >
                Save
              </button>              
            </div>
            <div className="col-lg-8">
              <h5>Description:</h5>
              <p className="card-text">{d.description}</p>
              <h5>Published:</h5>
              <p className="card-text">{d.publishedDate}</p>
              <h5>Publisher:</h5>
              <p className="card-text">{d.publisher}</p>
              <h5>Category:</h5>
              <p className="card-text">{d.categories}</p>
              <h5>Page Count:</h5>
              <p>{d.pageCount}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card;