import './NavBar.css';
import './style.css';
import './home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './navRespond';
import 'popper.js/dist/popper';
import jQuery  from 'jquery';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Topbar extends Component {


    handleMessage = (e) => {
        e.preventDefault();
        alert('This Feature Is Coming Soon!');    
    }

    handleForm = (e) => {
        e.preventDefault();
        document.getElementById('contactLink').click();
    }


    render() {
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
<div id="topbar">   
    <div className="row py-2 px-lg-5">
        <div className="col-lg-6 text-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
                <small><i className="fa fa-phone-alt mr-2"></i><a href = "#" className="toplink" onClick={this.handleMessage}>Message Us On The Site</a></small>
                <small className="px-3">|</small>
                <small><i className="fa fa-envelope mr-2"></i><a href = "#" className="toplink" onClick={this.handleForm}>Contact Form</a></small>
            </div>
        </div>
    </div>
</div>
        
    </>
        
     
        )
    }
}

export default Topbar;