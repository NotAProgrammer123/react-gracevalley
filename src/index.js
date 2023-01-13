import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './NavBar';
import Topbar from './TopBar';
import Slider from './Slider';
import Footer from './Footer';
import About from './About';
import Story from './My_Life_Story';
import Author from './About_Author';
import Contact from './Contact';
import Purchase from './Purchase';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

window.onload = () => {
  const yocoSDK = new window.YocoSDK({
    publicKey: 'pk_live_68fbb7ecAVOoYJRe35d4'
});

//Popup Method
['#purchaseBtn1', '#purchaseBtn2'].forEach((element) => {
  $(element).click(() => {
    yocoSDK.showPopup({
        currency: 'ZAR',
        amountInCents: 30000,
        name: 'Finding Grace In The Valley Book',
        callback: response => {
            if(response.error){
                $('.popup p').html(response.error.message);
            }
            else{
                fetch('/pay', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token: response.id })
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.errorCode){
                            $('.popup p').html(data.displayMessage);
                        }
                        else{
                            $('.popup p').html(data.status);
                        }
                    })
                    .catch(error => {
                        $('.popup p').html(error.message);
                    })
            }
        }
    })
})
})

}


class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elements: [<Slider />, <About />] 
    };

  }

  handleStory = (e) => {
    this.setState({
      elements: [<Story/>]
    });
    e.preventDefault();
  }

  handleHome = (e) => {
    this.setState({
      elements: [<Slider />, <About />]
    });
    e.preventDefault();
  }

  handleAuthor = (e) => {
    this.setState({
      elements: [<Author/>]
    });
    e.preventDefault();
  }

  handleContact = (e) => {
    this.setState({
      elements: [<Contact/>]
    });
    e.preventDefault();
  }

  handleOrder = (e) => {
    e.preventDefault();

    this.setState({
      elements: [<Purchase />]
    });
  
  }

  


  render () {
    return (
      <HelmetProvider>
      <>

    
      <Helmet>
          <title>Finding Grace In The Valley</title>
          <script src="https://js.yoco.com/sdk/v1/yoco-sdk-web.js"></script>
          <link rel="shortcut icon" type="image/x-icon" href="Finding Grace Cover4.jpg"></link>
      </Helmet>
    
      

       <Topbar />

      
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5" id = "actualNav"> 
        <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-primary"><span className="text-dark">Finding Grace</span> In The Valley</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
                <a href="home" id="homeNav" className="nav-item nav-link active" onClick={this.handleHome}>Home</a>
                <a href="my-life-story" id="storyNav" className="nav-item nav-link" onClick={this.handleStory}>My Life Story</a>
                <a href="about-author" id="authorNav" className="nav-item nav-link" onClick={this.handleAuthor}>About Author</a>
                <a href="purchase" id="purchaseNav" className="nav-item nav-link" onClick={this.handleOrder}>Purchase Details</a>
                <a href="contact" id="contactLink" className="nav-item nav-link" onClick={this.handleContact}>Contact Us</a>
            </div>
            <a href="" className="btn btn-primary d-none d-lg-block" id="purchaseBtn1" onClick={this.handleOrder}>Order Book</a>
        </div>
    </nav>

       {this.state.elements}
       
       <Footer />
      </>
      </HelmetProvider>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
