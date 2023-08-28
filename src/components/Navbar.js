// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  /**
   * Mobile nav toggle
   */
  const mobileNav = () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-mobile");
    let selectEle = document.querySelector(".mobile-nav-toggle");
    selectEle.classList.toggle("bi-list");
    selectEle.classList.toggle("bi-x");
  };

  const scrollToTop = ()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling animation
    });
  }

  //Too ExitNavBar if in MobileView
  const exitNavbar = () => {
    let navbar = document.getElementById("navbar");
    let element = document.querySelector(".mobile-nav-toggle");
    if (element && navbar.classList.contains("navbar-mobile")) {
      element.click();
    }
    scrollToTop();
  };

  /**
   * Mobile nav dropdowns activate
   */
  const handleNavDropDown = (e) => {
    let navbar = document.getElementById("navbar");
    let selectedElement = document.querySelector(".navbar .dropdown > a");
    console.log("OK", selectedElement);
    console.log("look here", selectedElement.nextElementSibling);
    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      selectedElement.nextElementSibling.classList.toggle("dropdown-active");
    }
    console.log("look here After", selectedElement.nextElementSibling);
    // return true;
  };
  const handleNavDeepDropDown = (e) => {
    let navbar = document.getElementById("navbar");
    let selectedElement = document.querySelector(
      ".navbar .dropdown ul .dropdown > a"
    );
    console.log("OK", selectedElement);
    console.log("look here", selectedElement.nextElementSibling);
    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      selectedElement.nextElementSibling.classList.toggle("dropdown-active");
    }
    console.log("look here After", selectedElement.nextElementSibling);
    // return true;
  };

  // Use the currentLocation prop to determine active navigation item
  const isActive = (path) => path === '/';
  return (
    <>
      {/* Top Bar */}
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <Link to="mailto:contact@example.com">contact@example.com</Link>
            <i className="bi bi-phone"></i> +91 00000 11111
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <Link to="" className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="" className="facebook">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="" className="instagram">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          <div className="logo me-auto d-flex flex-column align-items-center text-center">
            <Link to="/" className="">
              <img src="assets/img/icon50.png" alt="" className="" />
            </Link>
            <Link to="/" className="">
              <h5>Rudraa Finance</h5>
            </Link>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link
                  onClick={exitNavbar}
                  className={`nav-link scrollto ${
                    isActive("/") ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={exitNavbar}
                  className={`nav-link scrollto ${
                    isActive("/about") ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              {/* <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
            <li><Link className="nav-link scrollto" to="#departments">Departments</Link></li>
            <li><Link className="nav-link scrollto" to="#doctors">Doctors</Link></li> */}
              <li className="dropdown">
                <a href="#" onClick={(e) => handleNavDropDown(e)}>
                  <span>Products</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link to="#" onClick={exitNavbar}>Drop Down 1</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={(e) => handleNavDeepDropDown(e)}>
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="#" onClick={exitNavbar}>Deep Drop Down 1</Link>
                      </li>
                      <li>
                        <Link to="#" onClick={exitNavbar}>Deep Drop Down 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#" onClick={exitNavbar}>Drop Down 2</Link>
                  </li>
                </ul>
              </li>
              {/* <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={mobileNav}></i>
          </nav>

          <b>
            <Link to="/partner" className="appointment-btn scrollto" onClick={scrollToTop}>
              <span className="d-none d-md-inline">Become Our</span> Partner
            </Link>
          </b>
        </div>
      </header>
    </>
  );
};

export default Navbar;
