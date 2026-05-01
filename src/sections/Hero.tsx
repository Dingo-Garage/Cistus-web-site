import { useState } from 'react'

export default function ContactSection() {
  const [submitHovered, setSubmitHovered] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentType: 'Any',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all required fields.')
      return
    }

    // TODO: attivare FormSubmit.co
    // 1. aggiungere al <form>:
    //    action="https://formsubmit.co/LA_TUA_EMAIL" method="POST"
    // 2. aggiungere campo hidden:
    //    <input type="hidden" name="_next" value="https://TUO_DOMINIO/#contact" />
    // 3. rimuovere e.preventDefault() sopra
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '700px',
        backgroundColor: '#0b0b0b',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        borderTop: '1px solid rgba(201,169,98,0.25)',
      }}
    >
      {/* Left: info */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '420px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(24px, 4vw, 48px)',
          backgroundImage: 'url(/foto/contact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.85) 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '520px' }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
              color: '#ffffff',
              marginBottom: '16px',
              textShadow: '0 2px 24px rgba(0,0,0,0.25)',
            }}
          >
            Start Your
            <br />
            <span style={{ color: '#C9A962' }}>Investment</span> Journey
          </h2>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#C9A962',
              textTransform: 'uppercase',
            }}
          >
            CISTUS PROPERTY CONSULTING
          </p>
        </div>
      </div>

      {/* Right: form */}
      <div
        style={{
          backgroundColor: '#0b0b0b',
          color: '#ffffff',
          padding: 'clamp(40px, 5vw, 72px) clamp(24px, 4vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '520px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              color: '#C9A962',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Get in touch
          </p>
          <h3
            style={{
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '36px',
              color: '#ffffff',
            }}
          >
            Request a consultation or send us a note.
          </h3>

          {submitted ? (
            <div
              style={{
                border: '1px solid rgba(201,169,98,0.4)',
                padding: '32px 28px',
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              Thank you — our team will be in touch within 24 hours. A
              confirmation has been sent to your email.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {submitError && (
                <div
                  style={{
                    border: '1px solid rgba(255,100,100,0.5)',
                    padding: '14px 18px',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'rgba(255,150,150,0.9)',
                    marginBottom: '4px',
                  }}
                >
                  {submitError}
                </div>
              )}
              <Row>
                <Field label="Full name *" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                <Field label="Email *" type="email" name="email" placeholder="you@domain.com" value={formData.email} onChange={handleChange} />
              </Row>
              <Row>
                <Field label="Phone" type="tel" name="phone" placeholder="+91 ..." value={formData.phone} onChange={handleChange} />
                <SelectField
                  label="Investment interest"
                  name="investmentType"
                  value={formData.investmentType}
                  onChange={handleChange}
                  options={[
                    'Any',
                    'Option A – Residential Core',
                    'Option B – Residency & Growth',
                    'Option C – Institutional & Ultra-Prime',
                  ]}
                />
              </Row>
              <TextareaField
                label="Message *"
                name="message"
                placeholder="Tell us about your investment goals, timeline, and any questions..."
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                onMouseEnter={() => setSubmitHovered(true)}
                onMouseLeave={() => setSubmitHovered(false)}
                style={{
                  marginTop: '12px',
                  padding: '18px 24px',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  color: submitHovered ? '#0b0b0b' : '#C9A962',
                  backgroundColor: submitHovered ? '#C9A962' : 'transparent',
                  border: '1px solid #C9A962',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s ease',
                  fontFamily: '"Helvetica Neue", sans-serif',
                }}
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
      }}
    >
      {children}
    </div>
  )
}

const fieldBase: React.CSSProperties = {
  width: '100%',
  padding: '12px 0',
  fontSize: '15px',
  backgroundColor: 'transparent',
  color: '#ffffff',
  border: 'none',
  borderBottom: '1px solid rgba(201,169,98,0.35)',
  outline: 'none',
  fontFamily: 'inherit',
  letterSpacing: '0.01em',
  appearance: 'none',
  colorScheme: 'dark',
}

const labelBase: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '0.2em',
  color: '#C9A962',
  textTransform: 'uppercase',
  marginBottom: '4px',
  display: 'block',
}

function Field({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: {
  label: string
  type: string
  name: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={labelBase}>{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={fieldBase}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#C9A962')}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(201,169,98,0.35)')}
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string
  name: string
  options: string[]
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={labelBase}>{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        style={{ ...fieldBase, paddingRight: '20px' }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#C9A962')}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(201,169,98,0.35)')}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ color: '#000', backgroundColor: '#fff' }}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

function TextareaField({
  label,
  name,
  placeholder,
  value,
  onChange,
}: {
  label: string
  name: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={labelBase}>{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={3}
        value={value}
        onChange={onChange}
        style={{ ...fieldBase, resize: 'vertical', paddingTop: '12px' }}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#C9A962')}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(201,169,98,0.35)')}
      />
    </label>
  )
}
