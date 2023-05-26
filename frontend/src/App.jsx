// App.js

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navone from "./units/Navone";
import Login from './pages/Login';
import Additem from './pages/Additem';
export default function App(){
return(
    <div>
      <nav>
      <Navone />

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additem" element={<Additem />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </nav>
    </div>
    
 );
}

