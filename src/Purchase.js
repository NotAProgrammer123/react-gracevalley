import React, { Component } from 'react';
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';


class Purchase extends Component {
    


   
    render () {
        return (
            <HelmetProvider>
            <>
            
            <Helmet>
          <title>Finding Grace In The Valley</title>
          <script src="https://js.yoco.com/sdk/v1/yoco-sdk-web.js"></script>
          <link rel="shortcut icon" type="image/x-icon" href="Finding Grace Cover4.jpg"></link>
      </Helmet>
             <div className="container-fluid py-5">
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-5" style={{minHeight: '500px'}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100" src="Finding Grace Cover4.jpg" style={{objectFit: 'cover'}} />
                </div>
            </div>
            <div className="col-lg-7 pt-5 pb-lg-5">
                <div className="pricing-text bg-light p-4 p-lg-5 my-lg-5">
                    <div className="owl-carousel pricing-carousel">
                        <div className="bg-white">
                            <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted font-weight-medium" style={{fontSize: '22px', lineHeight: '45px'}}>R</small>191.00<small className="align-bottom text-muted font-weight-medium" style={{fontSize: '16px', lineHeight: '40px'}}>/Price</small>
                                </h1>
                                <h5 className="text-primary text-uppercase m-0">Online Purchase</h5>
                            </div>
                            <div className="p-4">
                                <p><i className="fa fa-check text-success mr-2"></i>Shipping Available</p>
                                <p><i className="fa fa-check text-success mr-2"></i>Copyright Protected</p>
                                <p><i className="fa fa-check text-success mr-2"></i>Available For Purchase In All Countries</p>
                                <p><i className="fa fa-check text-success mr-2"></i>Amazon Published</p>
                                <p><i className="fa fa-check text-success mr-2"></i>Aligned With The Word Of God</p>
                                <a href="" className="btn btn-primary my-2" id='purchaseBtn2' onClick={this.handleClick}>Order Book</a>
                            </div>
                        </div>
                        
                        
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
            </>
        </HelmetProvider>
        );
        
    }
    handleClick = (e) => {
        e.preventDefault();

        const yocoSDK = new window.YocoSDK({
            publicKey: 'pk_live_68fbb7ecAVOoYJRe35d4'
        });


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
    }

}

export default Purchase;


