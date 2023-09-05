import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Dropdownheading(props) {
  // console.log("in dropdownheading",props);
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
  return (
    <li className="dropdown">
      <a href="#" onClick={(e) => handleNavDeepDropDown(e)}>
        <span>{props.heading}</span> <i className="bi bi-chevron-right"></i>
      </a>
      <ul>
        {props.EleArray.map((ele) => {
          return <Dropdown element={ele} />;
        })}
      </ul>
    </li>
  );
}

export default Dropdownheading;
