import React from "react";
import './Header.css';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="menu container">
          <a href="#" className="logo">
            <img src="#" alt="" />
          </a>
          <p className="namePage fs-3 mb-0">GameStore</p>
          <input type="checkbox" id="menu" />
          <label for="menu">
            <img src="#" className="menu-icon" alt="" />
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">Index</a>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li id="linkAdmin">
                <a href="#">Admin</a>
              </li>
              <li>
                <article
                  id="containerLog"
                  className="d-flex text-light gap-2 align-items-center ms-lg-3"
                >
                  <button
                    className="btn btn-outline-light d-flex flex-lg-row-reverse gap-2 align-items-center"
                    id="buttonLog"
                  >
                    <i className="bi bit-person-circle"></i>
                    <div id="buttonLogText"></div>
                  </button>
                </article>
              </li>
              <li><img src="#" id="icon" className="themeChanger"/></li>
            </ul>
          </nav>
        </div>
        <div className="header-content container">
            <div className="header-txt">
                <span className="span-txt">Discover the best games</span>
                <h1>Choose your favorite game and enjoy!</h1>
            <div className="magic-btn">
                <a href="#">
                    <i></i><i></i>
                    <span>Games!</span>
                </a>
            </div>
        </div>
       <div className="header-img">
        <img src="#" alt=""/>
       </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
