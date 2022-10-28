import React from 'react'
import IntroSlide from './IntroSlide'
import IntroItem from './IntroItem'
import Brands from './Brands'

const Intro = () => {
    return (
        <div className="intro-section">
            <div className="container">
                <div className="intro">
                    <div className="left-intro">
                        <IntroSlide />
                    </div>
                    <div className="right-intro">
                        <IntroItem />
                    </div>
                </div>
                <div className="brand">
                    <Brands />
                </div>

            </div>
        </div>
    )
}

export default Intro
