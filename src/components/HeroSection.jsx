import React from 'react'
import { BRAND_LOGOS, HERO_CONTENT } from '../constants/index';
import heroImage from "../assets/hero.jpg"
import { delay, motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { straggerChildren: 0.2 } },
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
}

const HeroSection = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='pt-28 lg:pt-36'>
            <div className='max-w-7xl mx-auto px-4 flex flex-col items-center text-center'>
                <motion.div variants={fadeInUp} className='mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs'>
                    {HERO_CONTENT.badgeText}
                </motion.div>
                <motion.h1 variants={fadeInUp} className='text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent'>The Ultimate Streaming Toolkit+</motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className='mt-6 text-neutral-400 max-w-xl'>
                    {HERO_CONTENT.subHeading}
                </motion.p>
                <motion.div
                    variants={fadeInUp}
                    className='mt-6 space-x-4'>
                    <a href="#" className='inline-block bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white py-3 px-6 rounded-lg font-medium'>
                        {HERO_CONTENT.callToAction.primary}
                    </a>
                    <a href="#" className='inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg font-medium'>
                        {HERO_CONTENT.callToAction.secondary}
                    </a>
                </motion.div>
                <motion.div variants={fadeIn} className='py-10'>
                    <p className='text-gray-400 text-center mb-8'>
                        {HERO_CONTENT.trustedByText}
                    </p>
                    <div className='flex flex-wrap justify-center gap-8'>
                        {BRAND_LOGOS.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className='h-8' />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className='mt-12'
                >
                    <img src={heroImage} alt="Streamer SaaS Interface" className='w-full h-auto rounded-3xl border border-neutral-800 mb-20' />
                </motion.div>

            </div>
        </motion.section>
    )
}

export default HeroSection