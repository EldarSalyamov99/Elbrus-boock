import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import RegPage from './Pages/AuthRegPages/RegPage';
import AuthPage from './Pages/AuthRegPages/AuthPage';
import NavBar from './UI/NavBar';
import AddBook from './Pages/AddBook';
import UpdateFormBook from './UI/UpdateFormBook';

export default function App({user,books, book}) {
  return (
    <div className='container'>
      <NavBar user={user}/>
    <Routes>
      <Route path="/" element={<MainPage books={books} user={user}/>} />
      <Route path="/addBook" element={<AddBook user={user} books={books}/>}/>
      <Route path="/signup" element={<RegPage/>} />
      <Route path="/login" element={<AuthPage/>} />
      <Route path='/books/:id' element={<UpdateFormBook book={book}/>} />
    </Routes>
    </div>
  )
}
