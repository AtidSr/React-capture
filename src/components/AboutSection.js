import React from 'react'
// import styled from 'styled-components'
import home1 from '../img/home1.png'
import {About, Description, Image, Hide} from '../Styles'
const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dearms</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contract us for any photography or videography ideas that you have professionals with amazing skills.</p>
                <button>Contract Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camara"/>
            </Image>
        </About>
    )
}

export default AboutSection