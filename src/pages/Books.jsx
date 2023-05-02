import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";


const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        
        const fechAllBooks = async ()=>{
            try{
                 /*  const res = await axios.get("http://localhost:8800/books");  */ 
              const res = await axios.get("http://kostyakalashnikov607.hosted-by-host4.biz:3000/books");
                /* const res = await axios.get("http://185.151.245.185/books"); */
                setBooks(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fechAllBooks();
    },[]);

    /* Функция удаления */
    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/books/" +id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div><h1>Books shop</h1>
            <div className="books">
                {books.map((book) => (
                <div className="book" key={book.id}>
                    {/* {books.cover && <img src={book.cover} alt="" />} */}
                    <img src={book.cover} alt="" />
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}</span>
                    <button className="delete" onClick={()=> handleDelete(book.id)}>Delete</button>
                   <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>

                    {/* <button className="update"><Link to={{pathname: `/update/${book.id}`,propsSearch: book.title}}>Update</ Link></button> */}
                </div>
                ))}
                
            </div>
            <button>
                <Link to="/add">Add new book</Link>
            </button>
        </div>

    );
};

export default Books;