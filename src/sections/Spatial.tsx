import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
        delay: 0.4,
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        backgroundColor: '#0b0b0b',
      }}
    >
      {/* Background image - Milan skyline / luxury real estate */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/foto/Hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(11,11,11,0.75) 0%, rgba(11,11,11,0.55) 35%, rgba(11,11,11,0.80) 100%)',
        }}
      />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '28px',
          padding: '0 clamp(32px, 4.5vw, 72px)',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            color: '#C9A962',
            textTransform: 'uppercase',
          }}
        >
          Diversified Real Estate Portfolios · Est. 2017
        </span>

        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 96px)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            color: '#ffffff',
            maxWidth: '980px',
            textShadow: '0 2px 24px rgba(0,0,0,0.35)',
          }}
        >
          THE ITALIAN
          <br />
          <span style={{ color: '#C9A962' }}>INVESTMENT</span> GATEWAY
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            fontWeight: 700,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: '560px',
          }}
        >
          Curated real estate opportunities in Italy's high-growth corridors for
          Indian institutional and HNI investors. Milan, Tuscany, and prime
          Italian markets.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.querySelector('#strategy')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: hovered ? '#0b0b0b' : '#C9A962',
              backgroundColor: hovered ? '#C9A962' : 'transparent',
              border: '1px solid #C9A962',
              padding: '16px 36px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              fontFamily: '"Helvetica Neue", sans-serif',
            }}
          >
            Explore Opportunities
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '16px 8px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontFamily: '"Helvetica Neue", sans-serif',
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
              textDecorationColor: '#C9A962',
            }}
          >
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  )
}
