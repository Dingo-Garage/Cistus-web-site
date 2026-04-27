import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { investmentTypes, type Property } from '../data/investments'

gsap.registerPlugin(ScrollTrigger)

export default function InvestmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const investment = investmentTypes.find((i) => i.slug === slug)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          once: true,
        },
      })

      gsap.from('.property-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.properties-grid',
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [slug])

  if (!investment) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0b0b0b',
          color: '#ffffff',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <p style={{ fontSize: '20px' }}>Investment type not found.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            fontSize: '13px',
            letterSpacing: '0.14em',
            padding: '14px 32px',
            border: '1px solid #C9A962',
            backgroundColor: 'transparent',
            color: '#C9A962',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          ← Back to home
        </button>
      </div>
    )
  }

  return (
    <div ref={sectionRef} style={{ backgroundColor: '#0b0b0b', minHeight: '100vh' }}>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(400px, 70vh, 720px)',
          overflow: 'hidden',
          backgroundColor: '#0b0b0b',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1920&h=1080&fit=crop&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(11,11,11,0.6) 0%, rgba(11,11,11,0.3) 40%, rgba(11,11,11,0.8) 100%)',
          }}
        />
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: 'clamp(100px, 14vh, 140px)',
            left: 'clamp(24px, 4vw, 60px)',
            fontSize: '12px',
            letterSpacing: '0.16em',
            padding: '12px 24px',
            border: '1px solid #C9A962',
            backgroundColor: 'rgba(11,11,11,0.5)',
            color: '#C9A962',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontFamily: '"Helvetica Neue", sans-serif',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          ← Back
        </button>
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(32px, 5vw, 60px)',
            left: 'clamp(24px, 4vw, 60px)',
            right: 'clamp(24px, 4vw, 60px)',
            color: '#ffffff',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.8,
              marginBottom: '12px',
              color: '#C9A962',
            }}
          >
            {investment.subtitle} · {investment.title}
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              margin: 0,
              maxWidth: '900px',
              color: '#ffffff',
            }}
          >
            {investment.tagline}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px clamp(24px, 4vw, 60px) 60px',
        }}
      >
        {/* Description */}
        <div style={{ maxWidth: '900px', marginBottom: '80px' }}>
          {investment.description.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '24px',
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Stats grid */}
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(201,169,98,0.15)',
            border: '1px solid rgba(201,169,98,0.2)',
            marginBottom: '100px',
          }}
        >
          {investment.stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item"
              style={{
                backgroundColor: 'rgba(11,11,11,0.7)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: 500,
                  color: '#C9A962',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Properties */}
        <div style={{ marginBottom: '40px' }}>
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              color: '#C9A962',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            Featured Properties
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '60px',
            }}
          >
            Current Investment Opportunities
          </h2>
        </div>

        <div
          className="properties-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '24px',
          }}
        >
          {investment.properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              hovered={hoveredProperty === property.id}
              onHover={() => setHoveredProperty(property.id)}
              onLeave={() => setHoveredProperty(null)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function PropertyCard({
  property,
  hovered,
  onHover,
  onLeave,
}: {
  property: Property
  hovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <div
      className="property-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        border: hovered ? '1px solid #C9A962' : '1px solid rgba(201,169,98,0.25)',
        backgroundColor: 'rgba(11,11,11,0.5)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
        }}
      >
        <img
          src={property.img}
          alt={property.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px 20px',
            background: 'linear-gradient(transparent, rgba(11,11,11,0.8))',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: '#C9A962',
              textTransform: 'uppercase',
            }}
          >
            {property.type}
          </span>
        </div>
      </div>
      <div style={{ padding: '24px 24px 28px' }}>
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 500,
            color: '#ffffff',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
            marginBottom: '6px',
          }}
        >
          {property.title}
        </h3>
        <p
          style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '16px',
            letterSpacing: '0.05em',
          }}
        >
          {property.location}
        </p>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '24px',
          }}
        >
          {property.tagline}
        </p>

        {/* Features */}
        <div
          style={{
            borderTop: '1px solid rgba(201,169,98,0.15)',
            paddingTop: '16px',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px 16px',
            }}
          >
            {property.features.map((f) => (
              <div key={f.label}>
                <span
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.4)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  {f.label}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#C9A962',
                  }}
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div
          style={{
            borderTop: '1px solid rgba(201,169,98,0.15)',
            paddingTop: '16px',
          }}
        >
          {property.specs.map((spec) => (
            <div
              key={spec.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {spec.label}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#ffffff',
                }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
