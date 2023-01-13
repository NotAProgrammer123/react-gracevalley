import './NavBar.css';
import './style.css';
import './home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './navRespond';
import 'popper.js/dist/popper';
import jQuery  from 'jquery';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Slider extends Component {
    render () {
        return(
            <>
            <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js" integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.caroufredsel/6.2.1/jquery.carouFredSel.packed.js" integrity="sha512-5Thlno/Mv5W8d5z7eEuOahEZ3nXZ0uAuOgf8m7p7+/9Ltkzt9sn9z6sR87m/9bqW9vqpywUq65YeNW0MuzW9Bw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <link href="favicon.ico" rel="icon"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link>
                <link href="lib/animate/animate.min.css" rel="stylesheet"></link>
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"></link>
                <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
            </Helmet>

            <div className="container-fluid p-0 mb-5 pb-5">
    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
            <li data-target="#header-carousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{minHeight: '100vh'}}>
                <img className="position-absolute w-100 h-100" src="valley1.jpg" style={{objectFit: 'cover'}}></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: '900vw'}}>
                        <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: '1vw'}}>Finding Grace In The Valley</h6>
                        <h3 className="display-3 text-capitalize text-white mb-3">Finding Grace In The Valley</h3>
                        <p className="mx-md-5 px-5">Scroll to next slide to read about the story...</p>
                    </div>
                </div>
            </div>
            <div className="carousel-item position-relative" style={{minHeight: '100vh'}}>
                <img className="position-absolute w-100 h-100" src="desertvalley.jpg" style={{objectFit: 'cover'}}></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{objectFit: 'cover'}}>
                        <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: '1vw'}}>Finding Grace In The Valley</h6>
                        <h3 className="display-3 text-capitalize text-white mb-3">Read this thrilling story about a young African girl's journey to find God</h3>
                    </div>
                </div>
            </div>
            <div className="carousel-item position-relative" style={{minHeight: '100vh'}}>
                <img className="position-absolute w-100 h-100" src="rockvalley.jpg" style={{objectFit: 'cover'}}></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{objectFit: 'cover'}}>
                        <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: '1vw'}}>Finding Grace In The Valley</h6>
                        <h3 className="display-3 text-capitalize text-white mb-3">A heartwarming story about perseverance, strength and courage</h3>
                    </div>
                </div>
            </div>
            <div className="carousel-item position-relative" style={{minHeight: '100vh'}}>
                <img className="position-absolute w-100 h-100" src="walking1.jpg" style={{objectFit: 'cover'}}></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{objectFit: 'cover'}}>
                        <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: '1vw'}}>Finding Grace In The Valley</h6>
                        <h3 className="display-3 text-capitalize text-white mb-3">Online Purchase Available For All Countries</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
        )
    }
}

export default Slider;