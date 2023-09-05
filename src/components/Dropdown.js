import React from "react";
import Dropdownheading from "./Dropdownheading";
import { Link } from "react-router-dom";

function Dropdown(props) {
  // console.log(props.element, " -> ", Array.isArray(props.element));
  const exitNavbar = () => {
    let navbar = document.getElementById("navbar");
    let element = document.querySelector(".mobile-nav-toggle");
    if (element && navbar.classList.contains("navbar-mobile")) {
      element.click();
    }
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
  };
  return (
    <>
      {!Array.isArray(props.element) ? (
        <li>
          <Link
            to={"/product/" + props.element.replace(/\s/g, "_")}
            onClick={exitNavbar}
          >
            {props.element}
          </Link>
        </li>
      ) : (
        <Dropdownheading
          heading={props.element[0]}
          EleArray={props.element.slice(1)}
        />
      )}
    </>
  );
}

export default Dropdown;
