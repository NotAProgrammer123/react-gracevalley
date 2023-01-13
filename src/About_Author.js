import React, { Component, useState } from 'react';

class Author extends Component {
    render () {
        return(
           <> 
            <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 pb-5 pb-lg-0">
                    <img className="img-fluid w-100" src="faceimage.png" alt=""/>
                </div>
                <div className="col-lg-6">
                    <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Author</h6>
                    <p className="pl-4 border-left border-primary">Author, Violet, is a 47-year-old African
                    woman (at the time of publishing). She has been a corporate lawyer for more than 20 years, is an entrepreneur, and now a published author.
                    She is a born again Christian since 2018. </p>
                    <div className="row pt-3">
                        <div className="col-6">
                            <div className="bg-light text-center p-4">
                                <h3 className="display-4 text-primary" data-toggle="counter-up">20+</h3>
                                <h6 className="text-uppercase">Years Experience In Corporate Law</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="bg-light text-center p-4">
                                <h3 className="display-4 text-primary" data-toggle="counter-up">5+</h3>
                                <h6 className="text-uppercase">Years As A Born-Again Christian</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          </>  
        );
    }
}

export default Author;

