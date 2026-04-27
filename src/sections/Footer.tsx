export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#0b0b0b',
        borderTop: '1px solid rgba(201,169,98,0.3)',
        padding: '80px clamp(20px, 4vw, 60px) 0',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {/* Top: Contact Info */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          paddingBottom: '24px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#C9A962',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Office
          </p>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', marginBottom: '8px' }}>
            Pune, India
          </p>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              marginBottom: '12px',
              maxWidth: '260px',
            }}
          >
            Primary office for Indian investor relations and deal coordination.
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#C9A962',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Milan Office
          </p>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', marginBottom: '8px' }}>
            Milano, Italy
          </p>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              marginBottom: '12px',
              maxWidth: '260px',
            }}
          >
            Via Fratelli Zoia, 216, Milano
            <br />
            30 Via Adamello, Milano
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#C9A962',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Contact
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
            marcopilia.92@gmail.com
            <br />
            +39 346 223 6290
            <br />
            +91 730 481 3576
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <img
            src="/foto/logo.jpeg"
            alt="Cistus Property Consulting"
            style={{
              maxWidth: '240px',
              width: '100%',
              height: 'auto',
              opacity: 0.9,
            }}
          />
        </div>
      </div>

      {/* Bottom: Giant Wordmark */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0.85,
          paddingBottom: '0',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: 'clamp(32px, 6vw, 80px)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            color: 'rgba(201,169,98,0.22)',
            whiteSpace: 'nowrap',
            transform: 'translateY(5%)',
            userSelect: 'none',
          }}
        >
          CISTUS PROPERTY CONSULTING
        </span>
      </div>
    </footer>
  )
}
