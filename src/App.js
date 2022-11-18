import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Notfound from './components/NotFound/Notfound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path ='/about' element={<About></About>}></Route>
        <Route path ='*' element={<Notfound></Notfound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
