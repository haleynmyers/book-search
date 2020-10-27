import React, { useState, useEffect } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getSaved()
      .then((response) => {
        setSavedBooks(response.data);
      }).catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }; 

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Your Shelf</h1>
      </Jumbotron>
      <Row>
        <Col size="md-6 sm-12">
          {savedBooks.length ? (
            savedBooks.map(book => {
              return (
                <Card data={book} key={book._id} button={DeleteBtn} />
              )
            })
          ) : (
          <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Saved;