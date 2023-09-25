// Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file
import Dropdown from "./Dropdown";

const Navbar = (props) => {
  const [scrollY, setScrollY] = useState(0);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
  };

  //Too ExitNavBar if in MobileView
  const exitNavbar = () => {
    let navbar = document.getElementById("navbar");
    let element = document.querySelector(".mobile-nav-toggle");
    if (element && navbar.classList.contains("navbar-mobile")) {
      element.click();
    }
    scrollToTop();
  };


  const handleNavDropDown = (e) => {
    e.preventDefault();
    let navbar = document.getElementById("navbar");
    let selectedElement = document.querySelector(".navbar .dropdown > a");

    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      const elementsWithClass = document.querySelectorAll(".navbar ul .dropdown ul .dropdown-active");

      // Remove the "dropdown-active" class from all elements
      elementsWithClass.forEach((el) => {
        el.classList.remove("dropdown-active");
      });
      selectedElement.nextElementSibling.classList.toggle("dropdown-active");
    }

    // return true;
  };

  const isActive = (path) => {
    if (path === props.currentLocation) {
      return true;
    } else if (path === "/product" && props.currentLocation.search(/\/$|\/about$|\/partner$/) == -1) {
      return true
    }
    else {
      return false;
    }
  };

  const hanleTopBar = () => {
    const selectHeader = document.getElementById('header');
    const selectTopbar = document.getElementById('topbar');
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
      selectTopbar.classList.add('topbar-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
      selectTopbar.classList.remove('topbar-scrolled')
    }
  }

  // useEffect for handling scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect for hiding the top bar when scrollY > 100
  useEffect(() => {
    hanleTopBar();
  }, [scrollY]);

  return (
    <>
      {/* Top Bar */}
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <Link to="mailto:info@rudraafinservices.com">info@rudraafinservices.com</Link>
            <i className="bi bi-phone"></i>  <a href="tel:+919824469577">+91 9824469577</a>
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <strong style={{ fontSize: 'smaller' }}>WhatsApp Support</strong>
            <Link to="https://api.whatsapp.com/send?phone=9824469577" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <i className="fab fa-whatsapp fa-lg"></i>
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
              <img
                src="assets/img/Logo_Rudraa-transformed.png"
                alt=""
                className=""
                style={{
                  pointerEvents: "none",
                }}
              />
            </Link>
            <Link to="/" className="">
              <h5 style={{ fontWeight: "bold", fontFamily: "Pacifico" }}>
                Rudraa Finserv
              </h5>
            </Link>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <Link
                    onClick={exitNavbar}
                    className={`nav-link scrollto ${isActive("/") ? "active" : ""
                      }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={exitNavbar}
                    className={`nav-link scrollto ${isActive("/about") ? "active" : ""
                      }`}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>

                <li className="dropdown">
                  <a
                    onClick={(e) => handleNavDropDown(e)}
                    className={`nav-link scrollto ${isActive("/product") ? "active" : ""
                      }`}
                    style={{ cursor: "default" }}
                  >
                    <span>Products</span> <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    {props.productsArray.map((ele, idx) => {
                      return <Dropdown key={idx} element={ele} />;
                    })}
                  </ul>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" onClick={mobileNav}></i>
            </nav>  <b>
              <Link
                to="/partner"
                className="appointment-btn scrollto"
                onClick={scrollToTop}
              >
                <span className="d-none d-md-inline">Become Our</span> Partner
              </Link>
            </b>


        </div>
      </header>
    </>
  );
};

export default Navbar;
