import React,{useState} from 'react'
import axios from 'axios';

export default function useHook(books) {
    const [allBooks, setAllBooks] = useState(books || []);

    const bookSubmitHandler = async (e)=>{
        e.preventDefault();
        const data = Object.fromEntries([...new FormData(e.target)]);
        if(!data.bookName || !data.description || !data.img){
            alert('Заполните все поля')
        }
        const response = await axios.post('/api/books', data);
        console.log(response);
        setAllBooks([...allBooks, response.data])
        window.location = '/'
    }

    const deleteHandler = async (id)=>{
      try{
        await axios.delete(`/api/books/${id}`);
      } catch(err){
        console.log(err);
      }
      setAllBooks(allBooks.filter(book => book.id !== id))
    }




    return {allBooks, setAllBooks, bookSubmitHandler, deleteHandler,}
}