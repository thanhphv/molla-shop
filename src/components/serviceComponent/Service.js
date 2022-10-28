import React from 'react'

const Service = () => {
    return (
        <div className="service-wrapper">
            <div className="container">
                <div className="service">
                    <div className="service-item">
                        <div className="service-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <div className="service-content">
                            <h3>Payment & Delivery</h3>
                            <span>Free shipping for orders over $50</span>
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">
                            <i className="fas fa-undo"></i>
                        </div>
                        <div className="service-content">
                            <h3>Return & Refund</h3>
                            <span>Free 100% money back guarantee</span>
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">
                            <i className="far fa-life-ring"></i>
                        </div>
                        <div className="service-content">
                            <h3>Quality Support</h3>
                            <span>Alway online feedback 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
