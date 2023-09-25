import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Dropdownheading(props) {
  const handleNavDeepDropDown = (e,heading) => {
    e.preventDefault();
    let navbar = document.getElementById("navbar");
    // let selectedElement = document.querySelector(
    //   `.navbar .dropdown ul .dropdown #${}`
    // );
    let selectedElement = document.getElementById(`navbarDrpDown${heading}`)
    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      const elementsWithClass = document.querySelectorAll(".navbar ul .dropdown ul .dropdown-active");

      // Remove the "dropdown-active" class from all elements
      elementsWithClass.forEach((el) => {
        if (el.id !== `navbarDrpDownNxt${heading}`) {
          el.classList.remove("dropdown-active");
        }
      });
      selectedElement.nextElementSibling.classList.toggle("dropdown-active");
    }
    // return true;
  };


  return (
    <li className="dropdown">
      <a id={`navbarDrpDown${props.heading}`} onClick={(e) => handleNavDeepDropDown(e,props.heading)} style={{cursor:'default'}}>
        <span>{props.heading}</span> <i className="bi bi-chevron-right"></i>
      </a>
      <ul id={`navbarDrpDownNxt${props.heading}`}>
        {props.EleArray.map((ele,idx) => {
          return <Dropdown key={idx} element={ele} />;
        })}
      </ul>
    </li>
  );
}

export default Dropdownheading;
