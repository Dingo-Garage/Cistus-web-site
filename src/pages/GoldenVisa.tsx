import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    title: 'Schengen Mobility',
    desc: 'Visa-free access to more than 25 European countries for business, lifestyle, and family travel. A strategic asset for internationally active individuals.',
    icon: '✈',
  },
  {
    title: 'No Relocation Required',
    desc: 'Investors are not required to relocate permanently to Italy, making it ideal for those maintaining primary residence or business operations elsewhere.',
    icon: '↔',
  },
  {
    title: 'Family Inclusion',
    desc: 'The visa extends to immediate family members — spouse and dependent children — granting access to European education, healthcare, and infrastructure.',
    icon: '◈',
  },
  {
    title: 'Real Estate Exposure',
    desc: 'Direct exposure to Italy\'s resilient real estate sector through a corporate vehicle, with professional management and strategic asset selection.',
    icon: '◆',
  },
  {
    title: 'Corporate Structure',
    desc: 'Invest through a regulated Italian enterprise rather than passive instruments, actively participating in the economy with full legal compliance.',
    icon: '◉',
  },
  {
    title: 'Fast-Track Process',
    desc: 'Streamlined application with expedited evaluation for eligible candidates, enabling residency activation within a defined and manageable timeframe.',
    icon: '⏱',
  },
  {
    title: 'Path to Citizenship',
    desc: 'Initial 2-year permit renewable for 3 years, with permanent residency after 5 years and eligibility for Italian citizenship after 10 years.',
    icon: '★',
  },
  {
    title: 'Tax Optimization',
    desc: 'Benefit from Italy\'s Flat Tax regime on foreign-sourced income for up to 15 years, creating a powerful fiscal framework for global HNWIs.',
    icon: '◊',
  },
]

const timeline = [
  {
    year: 'Year 0–2',
    title: 'Initial Permit',
    desc: 'Residence permit granted for 2 years upon verified investment and compliance submission.',
  },
  {
    year: 'Year 2–5',
    title: 'First Renewal',
    desc: 'Renewable for an additional 3 years provided the equity investment is maintained in full.',
  },
  {
    year: 'Year 5',
    title: 'Permanent Residency',
    desc: 'Eligible to apply for EC Long-Term Residence Permit with unlimited stay rights across the EU.',
  },
  {
    year: 'Year 10',
    title: 'Citizenship',
    desc: 'Pathway to Italian citizenship opens, subject to continuity of residence and language requirements.',
  },
]

const whyCistus = [
  {
    title: 'End-to-End Visa Navigation',
    desc: 'Our team manages the entire immigration workflow — from documentation and legal structuring to consular submission and permit activation.',
  },
  {
    title: 'Pre-Vetted Investment Vehicle',
    desc: 'No need to hunt for qualifying assets. Our Class B shareholding is purpose-built to satisfy the €500k Company Investment route with full regulatory alignment.',
  },
  {
    title: 'India–Italy Bridge',
    desc: 'With offices in Pune and Milan, we deliver seamless cross-border execution in your timezone, language, and legal context.',
  },
  {
    title: 'Transparent Governance',
    desc: 'Quarterly reporting, audited financials, and direct access to managing partners ensure you always know how your capital is working.',
  },
]

