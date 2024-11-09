import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/OurServices'
import PopularDestinations from '../components/PopularDestinations'
import BestPackages from '../components/BestPackages'
import BookingSteps from '../components/BookingSteps'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className='font-outfit'>
        <HeroSection />
        <ServicesSection />
        <PopularDestinations />
        <BestPackages />
        <BookingSteps />
        <Footer />
    </div>
  )
}

export default LandingPage
