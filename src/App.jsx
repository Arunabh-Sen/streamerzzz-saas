import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import PricingPlans from './components/PricingPlans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import AuroraBackground from './components/AuroraBackground'

const App = () => {
  return <main className='text-sm text-neutral-300 antialiased'>
    <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_130%)]"></div>
    <AuroraBackground/>
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <KeyFeatures />
    <PricingPlans />
    <Testimonials />
    <Footer />
  </main>
}

export default App