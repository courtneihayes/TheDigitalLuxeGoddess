import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import EvergreenContent from './components/EvergreenContent'
import DirectContact from './components/DirectContact'
import StoreSection from './components/StoreSection'
import Affirmations from './components/Affirmations'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <EvergreenContent />
      <DirectContact />
      <StoreSection />
      <Affirmations />
      <Footer />
    </main>
  )
}
