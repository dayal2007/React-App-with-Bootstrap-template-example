import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
//className="active"
function Header() {

  useEffect(() => {
  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });
  }, []);

  function mobileNavToogle() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
        setShowMenu(!showMenu);
  };

return (
<header id="header" className="header d-flex align-items-center sticky-top">
<div className="container-fluid position-relative d-flex align-items-center">
  <NavLink className="logo d-flex align-items-center me-auto" to="/">
    <img src="assets/logo.svg" alt="" />
  </NavLink>
  <nav id="navmenu" className="navmenu">
    <ul onClick={mobileNavToogle}>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/policy">Policy</NavLink></li>
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
    <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={mobileNavToogle}></i>
  </nav>
  <a className="btn-getstarted" href="index.html#about"><i className="bi bi-search"></i>&nbsp;Search</a>
</div>
</header>
  );
}

export default Header;