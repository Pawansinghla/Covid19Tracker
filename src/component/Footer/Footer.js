import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

import styles from './Footer.module.css';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

function Footer() {
    return (
        <div className="footer" className={styles.footer}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center mt-2">
                        <a  target="none" className="btn btn-social-icon bt-email  round" href="mailto:pawansinghla300@gmail.com"><i className="fa fa-envelope pr-1"></i></a>
                      &nbsp; &nbsp;
                        <a  target="none" className="btn btn-social-icon btn-facebook round " href="https://www.facebook.com/profile.php?id=100006731377332"><i className="fa fa-facebook"></i></a>
                        &nbsp; &nbsp;
                        <a  target="none" className="btn btn-social-icon btn-linkedin round" href="https://www.linkedin.com/in/pawansinghla300/"><i className="fa fa-linkedin"></i></a>
                        &nbsp; &nbsp;
                        <a target="none"  className="btn btn-social-icon btn-twitter round" href="https://twitter.com/SinghlaPawan"><i className="fa fa-twitter"></i></a>
                      

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <p>© Copyright 2020 Pawan Singhla</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;