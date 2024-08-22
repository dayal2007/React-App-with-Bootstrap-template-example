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
    <main class="main">
    <section id="alt-services" class="alt-services section pt-0">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="img">
                <img src="assets/img/services-1.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details">
                <a href="service-details.html" class="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
            <div class="service-item position-relative">
              <div class="img">
                <img src="assets/img/services-2.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details">
                <a href="service-details.html" class="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="img">
                <img src="assets/img/services-3.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details">
                <a href="service-details.html" class="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              </div>
            </div>
          </div> 

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="500">
            <div class="service-item position-relative">
              <div class="img">
                <img src="assets/img/services-4.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details">
                <a href="service-details.html" class="stretched-link">
                  <h3>Asperiores Commodit</h3>
                </a>
                <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                <a href="service-details.html" class="stretched-link"></a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </main>
  </>
  );
}

export default Home;