import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useHook from '../../customHook/hookCustom';

export default function FormBook() {
   const {bookSubmitHandler} = useHook()
  return (
    <Form onSubmit={bookSubmitHandler} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>название книги</Form.Label>
      <Form.Control name='bookName' type="text" placeholder="Введите название" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Описание</Form.Label>
      <Form.Control name='description' type="text" placeholder="Введите текст поста" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Обложка книги</Form.Label>
      <Form.Control name='img' type="text" placeholder="Введите текст поста" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}
