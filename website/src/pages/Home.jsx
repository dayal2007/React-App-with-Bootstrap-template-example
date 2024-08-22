import React, { useEffect } from 'react';
import Loading from './../components/Loading';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
      AOS.init({
          duration: 700, // Animation duration
          easing: 'ease-out-cubic', // Easing function
          once: true, // Whether animation should happen only once
      });
  }, []);
  return (
  <>
    <Loading></Loading>
    <main className="main">
    <section id="alt-services" className="alt-services section pt-0">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/services-1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/services-2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/services-3.jpg" className="img-fluid" alt="" />
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              </div>
            </div>
          </div> 

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/services-4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Asperiores Commodit</h3>
                </a>
                <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                <a href="service-details.html" className="stretched-link"></a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section id="clients" className="clients section light-background">
      <div className="container-fluid pt-0" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-xl-2 col-md-3 col-6 client-logo mt-0">
            <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
          </div>

          <div className="col-xl-2 col-md-3 col-6 client-logo mt-0">
            <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
          </div>

          <div className="col-xl-2 col-md-3 col-6 client-logo mt-0">
            <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
          </div>

          <div className="col-xl-2 col-md-3 col-6 client-logo mt-0">
            <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
          </div>

          <div className="col-xl-2 col-md-3 col-6 client-logo mt-0">
            <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
          </div>

          <div className="col-xl-2 col-md-3 col-6 client-logo mt-0">
            <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
          </div>

        </div>

      </div>

    </section>


    </main>
  </>
  );
}

export default Home;