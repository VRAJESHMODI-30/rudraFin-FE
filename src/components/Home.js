import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import '../styles/leaflet.css'; // Ensure Leaflet CSS is imported
import Swiper from "swiper"; // Import Swiper library
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/Home.css"; // Import the CSS file
import "../../node_modules/swiper/swiper-bundle.min.css";

const Home = () => {
  // Define the initial coordinates and zoom level
  const center = [22.315794604413476, 73.19809006006648]; //change logitude and logitude to set location
  const zoom = 15;

  // useEffect(() => {
  //   // Initialize Swiper
  //   const testimonialsSlider = new window.Swiper(".testimonials-slider", {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     loop: true,
  //     autoplay: {
  //       delay: 5000, // Autoplay delay in milliseconds
  //     },
  //     // breakpoints: {
  //     //   320: {
  //     //     slidesPerView: 1,
  //     //     spaceBetween: 20
  //     //   },
  //     //   1200: {
  //     //     slidesPerView: 2,
  //     //     spaceBetween: 20
  //     //   }
  //     // }
  //   });

  //   // Enable manual sliding on mobile
  //   let touchStartX = 0;
  //   testimonialsSlider.el.addEventListener("touchstart", (e) => {
  //     touchStartX = e.touches[0].clientX;
  //   });

  //   testimonialsSlider.el.addEventListener("touchmove", (e) => {
  //     const touchEndX = e.touches[0].clientX;
  //     if (touchStartX - touchEndX > 50) {
  //       testimonialsSlider.slideNext();
  //     } else if (touchEndX - touchStartX > 50) {
  //       testimonialsSlider.slidePrev();
  //     }
  //   });
  // }, []);

  useEffect(() => {
    new Swiper('.testimonials-slider', {
      // Swiper configuration options
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }, []);
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Rudraa Finance</h1>
          <h2>
            We are a Team of Financial Experts Crafting Prosperity with
            Precision.
          </h2>
          <Link to="/product_1" className="btn-get-started scrollto">
            Get Started
          </Link>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <Link to="/about" className="more-btn">
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
                      <i className="bx bx-receipt"></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Labore consequatur</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-money-bill-trend-up"></i>
                </div>
                <h4>
                  <Link to="">Lorem Ipsum</Link>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-money-bill"></i>
                </div>
                <h4>
                  <Link to="">Sed ut perspiciatis</Link>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-list-check"></i>
                </div>
                <h4>
                  <Link to="">Magni Dolores</Link>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-credit-card"></i>
                </div>
                <h4>
                  <Link to="">Nemo Enim</Link>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-piggy-bank"></i>
                </div>
                <h4>
                  <Link to="">Dele cardo</Link>
                </h4>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h4>
                  <Link to="">Divera don</Link>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}

      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className={`tultip ${window.screen.width<=768 ? 'ms-5' : ''}`}>
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
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
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
                      quem eram duis noster aute amet eram fore quis sint minim.
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
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
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
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
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
      {/* <!-- End Testimonials Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
        </div>

        {/* <div>
        <iframe style={{border:"0", width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div> */}
        <MapContainer
          className="mx-auto"
          center={center}
          zoom={zoom}
          style={{ width: "95%", height: "350px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <Link to="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
          />
          <Marker position={center}>
            <Popup>
              <b>Address</b>
              <br />
              405 4th Floor Sundaram Hub, Bahucharaji Rd, Karelibagh,
              Vadodara, Gujarat 390018
            </Popup>
          </Marker>
        </MapContainer>

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
                  <p>info@example.com</p>
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
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
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
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
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
