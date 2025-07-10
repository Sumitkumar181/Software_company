
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WorkProcess from '../components/WorkProcess'
import WhyChooseUs from '../components/WhyChooseUs'
import FeatureWork from '../components/FeatureWork'
import Success from '../components/Success'
import ContactUs from '../components/ContactUs'


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WorkProcess />
      <WhyChooseUs />
      <FeatureWork />
      <Success />
      <ContactUs/>

    </div>
  )
}
