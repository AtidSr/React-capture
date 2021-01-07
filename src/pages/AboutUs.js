import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServiceSection'
import FaqSection from '../components/FaqSection'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop'

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
            <ScrollTop/>
        </motion.div>
    )
}

export default AboutUs