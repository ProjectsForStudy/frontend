import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name] : e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault();
        try{
              /* await axios.post("http://localhost:8800/books", book); */
             await axios.post("http://kostyakalashnikov607.hosted-by-host4.biz:3000/books", book);
          /*  await axios.post("http://185.151.245.185/books", book); */
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="form">
            <h1> Add (test)</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
            <input type="number" placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />

            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    );
};

export default Add;