import './NavBar.css';
import './style.css';
import './home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './navRespond';
import 'popper.js/dist/popper';
import jQuery  from 'jquery';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


    class Navbar extends Component {
        render() {
            
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
               
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5" id = "actualNav">
        
        <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-primary"><span className="text-dark">Finding Grace</span> In The Valley</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">My Life Story</a>
                <a href="service.html" className="nav-item nav-link">About Author</a>
                <a href="price.html" className="nav-item nav-link">Purchase Book</a>
                <a href="contact.html" className="nav-item nav-link">Contact Us</a>
            </div>
            <a href="" className="btn btn-primary d-none d-lg-block">Order Book</a>
        </div>
     
    </nav>
                </>
         
            )
        }
            

    }


export default Navbar;