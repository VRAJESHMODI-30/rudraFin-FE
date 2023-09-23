// About.js
import React, { useEffect } from 'react';
import '../styles/About.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const About = () => {
  return (
   <>

{/* <!-- ======= About Section ======= --> */}
    <section id="aboutus" className={`aboutus ${window.innerWidth < 768 ? 'pt-0 pb-4' : ''}`}>
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <div className="col-lg-5 d-flex align-items-center ps-0">
            <img src="assets/img/about-background.svg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-7 content ">
            <h1><strong>Rudraa Finserv's</strong> Journey to Market Excellence</h1>
            <p className="fst-italic py-3">
            Becoming the best in the financial services market was not an overnight achievement for Rudraa Finserv. It was the result of years of dedication, innovation, and a commitment to excellence.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Established:</strong> <span>Since 2007</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.rudraafinservices.com</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9824469577<br/>+91 9824390727</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Vadodara, Gujarat</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li> */}
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>info@rudraafinservices.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.rudraafinservices.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Expertise:</strong> <span>14+ Years of Financial Expertise</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
            Rudraa Fin Services Private Limited stands as a testament to the enduring pursuit of excellence in the financial services industry. With over 14 years of unwavering dedication, our journey has been one of continuous growth and transformation. We have touched the lives of thousands of individuals and businesses, reshaping their financial landscapes and empowering them to reach their goals.Our success is not just measured in numbers but in the trust and satisfaction of over 7,000 valued clients who have chosen us as their financial partner. We are driven by our core values of integrity, innovation, and personalized service, which have been the guiding principles behind our achievements.
            </p>
            <p className="m-0">
            At Rudraa Fin Services, we're committed to leading in industry trends and embracing technology to provide you with top-tier expertise and customized solutions. We're not just a financial service provider; we're your trusted partners on your financial journey. Join us, and together, we'll turn your financial aspirations into reality. Your success is our mission, securing a brighter financial future for you.
            </p>
          </div>
        </div>

      </div>
    </section>

     {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>How We Enhance Your Financial Journey</h3>
            <p>At Rudraa Fin Services, we're your dedicated financial partner, driven by an unwavering commitment to your financial success through trust.</p>

            <div className="icon-box">
              <div className="icon"><i className="fas fa-door-open"></i></div>
              <h4 className="title"><Link to="#">Door-to-Door Service</Link></h4>
              <p className="description">As your trusted financial partner, we go the extra mile to ensure your convenience. Our team brings financial solutions right to your doorstep, providing you with the assurance that we are always there when you need us.</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="far fa-file-alt"></i></div>
              <h4 className="title"><Link to="#">Hassle-Free Documentation</Link></h4>
              <p className="description">We understand that trust is built on transparency and simplicity. Our documentation process is designed to be seamless, eliminating the complexities often associated with financial paperwork. With us, you can trust that your financial affairs are in capable and reliable hands.</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="fa fa-cogs"></i></div>
              <h4 className="title"><Link to="#">Tailored Financial Strategies</Link></h4>
              <p className="description">Trust is nurtured through personalization. We specialize in creating tailored financial strategies that align perfectly with your unique financial goals and aspirations. Our approach is built on understanding your needs, ensuring that every step we take is in your best interest.</p>
            </div>

          </div>
          {/* col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative */}
          <div className="col-lg-5 d-flex align-items-center ps-0">
            {/* <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></Link> */}
            {/* <img src="assets/img/about-skills.png" className="img-fluid" alt=""/> */}
            <img src="assets/img/about-skills.png" className="img-fluid" alt=""/>
          </div>

        </div>
      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className='col-lg-2'></div>
          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
            <i className="fa-solid fa-handshake"></i>
              <CountUp  start={0} end={7000}  duration={1.25}  suffix="+" />
              <p>Clients</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="fas fa-award"></i>
              <CountUp start={0} end={100}  duration={1.25}  suffix=" cr+" />
              <p>Funds Empowered</p>
            </div>
          </div>
          <div className='col-lg-2'></div>
        </div>
      </div>
    </section>
    {/* <!-- End Counts Section --> */}

    {/* <!-- ======= Departments Section ======= --> */}
    <section id="departments" className="departments">
      <div className="container">

        <div className="section-title">
          <h2>Our Vision</h2>
          <p>At Rudraa Fin Services, our visionary mission is driven by innovation, inclusivity, and shared dreams. We're committed to expanding accessibility, reaching remote areas, and empowering individuals and businesses globally. We're also dedicated to making homeownership accessible through government initiatives and fostering financial prosperity.</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <Link className="nav-link active show" data-bs-toggle="tab" to="#tab-1">Remote Reach</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" data-bs-toggle="tab" to="#tab-2">Universal Accessibility</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" data-bs-toggle="tab" to="#tab-3">Global Expansion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" data-bs-toggle="tab" to="#tab-4">Dream Home Realization</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" data-bs-toggle="tab" to="#tab-5">Financial Literacy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Reaching All Corners</h3>
                    <p className="fst-italic">Extending our financial services to remote locations, ensuring that no one is left behind in their pursuit of financial success.</p>
                    <p>We aspire to extend our financial services to even the smallest towns and villages, ensuring that everyone, regardless of their location, has access to the financial resources they need. Our goal is to raise awareness about the opportunities that finance can bring to these underserved areas.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-1.jpg" alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Finance for All</h3>
                    <p className="fst-italic">Ensuring financial accessibility to individuals from all walks of life, making it easier for everyone to achieve their dreams.</p>
                    <p>Our commitment to universal accessibility means that our services are available to all, regardless of their background or circumstances. We aim to break down barriers and provide financial solutions that cater to the diverse needs of individuals from all walks of life.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Network Beyond Borders</h3>
                    <p className="fst-italic">Expanding our distribution network globally, connecting with and assisting clients worldwide.</p>
                    <p>Global expansion signifies our ambition to offer our services across the entire nation, reaching every corner of India. We aspire to connect with and empower individuals and businesses nationwide, making our financial expertise accessible to all.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Empowering Homeownership</h3>
                    <p className="fst-italic">Collaborating with government endeavors to make homeownership a reality for everyone by offering accessible and tailored financing solutions.</p>
                    <p> We support government initiatives aimed at making homeownership a reality for everyone. By offering accessible financing solutions, we contribute to the dream of homeownership, ensuring that individuals can achieve their goal of owning their dream homes with ease.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Empowering Through Knowledge </h3>
                    <p className="fst-italic">Promoting financial literacy and education, ensuring our clients are well-informed and empowered in their financial decision-making.</p>
                    <p>Financial literacy is a cornerstone of our vision. We are dedicated to raising awareness and educating individuals about government financial schemes and their benefits. Our aim is to empower everyone with the knowledge they need to make informed financial decisions and leverage government initiatives to their advantage.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-5.jpg" alt="" className="img-fluid"/>
                  </div>
                </div>``
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Departments Section --> */}
   </>
  );
};

export default About;
