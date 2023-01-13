import './NavBar.css';
import './style.css';
import './home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './navRespond';
import 'popper.js/dist/popper';
import jQuery  from 'jquery';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class About extends Component {
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
            <div className="container-fluid py-5" id="">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 pb-5 pb-lg-0">
                        <img className="img-fluid w-100" src="Finding Grace Cover4.jpg" alt=""></img>
                    </div>
                    <div className = "col-lg-6">
                        <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Book</h6>
                        <h1 className="mb-4">“MY STORY, FOR HIS GLORY”</h1>
                        <p className="pl-4 border-left border-primary">The book is dedicated to the orphans around the world (and everyone seeking God), to make them aware of God’s love for them and to glorify Him. It depicts a life of great tribulation (life’s challenges and spiritual warfare), a fighting spirit, and unveiling the meaning of faith. This was a journey traveled with God, but unknowingly so. Ultimately, it is about achieving victory through the Lord Jesus Christ. This book seeks to: Soothe your pain, and to make you realise that even if your parents had to leave, your Heavenly Father is always with you; Encourage you to trust Him to make better choices for yourself; Encourage you to always invite the Holy Spirit for divine guidance in your life; Impart to you the knowledge that God created you as a warrior, an overcomer, and that there are no coincidences in this world; Share with you, the author's story of fear and loneliness in the valley, to help you overcome yours. Encourage you to never let the devil steal your joy, hope, or your peace. These are tools necessary for this journey. Inspire you, the reader, to share your story so that others may benefit from it. Share with you about discovering the author's destiny and purpose. About the author.. Author, Violet, is a 47-year-old African woman. She has been a corporate lawyer for more than 20 years, is an entrepreneur, and is now also a published author.</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default About;