import React, { useState } from 'react';
import './navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  // State variable to manage navbar collapse state
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // Function to toggle navbar collapse state
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };
  return (
    <>
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-body">
      <div className="container-fluid">
        <a className="navbar-brand "   href="#">
        <img className='logo' src={require('./logo-ski.jpg')}  alt="now" /> <span></span>SKI-PHARMACEUTICAL
        </a>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={!isNavbarCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 lg-">
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="/Page">
              <i className="bi bi-house-door"> Home</i>
              </a>
            </li>
            <form className="d-flex" id="input"  role="search">
            <input
              className="form-control me-1"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
            </form>
            <li className="nav-item">
              <a className="nav-link outline-primary"  href="/login">
                Login
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Blog
              </a>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0 bg-">
          <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              About Us
              </a>
            </li>
              <a className="nav-link" href="#">
              <i className="bi bi-cart4"></i>
              </a>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  
</>
  );
}

export default Navbar;
