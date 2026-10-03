import Navbar from '../components/landing/Navbar'
import UniqueHero from '../components/landing/UniqueHero'
import SolutionsSection from '../components/landing/SolutionsSection'
import UniqueFeatures from '../components/landing/UniqueFeatures'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import StatsSection from '../components/landing/StatsSection'
// import TestimonialsSection from '../components/landing/TestimonialsSection'
import CTASection from '../components/landing/CTASection'
import UniqueFooter from '../components/landing/UniqueFooter'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <UniqueHero />
      <SolutionsSection />
      <UniqueFeatures />
      <HowItWorksSection />
      <StatsSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <UniqueFooter />
    </div>
  )
}

export default LandingPage