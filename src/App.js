import React from 'react';
import '../src/images/App.css';
import Home from '../src/components/home';
import We from '../src/components/we';
import Types  from './components/types';
import Cards from './components/cards';
import Footer from './components/footer';
function App() {
  return (
    <>
    <nav className="navbar">
      <div className="form_input">
        <button className="btn" type="submit"> تسجيل </button>
        <input className="search" placeholder="...ابحث عن" type='text'/>
      </div> 
      <ul className="list">
        <li><a href="#"> تواصل معانا </a></li>
        <li><a href="#"> السلة </a></li>
        <li><a href="#"> من نحن  </a></li>
        <li><a href="#"> التبرع </a></li>
        <li><a href="#" className="home"> الرئيسية </a></li>
      </ul>
    </nav>
    {/* home component */}
    <Home/>
    {/* we component */}
    <We/>
    {/* types component */}
    <Types/>
    {/* cards component */}
    <Cards/>
    {/* footer component */}
    <Footer/>
  </>
  );
}

export default App;
