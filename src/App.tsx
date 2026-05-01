import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router'
import Header from './sections/Header'
import HeroSection from './sections/Spatial'
import StrategySection from './sections/Philosophy'
import InvestmentCardsSection from './sections/Works'
import ContactSection from './sections/Hero'
import Footer from './sections/Footer'
import Preloader from './sections/Preloader'
import InvestmentDetail from './pages/InvestmentDetail'
import About from './pages/About'
import GoldenVisa from './pages/GoldenVisa'
import PasswordGate from './components/PasswordGate'
function Home() {
  return (
    <main>
      <HeroSection />
      <StrategySection />
      <InvestmentCardsSection />
      <ContactSection />
    </main>
  )
}

function App() {
  const scrollRef = useRef({ y: 0, speed: 0 })

  useEffect(() => {
    let rafId: number
    let prevY = window.scrollY

    const tick = () => {
      const y = window.scrollY
      const delta = y - prevY
      scrollRef.current.y = y
      scrollRef.current.speed = delta
      prevY = y
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <PasswordGate>
      <Routes>
      <Route path="/investment/:slug" element={
        <>
          <Header scrollRef={scrollRef} forceLight={true} />
          <InvestmentDetail />
          <Footer />
        </>
      } />
      <Route path="/about" element={
        <>
          <Header scrollRef={scrollRef} forceLight={true} />
          <About />
          <Footer />
        </>
      } />
      <Route path="/golden-visa" element={
        <>
          <Header scrollRef={scrollRef} forceLight={true} />
          <GoldenVisa />
          <Footer />
        </>
      } />
      <Route path="*" element={
        <>
          <Preloader />
          <Header scrollRef={scrollRef} />
          <Home />
          <Footer />
        </>
      } />
    </Routes>
    </PasswordGate>
  )
}

export default App
