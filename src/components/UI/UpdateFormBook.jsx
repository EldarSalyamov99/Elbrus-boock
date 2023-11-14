import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

export default function UpdateFormBook({ book }) {

    const patchHandler = async (e)=>{
        e.preventDefault()
        try{
          await axios.patch(`/api/books/${book.id}`, Object.fromEntries(new FormData(e.target)));
          window.location = '/'
        } catch(err){
          console.log(err);
        }
      }

  return (
      <Form onSubmit={patchHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>название книги</Form.Label>
      <Form.Control defaultValue={book.bookName} name='bookName' type="text" placeholder="Введите название" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Описание</Form.Label>
      <Form.Control defaultValue={book.description} name='description' type="text" placeholder="Введите текст поста" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Обложка книги</Form.Label>
      <Form.Control defaultValue={book.img} name='img' type="text" placeholder="Введите текст поста" />
    </Form.Group>
    <Form.Group className=" col d-flex justify-content-between align-items-center">

    <Button variant="primary" type="submit">
      Изменить
    </Button>
  </Form.Group>
  </Form>
  )
}
