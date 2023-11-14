import React from 'react'
import FormBook from '../UI/FormBook'

export default function AddBook({user}) {
    
  return (
    <>
    <h1 className="text-center" style={{margin: '10px'}}>Привет, {user.name}, здесь ты можешь добавить свою книгу</h1>
    <FormBook/>
    </>
  )
}
