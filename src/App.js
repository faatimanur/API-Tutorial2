import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Users from './components/users/Users'
import Navbar from "./components/navbar/Navbar";
import Todos from './components/todos/Todos'
import Photos from './components/photos/Photos'
import Albums from './components/albums/Albums'
import Comments from './components/comments/Comments'
import Posts from './components/posts/Posts'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='' element={<Users/>}/> 
      <Route path='/todos' element={<Todos/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/albums' element={<Albums/>}/>
      <Route path='/comments' element={<Comments/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
    </>
  );
}

export default App;
