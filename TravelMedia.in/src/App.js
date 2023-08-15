import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';
const App = () => {
  const[id,setId]=useState("");
  return (
    <div>
     <Navbar id={id}/>
     <Routes>
      <Route path="/" element={<Home id={id} setId={setId}/>}></Route>
      <Route path={`/item/${id}`} element={<Details  id={id} setId={setId}/>}></Route>
     </Routes>
    </div>
  )
}

export default App