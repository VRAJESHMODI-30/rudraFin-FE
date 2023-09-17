import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Dropdownheading(props) {
  const handleNavDeepDropDown = (e) => {
    e.preventDefault();
    let navbar = document.getElementById("navbar");
    let selectedElement = document.querySelector(
      ".navbar .dropdown ul .dropdown > a"
    );
    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      selectedElement.nextElementSibling.classList.toggle("dropdown-active");
    }
    // return true;
  };
  return (
    <li className="dropdown">
      <a onClick={(e) => handleNavDeepDropDown(e)} style={{cursor:'default'}}>
        <span>{props.heading}</span> <i className="bi bi-chevron-right"></i>
      </a>
      <ul>
        {props.EleArray.map((ele,idx) => {
          return <Dropdown key={idx} element={ele} />;
        })}
      </ul>
    </li>
  );
}

export default Dropdownheading;
