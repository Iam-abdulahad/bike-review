import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Notfound from './components/NotFound/Notfound';
import Reviews from './components/reviews/Reviews';


function App() {
  return (
    <div className="App bg-gray-50">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path ='/about' element={<About></About>}></Route>
        <Route path ='*' element={<Notfound></Notfound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
