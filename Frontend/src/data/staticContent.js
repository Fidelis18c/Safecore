import {
  ShieldCheck, Eye, ClipboardCheck, AlertTriangle,
  Siren, HeartPulse, HardHat, Users
} from 'lucide-react'

// Service hero images (file names match the service they represent)
import imgMiningSafety from '../assets/Mining Safety training.jpeg'
import imgHazards from '../assets/HazardsImage.jpeg'
import imgWorkplaceAudits from '../assets/Workplace audits.jpeg'
import imgRiskAssessment from '../assets/Risk Assesment .jpeg'
import imgEmergencyResponse from '../assets/Rescure training.jpeg'
import imgPpeSupply from '../assets/PPE Supply and Distribution.jpeg'
import imgFirstAid from '../assets/First aid training.jpeg'
import imgConsultancy from '../assets/Consulting service.jpeg'

// Product images
import imgHelmet from '../assets/Head.jpeg'
import imgBoots from '../assets/boots.jpeg'
import imgVest from '../assets/Coat.jpeg'
import imgGloves from '../assets/Gloves.jpeg'
import imgEarProtection from '../assets/Ear Protection.jpeg'
import imgMask from '../assets/Mask.jpeg'
import imgGoggles from '../assets/Googles.jpeg'

export const COMPANY = {
  name: 'SAFE Core Company Limited',
  shortName: 'SAFE Core',
  tagline: 'Safety First, Productivity Always',
  phone: '+255 694 007 665',
  email: 'info@safecoretanzania.co.tz',
  whatsapp: '255694007665',
  address: 'Dar es Salaam, Tanzania',
  website: 'www.safecoretanzania.co.tz',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Mining Safety Training', href: '/services/mining-safety-training' },
      { label: 'Hazard Awareness Programmes', href: '/services/hazard-awareness-programmes' },
      { label: 'Workplace Safety Audits', href: '/services/workplace-safety-audits' },
      { label: 'Risk Assessment Services', href: '/services/risk-assessment-services' },
      { label: 'Emergency Response Training', href: '/services/emergency-response-training' },
      { label: 'First Aid Training', href: '/services/first-aid-training' },
      { label: 'PPE Supply & Distribution', href: '/services/ppe-supply-distribution' },
      { label: 'Safety Consultancy', href: '/services/safety-consultancy' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
  { label: 'Consultation', href: '/consultation' },
]

export const STATS = [
  { value: '500+', label: 'Workers Trained' },
  { value: '50+', label: 'Companies Served' },
  { value: '8', label: 'Core Services' },
  { value: '100%', label: 'Compliance Focus' },
]

export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: 'Certified Expertise',
    description: 'Our team holds internationally recognised safety certifications and brings years of hands-on experience in mining and industrial safety.',
  },
  {
    icon: Eye,
    title: 'Local Knowledge, Global Standards',
    description: 'We understand Tanzania\'s unique mining landscape and apply international best practices adapted to local conditions.',
  },
  {
    icon: Users,
    title: 'End-to-End Safety Solutions',
    description: 'From training and audits to PPE supply and consultancy, we provide a complete safety ecosystem under one roof.',
  },
]

