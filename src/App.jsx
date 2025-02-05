import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import CreateBlog from './components/CreateBlog/CreateBlog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import NotFound from './components/NotFoundPage/NotFound';

function App() {
  return (
    <Router basename='/react-blog-app'>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path = '/' element={ < Navigate to="/home" replace/> }/>
            <Route path='/home' element={ <Home /> } />
            <Route path='/create' element={ <CreateBlog /> } />
            <Route path='/blogs/:id' element={ <BlogDetails /> } />
            <Route path='*' element={ <NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
