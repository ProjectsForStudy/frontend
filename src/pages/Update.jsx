import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate} from "react-router-dom";



const Update = () => {


    const [start,setStart] = useState([]);

    /* useEffect(()=>{
        const fechAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books/");
                setStart(res.data); 
                
            }catch(err){
                console.log(err);
            }
        }
        fechAllBooks();
    },[]); */


    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    });

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name] : e.target.value}));
    };

    /* Обновление строки */
    const handleClick = async e =>{
        e.preventDefault();
        try{
             /* await axios.put("http://localhost:8800/books/" + bookId, book); */
             await axios.put("http://localhost:3000/books/" + bookId, book);
           /* await axios.put("http://185.151.245.185/books/" + bookId, book); */
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="form">
            <h1> Update</h1>
            <input type="text" placeholder="title" /* {bookId} */ onChange={handleChange} name="title" />
            <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
            <input type="number" placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />

            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    );
};

export default Update;