import React from 'react'
import BookItem from '../UI/BookItem'
import useHook from '../../customHook/hookCustom'

export default function MainPage({books,user}) {
  const {allBooks, setAllBooks,deleteHandler, handleClick, click, } = useHook(books)



  return (
    <div className='row mt-3'>
      {allBooks.length ? allBooks.map((book) => <BookItem  deleteHandler={deleteHandler} user={user} post={book} key={book.id} handleClick={handleClick} click={click}/>) : <h1>Нет книг</h1>}
    </div>
  )
}
