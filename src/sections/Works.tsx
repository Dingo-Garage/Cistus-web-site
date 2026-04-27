import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router'
import { investmentTypes } from '../data/investments'

gsap.registerPlugin(ScrollTrigger)

export default function InvestmentCardsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const section = sectionRef.current
    const grid = gridRef.current
    if (!section || !grid) return

    const ctx = gsap.context(() => {
      gsap.from('.investment-card', {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="investments"
      ref={sectionRef}
      style={{
        backgroundColor: '#0b0b0b',
        padding: '120px clamp(20px, 4vw, 60px)',
        borderTop: '1px solid rgba(201,169,98,0.15)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '60px',
            borderBottom: '1px solid rgba(201,169,98,0.35)',
            paddingBottom: '20px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                color: '#C9A962',
                textTransform: 'uppercase',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              Investment Strategy
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#ffffff',
              }}
            >
              Entry Pathways
            </h2>
          </div>
          <span
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
            }}
          >
            Milan Real Estate
          </span>
        </div>

        <p
          style={{
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '700px',
            marginBottom: '60px',
          }}
        >
          Different ticket sizes to access curated opportunities in Milan's prime locations.
          Three distinct options designed to match varying risk profiles and return expectations.
        </p>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '24px',
          }}
        >
          {investmentTypes.map((inv) => (
            <button
              key={inv.id}
              onClick={() => navigate(`/investment/${inv.slug}`)}
              className="investment-card"
              style={{
                border: '1px solid rgba(201,169,98,0.3)',
                backgroundColor: 'rgba(11,11,11,0.6)',
                padding: 0,
                cursor: 'pointer',
                textAlign: 'left',
                display: 'block',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A962'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,169,98,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  padding: '32px 28px',
                  borderBottom: '1px solid rgba(201,169,98,0.2)',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#C9A962',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    display: 'block',
                  }}
                >
                  {inv.subtitle}
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 500,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '12px',
                  }}
                >
                  {inv.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                  }}
                >
                  {inv.tagline}
                </p>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      color: 'rgba(255,255,255,0.5)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Ticket Size
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#C9A962',
                    }}
                  >
                    {inv.ticketSize}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      color: 'rgba(255,255,255,0.5)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Target Return
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#C9A962',
                    }}
                  >
                    {inv.targetYield}
                  </span>
                </div>
                <div
                  style={{
                    padding: '12px 0',
                    borderTop: '1px solid rgba(201,169,98,0.15)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: 'rgba(255,255,255,0.6)',
                      margin: 0,
                    }}
                  >
                    <span style={{ color: '#C9A962' }}>Key Advantage:</span>{' '}
                    {inv.keyAdvantage}
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: '16px 28px',
                  borderTop: '1px solid rgba(201,169,98,0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    color: '#C9A962',
                    textTransform: 'uppercase',
                  }}
                >
                  View Details →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
