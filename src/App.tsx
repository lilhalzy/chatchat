import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Login />}/>
        <Route path='/dashboard' element={<h1>Dashboard</h1>}>
          <Route index element={<h1>List Page</h1>}/>
          <Route path='chat' element={<h1>Chat Page</h1>}/>
          <Route path='profile' element={<h1>Profile Page</h1>}/>
        </Route>
        <Route path='*' element={<Navigate to='/dashboard' />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
