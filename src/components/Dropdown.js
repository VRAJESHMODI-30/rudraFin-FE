import React from "react";
import Dropdownheading from "./Dropdownheading";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const exitNavbar = () => {
    const elementsWithClass = document.querySelectorAll(".navbar .dropdown-active");

      // Remove the "dropdown-active" class from all elements
      elementsWithClass.forEach((el) => {
          el.classList.remove("dropdown-active");
      });
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
            to={"/" + props.element.replace(/\s/g, "_")}
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
