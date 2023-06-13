import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import Spinner from './components/common/Spinner';
import Header from "./components/common/Header";
import { HomePage } from './pages/HomePage';
import { PostsPage } from './pages/posts/PostsPage';
import { UsersPage } from './pages/users/UsersPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Spinner />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='*' element={<Navigate to="" />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
