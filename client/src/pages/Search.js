import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

function Search() {
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks(search) {
    API.getGoogle(search)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  function saveBook(id) {
    API.saveBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault();
    loadBooks(result);
    setResult("");
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Search Books</h1>
          </Jumbotron>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                onChange={(e) => setResult(e.target.value)}
                name="input"
                placeholder="Search a title or author"
              />
            </div>

            <button className="btn btn-info" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          {books.length ? (
            books.map((book) => (
              <Card data={book.info} key={book.id} button={SaveBtn} />
            ))
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
