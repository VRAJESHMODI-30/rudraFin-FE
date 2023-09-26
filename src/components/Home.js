import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Home.css";
import "../../node_modules/swiper/swiper-bundle.min.css";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    new Swiper(".testimonials-slider", {
      // Swiper configuration options
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  const sendRequest = async (route, e) => {
   
    e.preventDefault(); 
   
    try {
      const formData = new FormData();

      formData.append("name", nameRef.current.value);
      formData.append("email", emailRef.current.value);
      formData.append("phone", phoneRef.current.value);
      formData.append("subject", subjectRef.current.value);
      formData.append("message", messageRef.current.value);

      const response = await axios.post(process.env.REACT_APP_API_URL+route, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";

        toast.success("Message sent successfully. We'll be in touch soon!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Rudraa FinServ Pvt. Ltd.</h1>
          <h2>
            We are a Team of Financial Experts Crafting Prosperity with
            Precision.
          </h2>
          <a href="#services" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>

      {/* <!-- ======= Why Us Section ======= --> */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch ok">
              <div className="content">
                <h3>Why Partner with Us?</h3>
                <p>
                  At Rudraa Finserve Pvt. Ltd., we understand the challenges of
                  making significant financial decisions. That's why we're here
                  not only to assist you but also to empower you with the
                  knowledge and expertise required to secure your financial
                  future. Choose us as your trusted financial partner for peace
                  of mind and confidence in your financial choices.
                </p>
                <div className="text-center">
                  <Link onClick={scrollToTop} to="/about" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="fas fa-chart-line"></i>
                      <h4>Expertise and Professionalism</h4>
                      <p>
                        Choose Rudraa Finserve Pvt. Ltd. to partner with
                        experienced professionals who offer insightful advice,
                        personalized solutions, and a clear roadmap for your
                        financial goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="fas fa-shield-alt"></i>
                      <h4>Trustworthy Guidance</h4>
                      <p>
                        Choose us as your financial partner, where trust and
                        your well-being come first. We're committed to
                        transparency, ethics, and supporting you throughout your
                        financial journey.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="fas fa-handshake"></i>
                      <h4>Client-Centric Approach</h4>
                      <p>
                        Choose Rudraa Finserve Pvt. Ltd. where you're a valued
                        community member, not just a number. Our dedicated
                        advisors empower you with informed financial decisions,
                        ensuring your plan adapts to your evolving needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End .content--> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Why Us Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              In the intricate world of finance, Rudraa Finserve Pvt. Ltd.
              stands as your beacon of trust and expertise. Our tailored
              solutions, commitment to your financial well-being, and dedication
              to simplifying complexity make us your ideal partner on the path
              to lasting financial success.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h4>
                  <Link to="">Wealth Management</Link>
                </h4>
                <p>
                  Comprehensive financial planning and investment strategies
                  tailored to your goals.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-coins"></i>
                </div>
                <h4>
                  <Link to="">Retirement Planning</Link>
                </h4>
                <p>
                  Secure your retirement with personalized savings and
                  investment strategies.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>
                  <Link to="">Investment Advisory</Link>
                </h4>
                <p>Expert guidance for making informed investment decisions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4>
                  <Link to="">Tax Planning</Link>
                </h4>
                <p>
                  Minimize your tax liability with strategic tax planning and
                  optimization.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-home"></i>
                </div>
                <h4>
                  <Link to="">Estate Planning</Link>
                </h4>
                <p>
                  Preserve and manage your wealth for future generations with
                  thoughtful estate planning.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h4>
                  <Link to="">Risk Assessment</Link>
                </h4>
                <p>
                  Identify and mitigate financial risks through thorough risk
                  assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}

      {/* <!-- ======= Testimonials Section ======= --> */}
      {isActive ? (
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div
              className={`tultip ${window.screen.width <= 768 ? "ms-5" : ""}`}
            >
              <i className="far fa-question-circle"></i>
              <span className="tooltip-text">Drag to Change</span>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Name Here</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Name Here</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Name Here</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Name Here</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Name Here</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      ) : null}
      {/* <!-- End Testimonials Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Our office hours are from Monday to Saturday, 10:00 AM to 7:00 PM.
              We are here to serve you during these hours, so please feel free
              to get in touch.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    405 4th Floor Sundaram Hub, Bahucharaji Rd, Karelibagh,
                    Vadodara, Gujarat 390018
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@rudraafinservices.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 98244 69577</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                onSubmit={(e) => sendRequest("/contact", e)}
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      ref={nameRef}
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      ref={emailRef}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group mt-3">
                    <input
                      ref={subjectRef}
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3">
                    <input
                      ref={phoneRef}
                      type="tel"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    ref={messageRef}
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
};

export default Home;
