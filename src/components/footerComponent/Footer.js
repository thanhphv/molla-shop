import React from 'react'
import logoFooter from '../../images/logo-footer.png'
import payments from '../../images/payments.png'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-top">
                    <div className="widget">
                        <img src={logoFooter} className="footer-logo" />
                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                        <div className="social-icons">
                            <a className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="social-icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a className="social-icon">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">Useful Links</h4>
                        <ul className="widget-list">
                            <li><a>About Molla</a></li>
                            <li><a>How to shop on Molla</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">Customer Service</h4>
                        <ul className="widget-list">
                            <li><a>Payment Methods</a></li>
                            <li><a>Money-back guarantee!</a></li>
                            <li><a>Shipping</a></li>
                            <li><a>Terms and conditions</a></li>
                            <li><a>Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h4 className="widget-title">My Account</h4>
                        <ul className="widget-list">
                            <li><a>Sign In</a></li>
                            <li><a>View Cart</a></li>
                            <li><a>My Wishlist</a></li>
                            <li><a>Track My Order</a></li>
                            <li><a>Help</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">Copyright © 2021 Molla Store. All Rights Reserved.
                    </p>
                    <div className="footer-payments">
                        <img src={payments} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
