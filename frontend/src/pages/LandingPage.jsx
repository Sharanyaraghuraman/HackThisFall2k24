import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/OurServices'
import PopularDestinations from '../components/PopularDestinations'
import BestPackages from '../components/BestPackages'

function LandingPage() {
  return (
    <div>
        <HeroSection />
        <ServicesSection />
        <PopularDestinations />
        <BestPackages />
    </div>
  )
}

export default LandingPage
