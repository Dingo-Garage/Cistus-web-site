export default function About() {
  return (
    <main style={{ backgroundColor: '#0b0b0b', color: '#ffffff' }}>
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
            About Us
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
            CISTUS PROPERTY <span style={{ color: '#C9A962' }}>CONSULTING</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 'clamp(60px, 8vw, 120px) clamp(24px, 4vw, 60px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
        }}
      >
        {/* Intro */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
            Established in 2017, Cistus Property Consulting S.R.L. is a premier boutique real estate consultancy dedicated to developing real estate assets in the key areas of Milan, through club deals combining leading investors for high quality and high returns investment opportunities in various asset classes.
          </p>
          <p style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
            Experts in connecting Non-European institutional investors and High-Net-Worth Individuals (HNWIs) with high-growth investment corridors in Italy. With a strategic presence in both Milan and Pune, we provide a seamless cross-border experience for those looking to diversify their portfolios into the European market.
          </p>
        </section>

        {/* Mission */}
        <section>
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
            Our Mission
          </span>
          <p style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
            Our mission is to unlock the exclusive potential of the Italian real estate market through curated, risk-mitigated investment pathways. We specialize in identifying supply-scarce opportunities—in key markets in Italy, such as Milan—that offer robust returns and superior capital appreciation.
          </p>
        </section>

        {/* Expertise */}
        <section>
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
            Expertise Across the Italian Landscape
          </span>
          <p style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
            At Cistus, we go beyond simple transactions. We offer a full-spectrum consulting approach that covers three core investment strategies:
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '32px',
            }}
          >
            <StrategyCard
              title="Residential Yield Maximization"
              text="We help investors secure ready-to-move-in apartments in prime Milanese locations, optimized for the high-demand student and young professional rental markets."
            />
            <StrategyCard
              title="Strategic Revitalized Development"
              text='Through direct shareholding opportunities in our Holding Company, our clients access larger-scale "Value-Add" projects, transforming aging assets into contemporary residential complexes with significant projected IRRs.'
            />
            <StrategyCard
              title="Generational Wealth & Trophy Assets"
              text='We provide exclusive access to "Blue Chip" real estate, including luxury hospitality assets and Grade-A commercial properties across Italy.'
            />
          </div>
        </section>

        {/* Why Choose */}
        <section>
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
            Why Choose Cistus?
          </span>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '32px',
            }}
          >
            <StrategyCard
              title="Strategic Market Insights"
              text="We capitalize on Italy's market outperformance, with transactions projected to rise significantly in 2026 compared to EU peers."
            />
            <StrategyCard
              title="Tax & Visa Synergy"
              text="Our consultancy is uniquely positioned to help investors leverage the Italian Flat Tax Advantage and the Italian Investor Visa program."
            />
            <StrategyCard
              title="End-to-End Compliance"
              text="From legal and tax workstreams to documenting investor peculiarities, we ensure every deal meets the highest standards of international compliance."
            />
          </div>
        </section>

        {/* Leadership */}
        <section>
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
            Our Leadership
          </span>
          <p style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', marginBottom: '48px' }}>
            Led by Paolo Poddi and Marco Pilia, Cistus Property Consulting combines deep local Italian expertise with an intimate understanding of foreign markets (especially the Indian investment landscape). Our team is committed to personalizing every engagement to match your target ticket size, risk profile, and exit horizon.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '48px',
            }}
          >
            {/* Marco */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: '#1a1a1a',
                }}
              >
                <img
                  src="/foto/marco.jpg"
                  alt="Marco Pilia"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#C9A962', marginBottom: '12px' }}>
                  Marco Pilia
                </h3>
                <p style={{ fontSize: '13px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Partner
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
                  Marco Pilia is a seasoned real estate strategist with 7+ years of international experience in market expansion, asset management, and property technology. Born and raised in Italy, Marco began his career in the transportation and logistics sector before transitioning into the real estate market. He played a pivotal role in the scale-up of a leading Italian coworking firm, serving as a Building Manager in Milan before spearheading the brand's successful entry into new metropolitan markets, like Turin and Rome.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginTop: '12px' }}>
                  His professional journey eventually took him to Auckland, New Zealand, where he spent nearly a year immersed in the Pacific market before relocating to India. Most recently, Marco served as the Managing Director for Planet Smart City India. In this capacity, he led three critical business units: Real Estate Development, Advisory & Consultancy, and Proptech/Digital solutions. He also served as Local Director for other Italian companies looking to enter the Indian market. Today, he leverages this unique blend of European operational excellence and emerging market leadership to bridge the gap between Indian investors and high-yield Italian real estate opportunities.
                </p>
              </div>
            </div>

            {/* Paolo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  backgroundColor: '#1a1a1a',
                }}
              >
                <img
                  src="/foto/paolo.JPG"
                  alt="Paolo Poddi"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#C9A962', marginBottom: '12px' }}>
                  Paolo Poddi
                </h3>
                <p style={{ fontSize: '13px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Co-Founder & Managing Director
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
                  Paolo Poddi is a distinguished investment and real estate professional with over two decades of experience in navigating the complexities of the European property markets. With a career rooted in the UK and Italy, Paolo has built a reputation for founding and scaling boutique consultancies that specialize in cross-border property acquisitions and asset management. As a long-standing Director of Cistus Property Consulting, he has been instrumental in providing strategic oversight for Italian-UK investment flows, ensuring institutional-grade compliance and operational transparency.
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginTop: '12px' }}>
                  Paolo's expertise lies in identifying undervalued assets and structuring investment vehicles that cater to international capital. His extensive background includes serving as a director for various property advisory firms, where he specialized in facilitating entry into the Italian market for foreign HNWIs. At Cistus, Paolo focuses on the structural and legal integrity of investment pathways, combining his deep knowledge of the Italian regulatory landscape with a forward-thinking approach to portfolio diversification. His leadership ensures that every client benefits from a stable, risk-mitigated entry into Italy's most exclusive real estate corridors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function StrategyCard({ title, text }: { title: string; text: string }) {
  return (
    <div
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
        {title}
      </h4>
      <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)' }}>
        {text}
      </p>
    </div>
  )
}
