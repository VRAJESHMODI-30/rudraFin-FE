import React, { useState, useEffect } from "react";
import "../styles/Products.css";

function Products() {
  return (
    <>
      {/* <!-- ======= Introduction/About Us Section ======= --> */}
      <section id="about-us" class="about-us">
        <div class="container" data-aos="fade-up">
          <div class="row content">
            <div class="col-lg-6" data-aos="fade-right">
              <h2>Why Opt for Rudraa Finance Home Loans?</h2>
              <h3>
                Discover the compelling reasons to choose Rudraa Finance when it
                comes to securing a home loan.
              </h3>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
              <p>
                At Rudraa Finance Services, we understand that securing a
                housing loan is a significant milestone on the journey to
                achieving your dream home. We take pride in offering a diverse
                range of home loan options that are not only tailored to your
                specific needs but also come with some of the most competitive
                interest rates in the market.
              </p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i>{" "}
                  <strong>Tailored Solutions:</strong> Our housing loan
                  solutions are designed to accommodate a wide customer base,
                  including salaried individuals, self-employed professionals,
                  and NRIs, among others.
                </li>
                <li>
                  <i class="ri-check-double-line"></i>{" "}
                  <strong> Customization:</strong> We believe in customization,
                  ensuring that our products are perfectly aligned with your
                  unique home loan eligibility.
                </li>
              </ul>
              <p class="fst-italic">
                Your dream home is within reach, and at Rudraa Finance Services,
                we are here to make it a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Required Document/Why Us Section ======= --> */}
      <section id="why-us-productPage" class="why-us-productPage section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content">
                <h3>
                  Required <strong>Documents</strong>
                </h3>
                <p>
                  In order to facilitate a smooth and efficient application
                  process, we kindly request that you provide the following
                  essential documents as part of your application for a home
                  loan or similar financial service. These documents are crucial
                  for verifying your identity, assessing your financial
                  eligibility, and ensuring compliance with regulatory
                  requirements. We have categorized the required documents into
                  three main sections for your convenience:
                </p>
              </div>

              <div class="accordion-list">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      class="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      <span>01</span>KYC documents{" "}
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1"
                      class="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <ul className="docfeatures">
                        <li>
                          <i className="fas fa-check"></i> PAN Card
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Aadhaar Card
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Passport (for NRIs)
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Proof of residence
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      class="collapsed"
                    >
                      <span>02</span> Income documents{" "}
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-2"
                      class="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <ul className="docfeatures">
                        <li>
                          <i className="fas fa-check"></i> Salary slips and Form
                          No.16 (for salaried)
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Bank statements for
                          the last 6 to 12 months
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Last 3 years income
                          tax returns along with financials (for self-employed
                          or professionals)
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      class="collapsed"
                    >
                      <span>03</span> Property Documents (if property is
                      identified) <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-3"
                      class="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <ul className="docfeatures">
                        <li>
                          <i className="fas fa-check"></i> Proof of ownership of
                          the property
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Allotment letter of
                          builder/society (for flats)
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Up-to-date tax paid
                          receipt
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              id="documentImg"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= key features/Features Section ======= --> */}
      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Features</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box">
                <i class="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                <h3>
                  Online home loan approval process
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i
                  class="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>
                  Expedited approval with affordable EMIs
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i
                  class="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>
                  Streamlined documentation requirements
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box">
                <i class="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                <h3>
                  
                    {" "}
                    Maximum tenure of 30 years or until the age of 60, whichever
                    comes earlier
                  
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-database-2-line" style={{ color: "#47aeff;" }}></i>
                <h3>
                  Highly competitive and flexible interest rates
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                <h3>
                  No prepayment penalty
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                <h3>
                  
                    Applicable for property construction, purchase, or
                    repairs/renovation
                  
                </h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-price-tag-2-line" style={{ color: "#4233ff" }}></i>
                <h3>
                  Option for loan takeover or balance transfer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <!-- ======= Maximum Loan Amount and Repayment Period ======= --> */}
      <div className="section-title" id="backBlue">
        <h2 className="h2Class">Maximum Loan Amount and Repayment Period</h2>
        <table
          className="table-bordered"
          style={{ width: "80%", margin: "auto" }}
        >
          <thead>
            <tr>
              <th>Property Cost</th>
              <th>Maximum Loan Amount</th>
              <th>Maximum Repayment Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to Rs. 30 lakh</td>
              <td>90% of Property value</td>
              <td>Maximum 30 years for salaried individuals</td>
            </tr>
            <tr>
              <td>More than Rs. 30 lakh and up to Rs. 75 lakh</td>
              <td>80% of Property value</td>
              <td>Maximum 25 years for self-employed professionals</td>
            </tr>
            <tr>
              <td>Above Rs. 75 lakh</td>
              <td>75% of Property value</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
    <section id="faq" class="faq">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3>Additional Details & <strong>Requirements</strong></h3>
              <p>
              These are extra pieces of information requested during a financial application process. For instance, when applying for a loan, you may be asked to provide documents such as pay stubs, bank statements, or proof of residence. These additional details are essential as they enable the financial institution to gain a deeper understanding of your financial situation.
              </p>
            </div>
          </div>

          <div class="col-lg-8">

            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span class="num">1.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h3>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  <ul className="docfeatures">
                        <li>
                          <i className="fas fa-check"></i> PAN Card
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Aadhaar Card
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Passport (for NRIs)
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Proof of residence
                        </li>
                      </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span class="num">2.</span>
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                  </button>
                </h3>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>

    </>
  );
}

export default Products;
