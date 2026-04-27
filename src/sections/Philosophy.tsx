import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    title: 'Currency Hedge',
    desc: 'Direct exposure to the Euro (€) provides a robust shield against INR volatility and emerging market currency risks.',
    icon: '€',
  },
  {
    title: 'Market Outperformance',
    desc: "Italy's real estate transactions are projected to rise by 8.4% in 2026, indicating strong momentum compared to EU peers.",
    icon: '↑',
  },
  {
    title: 'Investor Visa Synergy',
    desc: 'Strategic opportunity to align real estate investments with the Italian Investor Visa program (starting at €250k).',
    icon: '✈',
  },
  {
    title: 'Supply Scarcity in Milan',
    desc: 'Extreme shortage of modern residential stock drives high demand from students (Bocconi, Politecnico) and young professionals.',
    icon: '◆',
  },
  {
    title: 'Flat Tax Advantage',
    desc: 'Beneficial tax regime on foreign-sourced income for 15 years, attracting over 4,000 HNWIs since inception in 2017.',
    icon: '◈',
  },
  {
    title: 'Curated Portfolio',
    desc: 'Investors access professionally vetted, high-growth real estate opportunities in Italy\'s prime corridors.',
    icon: '◉',
  },
]

export default function StrategySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const grid = gridRef.current
    if (!section || !text || !grid) return

    const ctx = gsap.context(() => {
      gsap.from(text, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(grid.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 70%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="strategy"
      ref={sectionRef}
      style={{
        backgroundColor: '#0b0b0b',
        padding: '140px clamp(20px, 4vw, 60px)',
        borderTop: '1px solid rgba(201,169,98,0.25)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div style={{ marginBottom: '80px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: '#C9A962',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            Strategic Rationale
          </span>
          <p
            ref={textRef}
            style={{
              fontSize: 'clamp(28px, 4vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '1100px',
            }}
          >
            Why <span style={{ color: '#C9A962' }}>Italy</span> for Indian Investors?
          </p>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(201,169,98,0.15)',
            border: '1px solid rgba(201,169,98,0.2)',
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                backgroundColor: 'rgba(11,11,11,0.7)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: '200px',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  color: '#C9A962',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                {benefit.icon}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  color: '#ffffff',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.72)',
                  margin: 0,
                }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
