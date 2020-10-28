import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SavedCard from "../components/SavedCard";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
        console.log(savedBooks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Your Shelf</h1>
      </Jumbotron>
      <Row>
        <Col size="md-6 sm-12">
          {savedBooks.length ? (
            savedBooks.map((book, index) => {
              return (
                <SavedCard key={index} {...book}  />
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