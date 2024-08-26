import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';

import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';

function TopAdvertisement() {
    const isHome = useMatch('/');
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            autoplayVideos: false, // Optional: to autoplay videos
        });
    }, []);

    return(
    isHome ? 
    <>
    <div className="master-banner">
        <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <section id="hero" className="hero section">
        <div className="container">
            <div className="row gy-4">
            <div className="col-6 order-2 order-1 d-flex flex-column justify-content-center">
                <h1>Grow your business with MyDeals</h1>
                <p>We are team of talented designers making advertisements for you.</p>
                <div className="d-flex">
                <a href="#about" className="btn-get-started">Get&nbsp;Started</a>&nbsp;
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"  type="video" source="youtube" className="glightbox btn-watch-video d-flex align-items-center btn-get-started" 
            data-glightbox="youtube">Video</a>
                </div>
            </div>
            <div className="col-6 order-1 order-2 hero-img">
                <img src="assets/img/food.jpg" className="img-fluid animated" alt="" />
            </div>
            </div>
        </div>
        </section>
        </div>
    </div>
    </>
    : <> </>
    );
  }
  
  export default TopAdvertisement;