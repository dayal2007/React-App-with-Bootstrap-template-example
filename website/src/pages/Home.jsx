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

    <section id="features" className="features section">


      <div className="container section-title" data-aos="fade-up">
        <h2>Today's MyDeals</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
              <i className="bi bi-eye"></i>
              <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="features-item">
              <i className="bi bi-infinity"></i>
              <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="features-item">
              <i className="bi bi-mortarboard"></i>
              <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="features-item">
              <i className="bi bi-nut"></i>
              <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="features-item">
              <i className="bi bi-shuffle"></i>
              <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="features-item">
              <i className="bi bi-star"></i>
              <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="features-item">
              <i className="bi bi-x-diamond"></i>
              <h3><a href="" className="stretched-link">Midela Teren</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
            <div className="features-item">
              <i className="bi bi-camera-video"></i>
              <h3><a href="" className="stretched-link">Pira Neve</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
            <div className="features-item">
              <i className="bi bi-command"></i>
              <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
            <div className="features-item">
              <i className="bi bi-dribbble"></i>
              <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
            <div className="features-item">
              <i className="bi bi-activity"></i>
              <h3><a href="" className="stretched-link">Verdo Park</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
            <div className="features-item">
              <i className="bi bi-brightness-high"></i>
              <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section id="portfolio" className="portfolio section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Featured MyDeals</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
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