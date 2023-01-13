import axios from 'axios';
import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    checkEmpty = (str) => {
      let iLetters = 0;
      let bReturn;
        for (let i = 0; i < str.toString().length; i++) {
            if ( (str[i] !== ' ') &&  (str[i] !== '') ) {
                iLetters++;
            }
        }
        
        iLetters === 0 ? bReturn = true : bReturn = false;
        return bReturn;
    }


    sendMail = () => {
        
        let empty = false;
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;
        
        [username, email, subject, message].forEach((field) => {
           if(this.checkEmpty(field)) {
               empty = true;
           }
        });

         if (empty) {
            document.getElementById('formH1').textContent = 'Please Fill All Fields';
         } else {
            //email code goes here
            
            let data = {username: username, email: email, message: message, subject: subject}

            axios.post('http://192.168.43.99:3001/sendmail', {data})
            .then(result => {
                document.getElementById('formH1').textContent = result.data.resp;
            })
            .catch(error => {
                document.getElementById('formH1').textContent = 'An Error Occured. Please Try Again';
            })
                
        }
    
    }


    render () {
        return (
            <>
             <div className="container-fluid py-5">
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6" style={{minHeight: '500px'}}>
                <div className="position-relative h-100">
                    <iframe className="position-absolute w-100 h-100" src="valley1.jpg" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
                <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                    <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                    <h1 className="mb-4" id ="formH1">Contact For Any Query</h1>
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" noValidate="noValidate">
                        <div className="form-row">
                            <div className="col-sm-6 control-group">
                                <input type="text" className="form-control border-0 p-4" id="username" placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="col-sm-6 control-group">
                                <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject"
                                required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control border-0 py-3 px-4" rows="3" id="message" placeholder="Message"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-primary py-3 px-4" type="button" id="sendMessageButton" onClick={this.sendMail}>Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
            </>
        );
    }
}

export default Contact;

