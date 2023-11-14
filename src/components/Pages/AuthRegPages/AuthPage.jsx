import axios from 'axios';
import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AuthPage() {

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        try{
            const response = await axios.post('/api/users/login', data);
            if(response.status === 201) window.location = '/'
        }catch(error){
            alert('Неправильный логин или пароль');
            console.log(error);
        }
    }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Row className="justify-content-center mt-3 mb-3 text-center">
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-3 text-center">
        <Col>
          <Nav.Link href="/signup">Don't have an account? Sign up</Nav.Link>
        </Col>
      </Row>
    </Form>
  )
}
