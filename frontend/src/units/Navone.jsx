// Components/NavBar.js
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navone(){
 return (
    <div>


 <nav>
       <ul className ='d-flex justify-content-around list-unstyled my -5'>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/add">Add item</Link>
          </li>
          <li>
             <Link to="/login">Login</Link>
          </li>
       </ul>
 </nav>

 </div>
 );
};

