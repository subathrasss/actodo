import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup'
import Landing from './pages/Landing';
function App() {
  const [users, setusers] = useState([{ username: "sss", pw: 123 },{username:"ddd",pw:777}])

  return (<>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
        <Route path='/Signup' element={<Signup users={users} setusers={setusers} />}></Route>
        <Route path='/Landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App