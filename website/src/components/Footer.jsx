import React from 'react';

function Footer() {
  return (
    <>
    <footer id="footer" className="footer">
    <div className="container">
      <div className="copyright text-center ">
        <p>&copy; <span>Copyright</span> <strong className="px-1 sitename">MyDeals</strong> <span>All Rights Reserved</span></p>
      </div>
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="credits">
        Powered by <a href="https://mydeals.ie/">MyDeals</a>
      </div>
    </div>
  </footer>
  <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </>
  );
}

export default Footer;