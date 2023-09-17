import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
  };
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              {/* <div className="logo me-auto d-flex flex-column align-items-center text-center">
                <img
                  src="assets/img/Logo_Rudraa-transformed.png"
                  alt="Rudraa Fin Services Pvt Ltd"
                  className=""
                  style={{height:'5rem',alignItems:'center'}}
                />
              </div>
               */}
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
                <strong>Email:</strong> rudraafinservices2022@gmail.com
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
                {/* <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li> */}
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Privacy policy</Link>
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
              <p>
                Stay Informed and Empowered
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
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
            <i class="fab fa-whatsapp fa-lg"></i>
          </Link>
          {/* <Link to="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link to="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link to="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </Link>
          <Link to="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
