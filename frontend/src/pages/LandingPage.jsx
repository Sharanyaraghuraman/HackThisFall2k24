import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/OurServices'
import PopularDestinations from '../components/PopularDestinations'
import BestPackages from '../components/BestPackages'
import BookingSteps from '../components/BookingSteps'

function LandingPage() {
  return (
    <div>
        <HeroSection />
        <ServicesSection />
        <PopularDestinations />
        <BestPackages />
        <BookingSteps />
    </div>
  )
}

export default LandingPage
