// Partner.js
import React, { useRef } from 'react';
import '../styles/Partner.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Partner = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();

  const sendRequest = async (route, e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', nameRef.current.value);
      formData.append('email', emailRef.current.value);
      formData.append('phone', phoneRef.current.value);
      formData.append('address', addressRef.current.value);
      formData.append('message', messageRef.current.value);

      const response = await axios.post('http://127.0.0.1:5000'+route, formData, {
        headers: {
          'Content-Type': 'application/json', // Set the appropriate Content-Type
        },
      });

      if (response.status === 200) {
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        addressRef.current.value = '';
        messageRef.current.value = '';

        toast.success("Your appointment request has been sent successfully. Thank you!");
      }
    } catch (error) {
      console.error(error);
      // Handle errors here (e.g., display an error message to the user)
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {/* <!-- ======= Appointment Section ======= --> */}
      <section id="appointment" className="appointment section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Become a Partner</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...</p>
          </div>

          <form onSubmit={(e) => sendRequest('/api/become-partner', e)} method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input ref={nameRef} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input ref={emailRef} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input ref={phoneRef}
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  inputMode="numeric"
                  pattern="[0-9]{10}" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 form-group mt-3">
                <input ref={addressRef} type="address" name="date" className="form-control datepicker" id="date" placeholder="Address" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea ref={messageRef} className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Submit</button></div>
          </form>
        </div>
      </section>
      {/* <!-- End Appointment Section --> */}
    </>
  );
};

export default Partner;
