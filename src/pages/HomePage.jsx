import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services/>
    </div>
  )
}
