import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved() {
  const [savedBooks, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getSaved()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }; 

  return (
    <Container fluid>
      <Jumbotron>
        <h3>Your Saved Books</h3>
      </Jumbotron>
      <Row>
        <Col size="md-6 sm-12">
          {savedBooks.length ? (
          <List>
            {savedBooks.map(book => (
              <ListItem key={book._id}>
                <Link to={"/saved/:id"}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deleteBook(book._id)} />
              </ListItem>
            ))}
          </List>
          ) : (
          <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Saved;