export default function GoldenVisa() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const whyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const grid = gridRef.current
    const timeline = timelineRef.current
    const why = whyRef.current
    if (!section || !grid || !timeline || !why) return

    const ctx = gsap.context(() => {
      gsap.from(grid.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(timeline.children, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(why.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: why,
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={sectionRef} style={{ backgroundColor: '#0b0b0b', color: '#ffffff' }}>
      {/* Hero */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '140px clamp(24px, 4vw, 60px) 80px',
          borderBottom: '1px solid rgba(201,169,98,0.25)',
        }}
      >
        <div>
          <span
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: '#C9A962',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Italy Investor Visa Program
          </span>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            GOLDEN <span style={{ color: '#C9A962' }}>VISA</span> GATEWAY
          </h1>
          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '700px',
              margin: '32px auto 0',
            }}
          >
            Secure European residency through strategic equity investment in Italy. A clear, compliant pathway designed for global investors seeking mobility, flexibility, and long-term value.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 'clamp(60px, 8vw, 120px) clamp(24px, 4vw, 60px)',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.28em',
            color: '#C9A962',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Key Advantages for Investors
        </span>
        <p
          style={{
            fontSize: 'clamp(16px, 1.2vw, 20px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '24px',
          }}
        >
          Investing through this structure offers a unique combination of European residency, capital deployment, and strategic market access, all aligned with the requirements of the Italy Investor Visa. Unlike many global residency programs that rely on passive or purely financial instruments, this model allows investors to actively participate in the Italian economy through a structured and compliant equity investment.
        </p>
        <p
          style={{
            fontSize: 'clamp(16px, 1.2vw, 20px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '24px',
          }}
        >
          One of the most immediate advantages is visa-free access to the entire Schengen Area, enabling seamless travel across more than 25 European countries for business, lifestyle, and family purposes. This mobility benefit alone represents a significant strategic asset for internationally active individuals and families, reducing friction in cross-border movement and opening new opportunities throughout Europe.
        </p>
        <p
          style={{
            fontSize: 'clamp(16px, 1.2vw, 20px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          The program is designed with flexibility in mind. Investors are not required to relocate permanently to Italy, making it ideal for those who wish to maintain their primary residence or business operations elsewhere while still securing European residency rights. At the same time, the visa can be extended to immediate family members, including spouse and dependent children, allowing for a broader lifestyle upgrade and access to European education systems, healthcare, and infrastructure.
        </p>
      </section>

      {/* Advantages Grid */}
      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px, 4vw, 60px) clamp(80px, 10vw, 120px)',
        }}
      >
        <div style={{ marginBottom: '60px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: '#C9A962',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Program Benefits
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
            }}
          >
            Why the Italian Golden Visa?
          </h2>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(201,169,98,0.15)',
            border: '1px solid rgba(201,169,98,0.2)',
          }}
        >
          {advantages.map((adv) => (
            <div
              key={adv.title}
              style={{
                backgroundColor: 'rgba(11,11,11,0.7)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                minHeight: '220px',
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
                {adv.icon}
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
                {adv.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.72)',
                  margin: 0,
                }}
              >
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px, 4vw, 60px) clamp(80px, 10vw, 120px)',
        }}
      >
        <div style={{ marginBottom: '60px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: '#C9A962',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Residency Pathway
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
            }}
          >
            From Investment to Citizenship
          </h2>
        </div>

        <div
          ref={timelineRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(201,169,98,0.15)',
            border: '1px solid rgba(201,169,98,0.2)',
          }}
        >
          {timeline.map((step) => (
            <div
              key={step.year}
              style={{
                backgroundColor: 'rgba(11,11,11,0.7)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: '#C9A962',
                  textTransform: 'uppercase',
                }}
              >
                {step.year}
              </span>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  color: '#ffffff',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.72)',
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Cistus */}
      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px, 4vw, 60px) clamp(80px, 10vw, 120px)',
        }}
      >
        <div style={{ marginBottom: '60px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: '#C9A962',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Why Choose Cistus
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
            }}
          >
            Invest with Confidence
          </h2>
        </div>

        <div
          ref={whyRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
          }}
        >
          {whyCistus.map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid rgba(201,169,98,0.25)',
                padding: '32px',
                backgroundColor: 'rgba(201,169,98,0.03)',
              }}
            >
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#C9A962',
                  marginBottom: '12px',
                  letterSpacing: '0.02em',
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.7)',
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          borderTop: '1px solid rgba(201,169,98,0.25)',
          padding: 'clamp(60px, 8vw, 120px) clamp(24px, 4vw, 60px)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              color: '#C9A962',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Start Your Journey
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '24px',
            }}
          >
            Ready to unlock European residency?
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.72)',
              marginBottom: '40px',
            }}
          >
            Speak with our advisory team to review eligibility, timeline, and investment structure. We guide you from first consultation to permit in hand.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A962'
              e.currentTarget.style.color = '#0b0b0b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#C9A962'
            }}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              padding: '18px 40px',
              border: '1px solid #C9A962',
              backgroundColor: 'transparent',
              color: '#C9A962',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontFamily: '"Helvetica Neue", sans-serif',
              transition: 'all 0.3s ease',
            }}
          >
            Request a Consultation →
          </button>
        </div>
      </section>
    </main>
  )
}
