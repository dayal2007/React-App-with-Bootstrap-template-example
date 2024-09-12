import React, { useState } from 'react';
import axios from 'axios';
import Loading from './../components/Loading';

function Contact() {

  const [data, setData] = useState({ name: '', email: '', message:'' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (e) => {






    e.preventDefault();

    const url = 'https://sambhu.mydeals.ie/api_test.php'; // Your API endpoint
    try {
        const response = await axios.post(url, data, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Success:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
  };

  
  return (
  <>
    <main className="main">
    <Loading></Loading>
    <section id="contact" className="contact section">

      <div className="container section-title">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container position-relative">

        <div className="row gy-4">

          <div className="col-lg-5">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>

          </div>

          <div className="col-lg-7">
            <form action="forms/contact.php" method="post" className="php-email-form" onSubmit={handleSubmit}>
              <div className="row gy-4">

                <div className="col-md-6">
                  <input 
                    type="text" 
                    name="name" 
                    value={data.title}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Your Name" 
                    required="" 
                  />
                </div>

                <div className="col-md-6 ">
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    value={data.title}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required="" 
                  />
                </div>

                <div className="col-md-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="subject"
                    value={data.title}
                    onChange={handleChange} 
                    placeholder="Subject" 
                    required="" 
                  />
                </div>

                <div className="col-md-12">
                  <textarea 
                    className="form-control" 
                    name="message"
                    value={data.title}
                    onChange={handleChange} 
                    rows="6" 
                    placeholder="Message" 
                    required="">
                  </textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>

    </main>  
  </>
  );
};

export default Contact;