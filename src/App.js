// App.js
import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Partner from "./components/Partner";
import './App.css'; // Import the CSS file
import Footer from "./components/Footer";


// function App() {
//    // State to hold the Navbar height
//    const [navbarHeight, setNavbarHeight] = useState(0);
  
//   // const location = useLocation().pathname;

//    // Function to calculate and set the Navbar height
//    const calculateNavbarHeight = () => {
//      const navbar = document.getElementById('header'); // Replace with your actual Navbar ID
//      if (navbar) {
//        setNavbarHeight(navbar.offsetHeight);
//      }
//    };
 
//      // Function to update location when the component changes
 
//    // Calculate Navbar height when the component mounts
//    useEffect(() => {
//      calculateNavbarHeight();
//      // You may want to recalculate the height on window resize
//      window.addEventListener('resize', calculateNavbarHeight);

//       // Listen for component changes on the page
  
//      // Cleanup the event listener when the component unmounts
//      return () => {
//        window.removeEventListener('resize', calculateNavbarHeight);
     
//      };
//    }, []);
 
//    // Calculate the padding for the content based on the Navbar height
//    const contentPadding = `${navbarHeight+40}px`;
 
 
  
//   return (
//     <>
//     <Router>
//       <Navbar id="header"/>
//       <div id="mainContent" style={{ paddingTop: contentPadding }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/partner" element={<Partner />} />
//         </Routes>
//       </div>
//       <Footer/>
//     </Router>
//     </>
//   );
// }


// export default App;


function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [contentLoaded, setContentLoaded] = useState(false); // State to track content loading

  // Function to calculate and set the Navbar height
  const calculateNavbarHeight = () => {
    const navbar = document.getElementById('header'); // Replace with your actual Navbar ID
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  };

  // Simulate asset loading (you should replace this with your actual asset loading logic)
  useEffect(() => {
    const simulateAssetLoading = () => {
      setTimeout(() => {
        setContentLoaded(true); // Set contentLoaded to true after a delay (simulating asset loading)
      }, 3000); // Adjust the delay as needed
    };
    simulateAssetLoading();
    calculateNavbarHeight();
     // You may want to recalculate the height on window resize
     window.addEventListener('resize', calculateNavbarHeight);

      // Listen for component changes on the page
  
     // Cleanup the event listener when the component unmounts
     return () => {
       window.removeEventListener('resize', calculateNavbarHeight);
     };
  }, []);

  // Calculate the padding for the content based on the Navbar height
  const contentPadding =`${navbarHeight+10}px`; // Replace with your desired padding value

  return (
    <Router>
      {/* Conditionally render the preloader based on the contentLoaded state */}
      {!contentLoaded ? (
        <div id="preloader">
          {/* Include your preloader HTML and CSS here */}
          {/* For example: */}
          {/* <div className="spinner"></div> */}
        </div>
      ) : null}

      <Navbar id="header" currentLocation="/" />
      <div id="mainContent" style={{ paddingTop: contentPadding }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;