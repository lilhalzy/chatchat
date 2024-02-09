import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import ListPage from './pages/ListPage.tsx';
import ChatPage from './pages/ChatPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import Layout from './pages/Layout.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Layout/>}>
          <Route index element={<ListPage/>} />
          <Route path="chat" element={<ChatPage/>} />
          <Route path="profile" element={<ProfilePage/>} />
        </Route>
        <Route path='*' element={<Navigate to='/dashboard'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
