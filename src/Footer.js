import './NavBar.css';
import './style.css';
import './home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './navRespond';
import 'popper.js/dist/popper';
import jQuery  from 'jquery';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Footer extends Component {
    render () {
        return (
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
             <div className="footer container-fluid position-relative bg-dark py-5" style={{marginTop: '10vh'}}>
    <div className="container pt-5">
        <div className="row">
            <div className="col-lg-6 pr-lg-5 mb-5">
                <a href="index.html" className="navbar-brand">
                    <h1 className="mb-3 text-white"><span className="text-primary">Finding Grace</span> In The Valley</h1>
                </a>
                <p>If you are interested in reaching out to us, feel free to message us on our messaging portal or submit an email to us right on this site ("Contact Us" option on the menu)</p>
                <p><i className="fa fa-phone-alt mr-2"></i><a href = "#">Message Us On The Site</a></p>
                <p><i className="fa fa-envelope mr-2"></i><a href = "#">Contact Form</a></p>
            </div>
            <div className="col-lg-6 pl-lg-5">
                <div className="row">
                    <div className="col-sm-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>My Life Story</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Author</a>
                            <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Purchase Book</a>
                            <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

                    
                    
<div className="container-fluid bg-dark text-light border-top py-4" style={{borderColor: 'rgba(256, 256, 256, .15) !important'}}>
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <a href="#">Finding Grace In The Valley</a>. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</div>
</div>
            </>
        )
    }
}

export default Footer;