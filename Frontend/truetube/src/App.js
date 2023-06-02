import { Routes, Route, Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios, { formToJSON } from 'axios';
// import { Comment, CommentForm, CommentList } from './components/Comments'
// import { SearchBar } from './components/Search Bar/SearchBar';

//Page Import
import Login from "./Pages/Login/Login";
import SearchPage from './Pages/Search Page/SearchPage';


//Component Imports

function App() {
  
  // const [videos, setVideos] = useState ([]);
  
  // useEffect(() => {
  //   getallvideos();
  //   commentavideo();
  // })

  // async function getallvideos() {
  //   const response = await axios.get('http://127.0.0.1:8000/api/auth/comments/comment/all')
  //   try {response =>
  //     console.log(response.data);
  //     setVideos(response.data)}
  //   catch {error =>
  //     console.log(error)
  //   };
  // }

  // async function commentavideo(newComment) {
  //   const response = await axios.post('http://127.0.0.1:8000/api/auth/comments/comment/all', newComment);
  //   if(response.status === 201) {
  //     await getallvideos();
  //   }
  // }
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <div className='search-bar-container'> 
        <SearchBar />
       <button onClick={() => getallvideos()}>Search</button>
       <button onClick={() => commentavideo()}>Comment</button>
      </div> */}

    </div>
  );
}

export default App;
