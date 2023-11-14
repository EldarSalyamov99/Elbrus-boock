import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

export default function NavBar({user}) {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">{user && `Hello,${user.name}`}</Navbar.Brand>
      <Nav className="me-auto flex-grow-1">
        <Nav.Link href="/">Home</Nav.Link>
        {/* <Nav.Link href="/search">Search</Nav.Link> */}
      </Nav>
      <Nav className="me-auto flex-grow-0">
        {user ? (
          <>
            <Nav.Link href="/addBook">addBook</Nav.Link>
            <Nav.Link
              href="/logout"
              onClick={(e) => {
                e.preventDefault();
                axios('/api/users/logout')
                  .then(() => (window.location.href = '/login'))
                  .catch(console.log);
              }}
            >
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/login">Sign in</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </>
        )}
      </Nav>
    </Container>
  </Navbar>
  )
}
