import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { investmentTypes } from '../data/investments'

interface HeaderProps {
  scrollRef: React.MutableRefObject<{ y: number; speed: number }>
  forceLight?: boolean
}

export default function Header({ scrollRef, forceLight = false }: HeaderProps) {
  const [isCompact, setIsCompact] = useState(false)
  const [overHeroRaw, setOverHeroRaw] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const rafRef = useRef<number>(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const check = () => {
      const y = scrollRef.current.y
      setIsCompact(y > 100)
      setOverHeroRaw(y < window.innerHeight * 0.85)
      rafRef.current = requestAnimationFrame(check)
    }
    rafRef.current = requestAnimationFrame(check)
    return () => cancelAnimationFrame(rafRef.current)
  }, [scrollRef])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const overHero = overHeroRaw && !forceLight
  const isHome = location.pathname === '/'

  const handleNavClick = (targetId: string) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setDropdownOpen(false)
    setMobileOpen(false)
  }

  const goToInvestment = (slug: string) => {
    navigate(`/investment/${slug}`)
    setDropdownOpen(false)
    setMobileOpen(false)
  }

  const goHome = () => {
    navigate('/')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    setMobileOpen(false)
  }

  const goToAbout = () => {
    navigate('/about')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  const goToGoldenVisa = () => {
    navigate('/golden-visa')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  const bgColor = overHero ? 'transparent' : 'rgba(11,11,11,0.95)'
  const borderColor = overHero ? 'rgba(201,169,98,0.3)' : 'rgba(201,169,98,0.5)'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: isCompact ? '64px' : '88px',
        backgroundColor: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 60px)',
        transition:
          'height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease',
        backdropFilter: overHero ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: overHero ? 'none' : 'blur(12px)',
      }}
    >
      <div
        style={{
          fontSize: isMobile ? '13px' : '16px',
          fontWeight: 700,
          letterSpacing: '0.22em',
          cursor: 'pointer',
          color: '#C9A962',
          transition: 'color 0.4s ease',
          whiteSpace: 'nowrap',
        }}
        onClick={goHome}
      >
        {isMobile ? 'CISTUS' : 'CISTUS PROPERTY CONSULTING'}
      </div>

      {isMobile ? (
        <>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              fontSize: '20px',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 102,
            }}
            aria-label="Menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>

          {mobileOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                backgroundColor: 'rgba(11,11,11,0.98)',
                borderBottom: '1px solid rgba(201,169,98,0.4)',
                display: 'flex',
                flexDirection: 'column',
                padding: '8px 0',
                zIndex: 101,
              }}
            >
              <MobileNavItem label="Home" onClick={() => handleNavClick('#top')} />
              <MobileNavItem label="About us" onClick={goToAbout} />
              <div style={{ position: 'relative' }}>
                <MobileNavItem
                  label={dropdownOpen ? 'Investments ▴' : 'Investments ▾'}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div style={{ paddingLeft: '24px' }}>
                    {investmentTypes.map((inv) => (
                      <button
                        key={inv.id}
                        onClick={() => goToInvestment(inv.slug)}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '12px 24px',
                          fontSize: '12px',
                          fontWeight: 400,
                          letterSpacing: '0.08em',
                          color: '#ffffff',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textTransform: 'uppercase',
                          fontFamily: '"Helvetica Neue", sans-serif',
                        }}
                      >
                        <span style={{ color: '#C9A962', fontWeight: 500 }}>{inv.subtitle}</span>{' '}
                        — {inv.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <MobileNavItem label="Golden Visa" onClick={goToGoldenVisa} />
              <MobileNavItem label="Strategy" onClick={() => handleNavClick('#strategy')} />
              <MobileNavItem label="Contact" onClick={() => handleNavClick('#contact')} />
            </div>
          )}
        </>
      ) : (
        <nav style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
          <NavItem label="Home" overHero={overHero} onClick={() => handleNavClick('#top')} />
          <NavItem label="About us" overHero={overHero} onClick={goToAbout} />

          {/* Dropdown for Investments */}
          <div
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavItem
              label="Investments ▾"
              overHero={overHero}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'rgba(11,11,11,0.98)',
                  border: '1px solid rgba(201,169,98,0.4)',
                  minWidth: '280px',
                  padding: '8px 0',
                  zIndex: 101,
                }}
              >
                {investmentTypes.map((inv) => (
                  <button
                    key={inv.id}
                    onClick={() => goToInvestment(inv.slug)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 24px',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      color: '#ffffff',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      textTransform: 'uppercase',
                      fontFamily: '"Helvetica Neue", sans-serif',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = 'rgba(201,169,98,0.15)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    <span style={{ color: '#C9A962', fontWeight: 500 }}>{inv.subtitle}</span>{' '}
                    — {inv.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavItem label="Golden Visa" overHero={overHero} onClick={goToGoldenVisa} />
          <NavItem label="Strategy" overHero={overHero} onClick={() => handleNavClick('#strategy')} />
          <NavItem label="Contact" overHero={overHero} onClick={() => handleNavClick('#contact')} />
        </nav>
      )}
    </header>
  )
}

function NavItem({
  label,
  overHero,
  onClick,
}: {
  label: string
  overHero: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  const baseColor = overHero ? '#ffffff' : '#ffffff'
  const hoverBg = 'rgba(201,169,98,0.15)'
  const hoverFg = '#C9A962'

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        fontSize: '13px',
        fontWeight: 400,
        letterSpacing: '0.08em',
        backgroundColor: hovered ? hoverBg : 'transparent',
        color: hovered ? hoverFg : baseColor,
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        whiteSpace: 'nowrap',
        fontFamily: '"Helvetica Neue", sans-serif',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </button>
  )
}

function MobileNavItem({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '16px 24px',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        color: hovered ? '#C9A962' : '#ffffff',
        backgroundColor: hovered ? 'rgba(201,169,98,0.1)' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textTransform: 'uppercase',
        fontFamily: '"Helvetica Neue", sans-serif',
      }}
    >
      {label}
    </button>
  )
}
