import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import axios from "axios";
// eslint-disable-next-line
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer(props) {
  const emailRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
  };

  const downloadFile = (pdfName) => {
    if (pdfName === "privacyPolicy") {
      fetch("https://www.rudraafinservices.com/assets/Privacy_Policy.pdf")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob();
        })
        .then((blob) => {
          // Creating a new object URL for the PDF file
          const fileURL = window.URL.createObjectURL(blob);

          // Creating an <a> element to trigger the download
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Rudraa Fin Services PrivacyPolicy.pdf";
          alink.click();

          // Revoke the object URL to free up memory
          window.URL.revokeObjectURL(fileURL);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    // Add more conditions for other PDFs if needed
    else {
      console.log("PDF not found or specified.");
    }
  };

  const sendRequest = async (route, e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", emailRef.current.value);

      const response = await axios.post(
        process.env.REACT_APP_API_URL + route,
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Set the appropriate Content-Type
          },
        }
      );

      if (response.status === 200) {
        emailRef.current.value = "";
        toast.success("Subscription successful. Thank you!");
      }
    } catch (error) {
      console.error(error);
      // Handle errors here (e.g., display an error message to the user)
    }
  };

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Rudraa Finance</h3>
              <p>
                405 4th Floor Sundaram Hub, <br />
                Bahucharaji Rd, Karelibagh, <br />
                Vadodara, Gujarat 390018 <br />
                <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91 9824469577 | 9824390727
                <br />
                <strong>Email:</strong> info@rudraafinservices.com
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/about" onClick={scrollToTop}>
                    About us
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/partner" onClick={scrollToTop}>
                    Become Partner
                  </Link>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a
                    target="_blank"
                    href="https://www.rudraafinservices.com/assets/Rudraa Fin Services Terms of service.pdf"
                    download="Rudraa Fin Services Terms of service.pdf"
                  >
                    Terms of service
                  </a>
                </li> */}
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a
                    target="_blank"
                    href="https://www.rudraafinservices.com/assets/Rudraa Fin Services Privacy Policy.pdf"
                    download="Rudraa Fin Services Privacy Policy.pdf"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Products Offering</h4>
              <ul>
                {props.randomNum.map((data, idx) => {
                  return (
                    <li key={idx}>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link
                        to={`/${props.productsArray[data].replace(/\s/g, "_")}`}
                        onClick={scrollToTop}
                      >
                        {props.productsArray[data]}
                      </Link>
                    </li>
                  );
                })}

                {/* <li><i className="bx bx-chevron-right"></i> <Link to="#">Product 1</Link></li> */}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Stay Informed and Empowered</p>
              <form
                onSubmit={(e) => {
                  sendRequest("/newsletter", e);
                }}
              >
                <input
                  className="rounded-pill"
                  ref={emailRef}
                  type="email"
                  name="email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Rudraa Fin Services Pvt Ltd</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed & Developed by{" "}
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:vrajeshmodi99@gmail.com";
                e.preventDefault();
              }}
            >
              vrajeshmodi99@gmail.com
            </Link>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <strong>WhatsApp Support&nbsp;&nbsp;</strong>
          <Link
            to="https://api.whatsapp.com/send?phone=9824469577"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="fab fa-whatsapp fa-lg"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
