import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card";
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

  function handleSubmit(event) {
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
          <form>
            <input
              className="form-control"
              onChange={(e) => setResult(e.target.value)}
              name="input"
              placeholder="Search a title or author"
            />
            <button className="btn btn-info" onSubmit={handleSubmit}>
              Submit
            </button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-8 sm-12">
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