export const SERVICES = [
  {
    slug: 'mining-safety-training',
    image: imgMiningSafety,
    icon: HardHat,
    title: 'Mining Safety Training',
    shortDesc: 'Comprehensive training programmes tailored for artisanal, small-scale, and commercial mining operations across Tanzania.',
    fullDesc: 'Our mining safety training programmes are designed to equip miners with the knowledge and skills needed to work safely in challenging environments. We cover underground and surface mining safety, equipment handling, hazard recognition, and emergency procedures. Training is delivered by certified professionals with real-world mining experience.',
    benefits: ['Reduced workplace accidents and injuries', 'OSHA Tanzania compliance', 'Improved worker confidence and productivity', 'Customised modules for your mining operation', 'Practical hands-on training sessions'],
    deliverables: ['Training completion certificates', 'Safety procedure manuals', 'Post-training assessment reports', 'Follow-up support and refresher scheduling'],
    targetAudience: 'Artisanal and small-scale miners, medium-scale mining companies, mining cooperatives, quarry operators.',
  },
  {
    slug: 'hazard-awareness-programmes',
    image: imgHazards,
    icon: AlertTriangle,
    title: 'Hazard Awareness Programmes',
    shortDesc: 'Structured programmes to help workers identify, assess, and mitigate workplace hazards before they cause harm.',
    fullDesc: 'Our hazard awareness programmes create a culture of safety consciousness in your workplace. We train teams to proactively identify physical, chemical, biological, and ergonomic hazards. Through interactive workshops, toolbox talks, and visual aids, we empower workers to take ownership of their safety environment.',
    benefits: ['Proactive hazard identification culture', 'Reduced near-miss incidents', 'Empowered and safety-conscious workforce', 'Compliance with national safety regulations', 'Tailored to your specific industry risks'],
    deliverables: ['Hazard identification toolkits', 'Customised awareness materials (posters, guides)', 'Workshop completion records', 'Hazard reporting framework implementation'],
    targetAudience: 'Mining companies, construction firms, industrial workplaces, government projects.',
  },
  {
    slug: 'workplace-safety-audits',
    image: imgWorkplaceAudits,
    icon: ClipboardCheck,
    title: 'Workplace Safety Audits',
    shortDesc: 'Thorough on-site safety audits that identify compliance gaps, unsafe practices, and areas for improvement.',
    fullDesc: 'Our workplace safety audits provide a comprehensive evaluation of your safety management systems, physical conditions, and operational practices. We measure your workplace against OSHA Tanzania standards and international benchmarks, delivering actionable recommendations that protect your workers and your business.',
    benefits: ['Clear picture of compliance status', 'Actionable improvement recommendations', 'Reduced liability and legal risk', 'Benchmark against industry standards', 'Foundation for continuous safety improvement'],
    deliverables: ['Detailed audit report with findings', 'Risk rating matrix', 'Prioritised corrective action plan', 'Follow-up audit scheduling'],
    targetAudience: 'Mining operations, construction sites, factories, warehouses, government projects.',
  },
  {
    slug: 'risk-assessment-services',
    image: imgRiskAssessment,
    icon: Eye,
    title: 'Risk Assessment Services',
    shortDesc: 'Systematic identification and evaluation of workplace risks with practical control measures.',
    fullDesc: 'Our risk assessment services follow a structured methodology to identify hazards, evaluate the likelihood and severity of harm, and recommend effective control measures. We use the hierarchy of controls framework to ensure the most effective solutions are implemented, protecting both people and productivity.',
    benefits: ['Systematic hazard identification', 'Prioritised risk mitigation strategies', 'Regulatory compliance documentation', 'Insurance and stakeholder confidence', 'Prevention-focused approach'],
    deliverables: ['Comprehensive risk assessment report', 'Risk register with ratings', 'Control measures implementation plan', 'Residual risk evaluation'],
    targetAudience: 'Mining companies, construction firms, industrial facilities, NGO projects.',
  },
  {
    slug: 'emergency-response-training',
    image: imgEmergencyResponse,
    icon: Siren,
    title: 'Emergency Response Training',
    shortDesc: 'Prepare your team to respond effectively to fires, chemical spills, cave-ins, and other mining emergencies.',
    fullDesc: 'Our emergency response training prepares your workforce to handle crisis situations calmly and effectively. We cover fire emergencies, chemical spills, structural collapses, medical emergencies, and evacuation procedures. Training includes realistic scenario-based drills that build muscle memory and team coordination.',
    benefits: ['Faster, more effective emergency response', 'Reduced casualties and property damage', 'Regulatory compliance', 'Improved team coordination under pressure', 'Regular drill scheduling'],
    deliverables: ['Emergency response plan', 'Evacuation maps and procedures', 'Drill reports and performance assessments', 'Emergency equipment recommendations'],
    targetAudience: 'Mining operations, industrial facilities, construction companies, quarry operators.',
  },
  {
    slug: 'first-aid-training',
    image: imgFirstAid,
    icon: HeartPulse,
    title: 'First Aid Training',
    shortDesc: 'Certified first aid training to ensure immediate, life-saving response when accidents occur on site.',
    fullDesc: 'Our first aid training equips your workers with essential life-saving skills. From wound management and fracture immobilisation to CPR and AED usage, our courses follow Red Cross and OSHA guidelines. We offer both basic and advanced levels, tailored to the specific risks of your industry.',
    benefits: ['Immediate on-site emergency response capability', 'Compliance with workplace first aid requirements', 'Reduced severity of workplace injuries', 'Certified first aiders on every shift', 'Confidence to act in emergencies'],
    deliverables: ['First aid certification (valid 2 years)', 'First aid kit recommendations', 'Workplace first aid policy template', 'Refresher training scheduling'],
    targetAudience: 'All workplaces — mining, construction, industrial, office environments.',
  },
  {
    slug: 'ppe-supply-distribution',
    image: imgPpeSupply,
    icon: ShieldCheck,
    title: 'PPE Supply & Distribution',
    shortDesc: 'Quality personal protective equipment sourced and distributed to mining and industrial sites across Tanzania.',
    fullDesc: 'We supply a comprehensive range of certified personal protective equipment (PPE) suitable for mining, construction, and industrial environments. Our products meet international safety standards and are selected for durability, comfort, and protection in demanding conditions. We offer bulk supply with competitive pricing and reliable delivery.',
    benefits: ['Certified, quality-assured PPE', 'Competitive bulk pricing', 'Reliable supply chain and delivery', 'Expert advice on PPE selection', 'Compliant with OSHA Tanzania requirements'],
    deliverables: ['PPE product catalogue', 'Bulk order quotations', 'Delivery to site', 'PPE usage training (on request)'],
    targetAudience: 'Mining companies, construction firms, quarry operators, industrial workplaces.',
  },
  {
    slug: 'safety-consultancy',
    image: imgConsultancy,
    icon: Users,
    title: 'Safety Consultancy',
    shortDesc: 'Expert consultancy to build, improve, and maintain your organisation\'s safety management systems.',
    fullDesc: 'Our safety consultancy services provide strategic guidance to organisations seeking to establish or improve their safety management systems. We work closely with your leadership team to develop safety policies, procedures, and cultures that protect workers and drive productivity. Our consultants bring cross-industry expertise and a practical, results-oriented approach.',
    benefits: ['Customised safety management systems', 'Expert guidance from certified professionals', 'Improved safety culture and leadership', 'Regulatory compliance assurance', 'Long-term safety partnership'],
    deliverables: ['Safety management system documentation', 'Policy and procedure development', 'Safety culture assessment report', 'Ongoing consultancy and support plan'],
    targetAudience: 'Medium and large mining companies, NGOs, government projects, construction firms.',
  },
]

