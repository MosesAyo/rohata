import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Search from './components/Search';
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="search" element={ <Search/> } />
        <Route path="details" element={ <Details/>} />
        <Route path="login" element={ <Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
