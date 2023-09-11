import React, { useState, useEffect } from "react";
import "../styles/Products.css";

function Products(props) {

 console.log('LOOK THIS ',props.product);
  const goBack = () => {
    window.history.back();
  };

  return props.product === undefined || props.product === null ? (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          margin: "0",
          color: "#e74c3c",
          cursor: "pointer",
        }}
        onClick={goBack}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          margin: "1rem 0",
        }}
      >
        Page Not Found
      </p>
      <button
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "1.2rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          outline: "none",
        }}
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  ) : (
    <>
      {/* <!-- ======= Introduction/About Us Section ======= --> */}
      <section id="about-us" class="about-us">
        <div class="container" data-aos="fade-up">
          <div class="row content">
            <div class="col-lg-6" data-aos="fade-right">
              <h2>{props.product.MainHead}</h2>
              <h3>{props.product.SubHead}</h3>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
              {props.product.BasicInfo.map((data, idx) => {
                if (data.search(/\@list\@/) !== -1) {
                  return (
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i>{" "}
                        <strong>
                          {data
                            .replace(/\@list\@/, "")
                            .substring(
                              0,
                              data.replace(/\@list\@/, "").indexOf(":") + 1
                            )}
                        </strong>
                        {data
                          .replace(/\@list\@/, "")
                          .substring(
                            data.replace(/\@list\@/, "").indexOf(":") + 1
                          )}
                      </li>
                    </ul>
                  );
                } else if (data.search(/\@italic\@/) !== -1) {
                  return (
                    <p class="fst-italic" key={idx}>
                      {data.replace(/\@italic\@/, "")}
                    </p>
                  );
                } else {
                  return <p key={idx}>{data}</p>;
                }
              })}
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
            <h2>Key Features</h2>
            <p>
              These key features encompass some of the fundamental aspects to
              consider when evaluating financial services.
            </p>
          </div>

          <div class="row">
            {props.product.keyFeatures.map((data, idx) => {
              if (idx % 2 !== 0) {
                // Check if the index is odd
                return (
                  <div class="col-lg-3 col-md-4 mt-4" key={idx}>
                    <div class="icon-box">
                      <i
                        class={props.product.keyFeatures[idx - 1]}
                        style={{ color: "#1977cc" }}
                      ></i>
                      <h3>{data}</h3>
                    </div>
                  </div>
                );
              }
              return null; // Return null for even indices to skip them
            })}
          </div>
        </div>
      </section>

      {/* <!-- ======= Maximum Loan Amount and Repayment Period ======= --> */}
      {props.product.repayment ? (
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
              {props.product.repaymentArray.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>{data.cost}</td>
                    <td>{data.amount}</td>
                    <td>{data.period}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
      {props.product.additionalDetails ? (
        <section id="faq" class="faq">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4">
              <div class="col-lg-4">
                <div class="content px-xl-5">
                  <h3>
                    Additional Details & <strong>Requirements</strong>
                  </h3>
                  <p>
                    These are extra pieces of information requested during a
                    financial application process. For instance, when applying
                    for a loan, you may be asked to provide documents such as
                    pay stubs, bank statements, or proof of residence. These
                    additional details are essential as they enable the
                    financial institution to gain a deeper understanding of your
                    financial situation.
                  </p>
                </div>
              </div>

              <div class="col-lg-8">
                <div
                  class="accordion accordion-flush"
                  id="faqlist"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {props.product.additionalDetailsArray.map((dataObj, idx) => {
                    const collapseId = `faq-content-${idx}`; // Create a unique ID for each accordion

                    return (
                      <div key={idx} class="accordion-item">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`} // Use the unique ID as data-bs-target
                          >
                            <span class="num">{idx + 1}.</span>
                            {dataObj.heading}
                          </button>
                        </h3>
                        <div
                          id={collapseId} // Set the ID of the collapsible content
                          class="accordion-collapse collapse"
                          data-bs-parent="#faqlist"
                        >
                          <div class="accordion-body">
                            <ul className="docfeatures">
                              {dataObj.detail.map((data, idx) => {
                                return (
                                  <li key={idx}>
                                    <i className="fas fa-check"></i>
                                    {data}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
    // <div>HELLO</div>
  );
}

export default Products;
