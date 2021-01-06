import React from 'react'
// import styled from 'styled-components'
import home1 from '../img/home1.png'
import {About, Description, Image, Hide} from '../Styles'
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave' 

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dearms</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contract us for any photography or videography ideas that you have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contract Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camara"/>
            </Image>
            <Wave/>
        </About>
    )
}

export default AboutSection