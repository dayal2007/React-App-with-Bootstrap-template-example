import React from 'react';
import { Link } from 'react-router-dom';
//className="active"
function Header() {
  return (
<header id="header" className="header d-flex align-items-center sticky-top">
<div className="container-fluid position-relative d-flex align-items-center">

  <Link className="logo d-flex align-items-center me-auto" to="/">
    <img src="assets/logo.svg" alt="" />
  </Link>  

  <nav id="navmenu" className="navmenu">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/policy">Policy</Link></li>
      <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="#">Dropdown 1</a></li>
          <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Deep Dropdown 1</a></li>
              <li><a href="#">Deep Dropdown 2</a></li>
              <li><a href="#">Deep Dropdown 3</a></li>
              <li><a href="#">Deep Dropdown 4</a></li>
              <li><a href="#">Deep Dropdown 5</a></li>
            </ul>
          </li>
          <li><a href="#">Dropdown 2</a></li>
          <li><a href="#">Dropdown 3</a></li>
          <li><a href="#">Dropdown 4</a></li>
        </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
  </nav>

  <a className="btn-getstarted" href="index.html#about"><i className="bi bi-search"></i>&nbsp;Search</a>

</div>
</header>







  );
}

export default Header;