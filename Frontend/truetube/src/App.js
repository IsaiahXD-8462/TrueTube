import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchPage from './components/SearchPage'
import Login from './components/Login'

function App() {
  
  const [videos, setVideos] = useState ([]);
  
  useEffect(() => {
    getallvideos();
    commentavideo();
  })

  async function getallvideos() {
    const response = await axios.get('http://127.0.0.1:8000/api/auth/comments/comment/all')
    try {response =>
      console.log(response.data);
      setVideos(response.data)}
    catch {error =>
      console.log(error)
    };
  }

  async function commentavideo(newComment) {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/comments/comment/all', newComment);
    if(response.status === 201) {
      await getallvideos();
    }
  }
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
       <button onClick={() => getallvideos()}>Search</button>
       <button onClick={() => commentavideo()}>Comment</button>
    </div>
  );
}

export default App;
