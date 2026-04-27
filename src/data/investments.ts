// filepath: /mnt/agents/output/app/src/data/investments.ts
export interface Property {
  id: string
  title: string
  location: string
  type: string
  img: string
  tagline: string
  description: string[]
  features: { label: string; value: string }[]
  specs: { label: string; value: string }[]
}

export interface InvestmentType {
  id: string
  slug: string
  title: string
  subtitle: string
  tagline: string
  description: string[]
  ticketSize: string
  targetYield: string
  keyAdvantage: string
  stats: { label: string; value: string }[]
  properties: Property[]
}

export const investmentTypes: InvestmentType[] = [
  {
    id: 'A',
    slug: 'immediate-yield',
    title: 'Immediate Yield',
    subtitle: 'Option A',
    tagline: 'Ready-to-move residential units in Milan\'s prime locations.',
    description: [
      'Invest in ready-to-rent properties in Milan\'s prime locations. Optimised for immediate rental to students or young professionals.',
      'Buy-to-let focused on the high-demand students & young professional rental market in Milan. Ready-to-move-in apartments situated within our existing, curated Milan portfolio.',
    ],
    ticketSize: '€250k – €2.0M',
    targetYield: '6% – 9%',
    keyAdvantage: 'Immediate cash flow generation with zero development risk',
    stats: [
      { label: 'Ticket Size', value: '€250k – €2.0M' },
      { label: 'Target Rental Yield', value: '6% – 9%' },
      { label: 'Capital Appreciation', value: '~4% – 5%' },
      { label: 'Occupancy Rate', value: '95%+' },
    ],
    properties: [
      {
        id: 'A1',
        title: 'Via Fratelli Zoia, 216',
        location: 'Milano, Italy',
        type: 'Residential',
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&q=80',
        tagline: 'Ready-to-rent apartments in a prime location with rental potential of €14-18K per year.',
        description: [
          'Modern residential units strategically located near Bocconi and Politecnico universities. High demand from students and young professionals ensures consistent occupancy.',
          'Immediate rental income from day one with professional property management in place.',
        ],
        features: [
          { label: 'Type', value: 'Residential Buy-to-Let' },
          { label: 'Location', value: 'Via Fratelli Zoia, Milano' },
          { label: 'Target Yield', value: '6% – 9%' },
          { label: 'Occupancy', value: '95%+' },
        ],
        specs: [
          { label: 'Investment Range', value: '€250k – €500k' },
          { label: 'Monthly Rent', value: 'From €1,200' },
          { label: 'Annual Rent', value: '€14k – €18k' },
          { label: 'Target IRR', value: '6% – 9%' },
        ],
      },
      {
        id: 'A2',
        title: 'Via Soffredini 75',
        location: 'Milano, Italy',
        type: 'Residential',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80',
        tagline: 'Premium residential units in central Milan, optimised for young professional rentals.',
        description: [
          'Located in one of Milan\'s most dynamic districts, this property offers immediate access to the city\'s business and cultural centres.',
          'Professionally managed with established tenant relationships and zero vacancy periods.',
        ],
        features: [
          { label: 'Type', value: 'Residential Buy-to-Let' },
          { label: 'Location', value: 'Via Soffredini, Milano' },
          { label: 'Target Yield', value: '6% – 8%' },
          { label: 'Occupancy', value: '95%+' },
        ],
        specs: [
          { label: 'Investment Range', value: '€300k – €600k' },
          { label: 'Monthly Rent', value: 'From €1,400' },
          { label: 'Annual Rent', value: '€16k – €20k' },
          { label: 'Target IRR', value: '6% – 8%' },
        ],
      },
      {
        id: 'A3',
        title: 'Via Pellegrino Rossi, 45',
        location: 'Milano, Italy',
        type: 'Residential',
        img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop&q=80',
        tagline: 'Strategic residential investment near Milan\'s key educational institutions.',
        description: [
          'Purpose-built for the student rental market, this property benefits from extreme supply scarcity in modern residential stock near Milan\'s universities.',
          'High turnover of international students ensures stable rental income throughout the academic year.',
        ],
        features: [
          { label: 'Type', value: 'Residential Buy-to-Let' },
          { label: 'Location', value: 'Via Pellegrino Rossi, Milano' },
          { label: 'Target Yield', value: '7% – 9%' },
          { label: 'Occupancy', value: '95%+' },
        ],
        specs: [
          { label: 'Investment Range', value: '€250k – €450k' },
          { label: 'Monthly Rent', value: 'From €1,100' },
          { label: 'Annual Rent', value: '€13k – €17k' },
          { label: 'Target IRR', value: '7% – 9%' },
        ],
      },
    ],
  },
  {
    id: 'B',
    slug: 'strategic-growth',
    title: 'Strategic Growth',
    subtitle: 'Option B',
    tagline: 'Direct shareholding in Cistus Properties for revitalisation projects.',
    description: [
      'Invest directly in Cistus Property shareholding to access larger deals for revitalisation projects. Boutique residential buildings strategically located in Milan, focusing on structural and aesthetic transformation.',
      'Full transformation of aging assets sold to local end-users. Value creation occurs at the holding level across multiple projects.',
    ],
    ticketSize: '€500k – €3.0M',
    targetYield: '12% – 18%',
    keyAdvantage: 'Value creation through full transformation of aging assets',
    stats: [
      { label: 'Ticket Size', value: '€500k – €3.0M' },
      { label: 'Target Rental Yield', value: '6% – 9%' },
      { label: 'Target IRR', value: '12% – 18%' },
      { label: 'Investor Friendly', value: 'Yes' },
    ],
    properties: [
      {
        id: 'B1',
        title: '30 Via Adamello',
        location: 'Milano, Italy',
        type: 'Residential – Redevelopment',
        img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&h=900&fit=crop&q=80',
        tagline: 'Club deal transforming existing property into a contemporary residential complex.',
        description: [
          'The project envisions transforming the existing property into a contemporary residential complex in Milan, delivering modern architecture and high-quality living through comfortable apartments of varied sizes aligned with new development standards.',
          'Located near Metro Station (300m) and University (150m), ensuring strong demand for the completed units.',
        ],
        features: [
          { label: 'Type', value: 'Residential Redevelopment' },
          { label: 'Location', value: '30 Via Adamello, Milano' },
          { label: 'Units', value: '~35 Units' },
          { label: 'Project Area', value: '3,570 sqm' },
        ],
        specs: [
          { label: 'Total Investment', value: '€12.85M' },
          { label: 'Total Revenue', value: '€17.89M' },
          { label: 'Net Profit', value: '€4.12M' },
          { label: 'Profit Margin', value: '34%' },
          { label: 'Project Duration', value: '24 months' },
          { label: 'Average Sale', value: '€4,800 / sqm' },
          { label: 'ROI Multiple', value: '3.86x' },
          { label: 'Parking', value: '33 Spaces' },
        ],
      },
    ],
  },
  {
    id: 'C',
    slug: 'ultra-large',
    title: 'Ultra Large',
    subtitle: 'Option C',
    tagline: 'Trophy "Blue Chip" assets for generational wealth preservation.',
    description: [
      'Buy-and-hold strategy focused on trophy Alternative asset classes such as Hotels and Commercial spaces. Pre-leased property with immediate rental yield from first day.',
      'Highest resilience to economic downturns; "Blue Chip" real estate capitalising on trophy assets for generational wealth preservation and personal lifestyle use.',
    ],
    ticketSize: '€10M – €80M',
    targetYield: 'Stable Core Income',
    keyAdvantage: 'Immediate cash flow with zero development risk in trophy assets',
    stats: [
      { label: 'Investment Range', value: '€10M – €80M+' },
      { label: 'EBITDA Margin', value: '37% – 40%' },
      { label: 'Occupancy Rate', value: '90%+' },
      { label: 'Investor Friendly', value: 'Yes' },
    ],
    properties: [
      {
        id: 'C1',
        title: 'Castello di Velona',
        location: 'Montalcino, Tuscany – Florence',
        type: 'Hospitality – Luxury',
        img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&h=900&fit=crop&q=80',
        tagline: 'ICON of Val d\'Orcia UNESCO World Heritage Site – 5-star boutique hotel with active vineyard.',
        description: [
          'Historic Villa converted into a 5-star boutique hotel paired with an active vineyard. A rare combination of heritage real estate and operational hospitality income.',
          'Access a fully functional asset with strong cash flow and verified operational efficiency.',
        ],
        features: [
          { label: 'Type', value: 'Hospitality – Luxury' },
          { label: 'Location', value: 'Montalcino, Tuscany' },
          { label: 'Project Area', value: '7,500 sqm' },
          { label: 'Rooms & Suites', value: '46' },
        ],
        specs: [
          { label: 'Turnover (2025)', value: '€8M+' },
          { label: 'EBITDA Margin', value: '37% – 40%' },
          { label: 'Presidential Suite', value: '3' },
          { label: 'SPA with Cabins', value: '5 with Thermal Waters' },
          { label: 'Swimming Pool', value: '1,500 sqm' },
          { label: 'Restaurant', value: 'Verified' },
          { label: 'Wine Inventory', value: '€1.5M' },
          { label: 'Thermal Waters', value: 'Yes' },
        ],
      },
      {
        id: 'C2',
        title: 'Via Luigi Cadorna',
        location: 'Vimodrone, Milano Metro Area',
        type: 'Commercial – Office Complex',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&q=80',
        tagline: 'Fully leased modern office complex in Milan\'s strategic suburb.',
        description: [
          'Modern Commercial Building (Fully Leased) in Milan Metro Area. Capitalises on "De-centralisation" Trend for Grade-A Offices Outside CBD.',
          '"Stable Core" Investment with immediate rental income and 90%+ multi-tenant occupancy.',
        ],
        features: [
          { label: 'Type', value: 'Commercial – Office' },
          { label: 'Location', value: 'Via Luigi Cadorna, Vimodrone' },
          { label: 'Project Area', value: '19,405 sqm' },
          { label: 'Buildings', value: '5' },
        ],
        specs: [
          { label: 'Investment Ask', value: '€14M – €15M' },
          { label: 'Transaction Structure', value: 'Asset Deal' },
          { label: 'Leasing Strategy', value: 'Multi-Tenant' },
          { label: 'Occupancy Rate', value: '90% – 95%' },
          { label: 'Annual NOI', value: '€1.64M+' },
          { label: 'Annual Rent', value: '€1.9M' },
          { label: 'Investment Range', value: '€14M – €15M' },
          { label: 'Verified NOI', value: 'Yes' },
        ],
      },
    ],
  },
]
