import { useState, useEffect } from 'react'

const CORRECT_PASSWORD = 'MarcoPiliaCistus@2026'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const auth = sessionStorage.getItem('site_auth')
    if (auth === 'true') {
      setAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('site_auth', 'true')
      setAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (authenticated) {
    return <>{children}</>
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0b0b0b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.28em',
            color: '#C9A962',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Accesso Riservato
        </p>
        <h1
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: '16px',
          }}
        >
          CISTUS PROPERTY <span style={{ color: '#C9A962' }}>CONSULTING</span>
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '48px',
            fontWeight: 300,
          }}
        >
          Inserisci la password per accedere al sito.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '16px 0',
              fontSize: '16px',
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: 'none',
              borderBottom: `1px solid ${error ? 'rgba(255,100,100,0.6)' : 'rgba(201,169,98,0.35)'}`,
              outline: 'none',
              fontFamily: '"Helvetica Neue", sans-serif',
              letterSpacing: '0.05em',
              textAlign: 'center',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => {
              if (!error) e.currentTarget.style.borderBottomColor = '#C9A962'
            }}
            onBlur={(e) => {
              if (!error) e.currentTarget.style.borderBottomColor = 'rgba(201,169,98,0.35)'
            }}
          />
          {error && (
            <p style={{ fontSize: '13px', color: 'rgba(255,120,120,0.9)', marginTop: '-12px' }}>
              Password non corretta. Riprova.
            </p>
          )}
          <button
            type="submit"
            style={{
              padding: '18px 36px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: '#C9A962',
              backgroundColor: 'transparent',
              border: '1px solid #C9A962',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              fontFamily: '"Helvetica Neue", sans-serif',
              alignSelf: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A962'
              e.currentTarget.style.color = '#0b0b0b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#C9A962'
            }}
          >
            Conferma
          </button>
        </form>
      </div>
    </div>
  )
}
