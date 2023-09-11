// App.js
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Partner from "./components/Partner";
import "./App.css"; // Import the CSS file
import Footer from "./components/Footer";
import productData from "./db/product-details.json";

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
  const testProductData = {
    MainHead: "WHY OPT FOR RUDRAA FINANCE HOME LOANS?",
    SubHead:
      "Discover the compelling reasons to choose Rudraa Finance when it comes to securing a home loan.",
    repayment: true,
    additionalDetails: true,
    BasicInfo: [
      "At Rudraa Finance Services, we understand that securing a housing loan is a significant milestone on the journey to achieving your dream home. We take pride in offering a diverse range of home loan options that are not only tailored to your specific needs but also come with some of the most competitive interest rates in the market.",
      "@list@Tailored Solutions: Our housing loan solutions are designed to accommodate a wide customer base, including salaried individuals, self-employed professionals, and NRIs, among others.",
      "@list@Customization: We believe in customization, ensuring that our products are perfectly aligned with your unique home loan eligibility.",
      "@italic@Your dream home is within reach, and at Rudraa Finance Services, we are here to make it a reality.",
    ],
    RequiredDocuments: [
      {
        "KYC documents": [
          "PAN Card",
          "Aadhaar Card",
          "Passport (for NRIs)",
          "Proof of residence",
        ],
      },
      {
        "Income documents": [
          "Salary slips and Form No.16 (for salaried)",
          "Bank statements for the last 6 to 12 months",
          "Last 3 years income tax returns along with financials (for self-employed or professionals)",
        ],
      },
      {
        "Property Documents (if property is identified)": [
          "Proof of ownership of the property",
          "Allotment letter of builder/society (for flats)",
          "Up-to-date tax paid receipt",
        ],
      },
    ],
    keyFeatures: [
      "fas fa-store",
      "Online Home Loan Sanction",
      "fas fa-money-bill",
      "Quick Sanction and Low EMI",
      "fas fa-file-alt",
      "Simple Documentation",
      "fas fa-clock",
      "Maximum Tenure",
      "fas fa-trophy",
      "Competitive Interest Rates",
      "fas fa-rupee-sign",
      "No Prepayment Penalty",
      "fas fa-cogs",
      "Versatile Usage",
      "fas fa-exchange-alt",
      "Takeover or Balance Transfer",
    ],
    repaymentArray: [
      {
        cost: "Up to Rs. 30 lakh",
        amount: "90% of Property value",
        period: "Maximum 30 years for salaried individuals",
      },
      {
        cost: "More than Rs. 30 lakh and up to Rs. 75 lakh",
        amount: "80% of Property value",
        period: "Maximum 25 years for self-employed professionals",
      },
      {
        cost: "Above Rs. 75 lakh",
        amount: "75% of Property value",
        period: "-",
      },
    ],
    additionalDetailsArray: [
      {
        heading: "Purpose (Loan against Mortgage of Residential House / Flat)",
        detail: [
          "Children's Education / Marriage",
          "Purchase of another Property",
          "Business Expansion",
        ],
      },
      {
        heading: "Security",
        detail: [
          "quitable / Registered Mortgage of Residential Property - Age of property not more than 35 Years",
          "Demand Promissory Note",
        ],
      },
    ],
  };
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [productTitles, setProductTitles] = useState([]);
  const [footerProductList, setFooterProductList] = useState([]);
  const [randomNumberArr, setRandomNumberArr] = useState([]);
  const location = useLocation();
  const calculateNavbarHeight = () => {
    const navbar = document.getElementById("header"); // Replace with your actual Navbar ID
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  };

  const handleProductTitles = () => {
    let tempArr = [];
    let footerTempArr = [];
    productData.map((dataObj) => {
      tempArr.push(dataObj.NavbarDetails);
      if (Array.isArray(dataObj.NavbarDetails)) {
        footerTempArr = footerTempArr.concat(dataObj.NavbarDetails.slice(1));
        console.log(footerTempArr);
      } else {
        footerTempArr.push(dataObj.NavbarDetails);
      }
    });
    setProductTitles(tempArr);
    setFooterProductList(footerTempArr);
    let randNumArr = generateRandomArray(footerTempArr.length - 1);
    setRandomNumberArr(randNumArr);
  };

  const getRequiredProductData = (path) => {
    let modifiedPath = path.substring(1);
    let productContent = null; // Initialize productContent to null

    productData.some((dataObj) => {
      if (dataObj.Product_details.hasOwnProperty(modifiedPath)) {
        productContent = dataObj.Product_details[modifiedPath];
        return true; // Stop iterating once the data is found
      }
      return false;
    });

    return productContent;
  };

  const generateRandomArray = (maxValue) => {
    if (maxValue < 4) {
      throw new Error("maxValue must be greater than or equal to 4");
    }

    const randomArray = [];
    const allPossibleNumbers = Array.from(
      { length: maxValue },
      (_, index) => index
    );

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * allPossibleNumbers.length);
      const randomValue = allPossibleNumbers.splice(randomIndex, 1)[0];
      randomArray.push(randomValue);
    }

    return randomArray;
  };

  useEffect(() => {
    const simulateAssetLoading = () => {
      setTimeout(() => {
        setContentLoaded(true); // Set contentLoaded to true after a delay (simulating asset loading)
      }, 3000); // Adjust the delay as needed
    };
    simulateAssetLoading();
    calculateNavbarHeight();
    handleProductTitles();

    // You may want to recalculate the height on window resize
    window.addEventListener("resize", calculateNavbarHeight);

    // Listen for component changes on the page

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", calculateNavbarHeight);
    };
  }, []);

  // Calculate the padding for the content based on the Navbar height
  const contentPadding = `${navbarHeight + 40}px`; // Replace with your desired padding value

  return (
    <>
      {/* <Router> */}
      {!contentLoaded ? <div id="preloader"></div> : null}

      <Navbar
        id="header"
        currentLocation={location.pathname}
        productsArray={productTitles}
      />
      <div id="mainContent" style={{ paddingTop: contentPadding }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Products />} /> */}
          <Route path="/about" element={<About />} />
          <Route
            path="/:type"
            element={
              <Products
                product={getRequiredProductData(location.pathname)}
                path={location.pathname}
              />
            }
          />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </div>
      <Footer productsArray={footerProductList} randomNum={randomNumberArr} />
      {/* </Router> */}
    </>
  );
}

export default App;