export const PRODUCTS = [
  {
    slug: 'safety-helmets',
    image: imgHelmet,
    name: 'Safety Helmets',
    category: 'head',
    description: 'Industrial-grade safety helmets designed for mining and construction environments. Built to withstand impact, penetration, and electrical hazards.',
    features: ['EN 397 certified', 'Adjustable ratchet suspension', 'UV-resistant shell', 'Ventilated design', 'Chin strap included'],
  },
  {
    slug: 'safety-boots',
    image: imgBoots,
    name: 'Safety Boots',
    category: 'foot',
    description: 'Heavy-duty steel-toe safety boots with slip-resistant soles, designed for rugged mining and construction terrain.',
    features: ['Steel toe cap protection', 'Oil and acid resistant sole', 'Anti-slip tread pattern', 'Ankle support design', 'Water-resistant upper'],
  },
  {
    slug: 'reflective-vests',
    image: imgVest,
    name: 'Reflective Vests',
    category: 'body',
    description: 'High-visibility reflective vests for enhanced worker visibility in low-light conditions and active mining zones.',
    features: ['EN ISO 20471 compliant', '360° reflective strips', 'Breathable mesh fabric', 'Adjustable fit', 'Multiple pocket design'],
  },
  {
    slug: 'safety-gloves',
    image: imgGloves,
    name: 'Safety Gloves',
    category: 'body',
    description: 'Multi-purpose safety gloves offering protection against cuts, abrasion, and chemical exposure in mining and industrial settings.',
    features: ['Cut-resistant material', 'Enhanced grip coating', 'Flexible and comfortable', 'Chemical splash resistance', 'Available in multiple sizes'],
  },
  {
    slug: 'safety-goggles',
    image: imgGoggles,
    name: 'Safety Goggles',
    category: 'eye_ear',
    description: 'Impact-resistant safety goggles providing full eye protection against dust, debris, and chemical splashes.',
    features: ['EN 166 certified', 'Anti-fog coating', 'UV protection', 'Over-glasses compatible', 'Adjustable elastic strap'],
  },
  {
    slug: 'ear-protection',
    image: imgEarProtection,
    name: 'Ear Protection',
    category: 'eye_ear',
    description: 'Noise-reducing ear defenders and ear plugs for workers exposed to high-decibel environments in mining and construction.',
    features: ['NRR 25-30 dB rating', 'Comfortable padded headband', 'Foldable for easy storage', 'Compatible with safety helmets', 'Lightweight design'],
  },
  {
    slug: 'dust-masks',
    image: imgMask,
    name: 'Dust Masks & Respirators',
    category: 'respiratory',
    description: 'FFP2/FFP3 rated dust masks and respirators for protection against fine particulate matter, silica dust, and harmful fumes.',
    features: ['FFP2/FFP3 rated', 'Exhalation valve for comfort', 'Adjustable nose clip', 'Elastic head straps', 'Individually packaged'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'James Mwakasege',
    role: 'Site Manager',
    company: 'TanzGold Mining Co.',
    quote: 'SAFE Core transformed our safety culture. After their training programme, our incident rate dropped by 60%. Their team truly understands the challenges we face in artisanal mining.',
    rating: 5,
  },
  {
    name: 'Grace Kimaro',
    role: 'Operations Director',
    company: 'East Africa Quarries Ltd',
    quote: 'The workplace safety audit was thorough and professional. SAFE Core identified risks we had overlooked for years. Their recommendations were practical and easy to implement.',
    rating: 5,
  },
  {
    name: 'Hassan Ally',
    role: 'Health & Safety Officer',
    company: 'Mwanza Construction Group',
    quote: 'We now source all our PPE through SAFE Core. The quality is excellent, pricing is fair, and they always deliver on time. They have become a trusted partner for our safety needs.',
    rating: 5,
  },
  {
    name: 'Dr. Fatma Mushi',
    role: 'Programme Manager',
    company: 'Tanzania Mining NGO',
    quote: 'SAFE Core\'s first aid training was outstanding. Our field workers now have the confidence and skills to respond to emergencies. I highly recommend their services.',
    rating: 5,
  },
]

export const CORE_VALUES = [
  { title: 'Safety First', description: 'We never compromise on safety. Every decision we make prioritises the wellbeing of workers and communities.' },
  { title: 'Integrity', description: 'We operate with transparency, honesty, and accountability in everything we do.' },
  { title: 'Excellence', description: 'We deliver the highest quality training, products, and services — exceeding expectations every time.' },
  { title: 'Local Expertise', description: 'We combine deep understanding of Tanzania\'s mining landscape with international best practices.' },
  { title: 'Continuous Learning', description: 'We stay at the forefront of safety innovation, constantly updating our knowledge and methods.' },
]

export const BLOG_POSTS = [
  {
    slug: 'top-mining-safety-hazards-tanzania',
    title: 'Top 10 Mining Safety Hazards in Tanzania and How to Prevent Them',
    excerpt: 'From rock falls and cave-ins to dust exposure and equipment failures — discover the most critical safety hazards facing Tanzanian miners and proven strategies to prevent them.',
    category: 'Mining Safety',
    tags: ['Mining Safety', 'Hazards', 'Prevention'],
    readTime: 8,
    publishedAt: '2025-01-15',
  },
  {
    slug: 'ppe-selection-guide-artisanal-miners',
    title: 'A Complete Guide to PPE Selection for Artisanal Miners',
    excerpt: 'Choosing the right personal protective equipment can save lives. This guide walks through essential PPE for every type of mining activity.',
    category: 'PPE',
    tags: ['PPE', 'Artisanal Mining', 'Equipment'],
    readTime: 6,
    publishedAt: '2025-02-10',
  },
  {
    slug: 'osha-tanzania-compliance-guide',
    title: 'Understanding OSHA Tanzania: Compliance Requirements for Mining Companies',
    excerpt: 'Navigate Tanzania\'s occupational health and safety regulations with confidence. A comprehensive overview of OSHA requirements for the mining industry.',
    category: 'Compliance',
    tags: ['OSHA', 'Compliance', 'Regulations'],
    readTime: 10,
    publishedAt: '2025-03-05',
  },
  {
    slug: 'workplace-risk-assessment-step-by-step',
    title: 'How to Conduct a Workplace Risk Assessment: Step-by-Step Guide',
    excerpt: 'A practical, step-by-step approach to identifying hazards, evaluating risks, and implementing effective control measures at your workplace.',
    category: 'Risk Assessment',
    tags: ['Risk Assessment', 'Safety Management', 'Guide'],
    readTime: 7,
    publishedAt: '2025-04-01',
  },
  {
    slug: 'emergency-response-planning-small-scale-mining',
    title: 'Emergency Response Planning for Small-Scale Mining Operations',
    excerpt: 'Every mining operation needs an emergency response plan. Learn how to create one that could save lives when disaster strikes.',
    category: 'Emergency Response',
    tags: ['Emergency Response', 'Planning', 'Mining'],
    readTime: 9,
    publishedAt: '2025-05-12',
  },
]

export const PRODUCT_CATEGORIES = [
  { key: 'all', label: 'All Products' },
  { key: 'head', label: 'Head Protection' },
  { key: 'foot', label: 'Foot Protection' },
  { key: 'body', label: 'Body Protection' },
  { key: 'eye_ear', label: 'Eye & Ear Protection' },
  { key: 'respiratory', label: 'Respiratory Protection' },
]
