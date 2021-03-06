import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks(search) {
    API.getGoogle(search)
      .then((res) => {
        setBooks(res.data.items);
      }).catch((err) => console.log(err));
  }

  const handleSubmit = function(event) {
    event.preventDefault();
    loadBooks(result);
    setResult("");
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <Jumbotron>
            <h1>Search Books</h1>
          </Jumbotron>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="search"
              placeholder="Search a title or author"
              onChange={(e) => setResult(e.target.value)}
            />
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-8 sm-12">
          {books.length ? (
            books.map((book) => (
                <Card data={book.volumeInfo} key={book.id} />
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
