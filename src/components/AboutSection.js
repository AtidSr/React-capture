import React from 'react'
import home1 from '../img/home1.png'
const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We wirk to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dearms</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contract us for any photography or videography ideas that you have professionals with amazing skills.</p>
                <button>Contract Us</button>
            </div>
            <div className="imgage">
                <img src={home1} alt="guy with a camara"/>
            </div>
        </div>
    )
}

export default AboutSection