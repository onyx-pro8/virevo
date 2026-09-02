export const SITE = {
  name: 'virevo',
  email: 'DriftmillGo@gmail.com',
  phone: '(513) 201-3808',
  phoneTel: '+15132013808',
  company: 'Driftmill Go LLC',
  addressLines: ['740 Playful Meadows Circle NE', 'Rio Rancho, NM 87144'],
  hours: 'Monday through Friday 8am to 8pm and Saturday 9am to 5pm EST',
  announcement: 'Free Shipping on Orders Over $75 — Limited Time!',
  copyright: '© 2026 virevo. All rights reserved.',
  disclaimer:
    'Products sold by virevo are dietary supplements intended to support general health and wellness. These statements have not been evaluated by the Food and Drug Administration. Please review product details, ingredients, and usage instructions before purchasing. All sales are subject to our return policy. virevo is not responsible for improper care or misuse of products. These products are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use, especially if you are pregnant, nursing, taking medication, or have a medical condition.',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/', page: 'index' },
  { label: 'Shop', href: '/shop', page: 'shop' },
  { label: 'VIP', href: '/vip', page: 'vip' },
  { label: 'Contacts', href: '/contacts', page: 'contacts' },
  { label: 'Privacy Policy', href: '/privacy-policy', page: 'privacy-policy' },
  { label: 'Terms', href: '/terms', page: 'terms' },
  { label: 'Easy Cancel', href: '/cancellation-request', page: 'cancellation-request' },
] as const

export const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'VIP', href: '/vip' },
  { label: 'Contacts', href: '/contacts' },
] as const

export const SERVICE_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Easy Cancel', href: '/cancellation-request' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Shipping Policy', href: '/shipping-policy' },
] as const

export const LOGO = {
  horizontal: '/images/logo/5.png',
  stacked: '/images/logo/2.png',
} as const

export const PRODUCT_IMAGES = [
  { src: '/images/product/bottle-front.png', alt: 'Toplux Magnesium Complex bottle front', label: 'Front' },
  { src: '/images/product/lifestyle.png', alt: 'Magnesium Complex lifestyle', label: 'Lifestyle' },
  { src: '/images/product/benefits-infographic.png', alt: 'Magnesium Complex benefits', label: 'Benefits' },
  { src: '/images/product/label-back.png', alt: 'Supplement facts label', label: 'Facts' },
] as const

export const PRODUCT = {
  id: 'magnesium-complex',
  brand: 'Toplux Nutrition',
  manufacturer: 'Toplux',
  name: 'Magnesium Complex',
  tagline: '8 Elemental Forms',
  subtitle: 'Maximum Absorption',
  form: 'Vegetable Capsules',
  bottle: '90 capsules',
  capsuleType: 'Vegetable/vegan capsule',
  servings: 45,
  servingSize: '2 capsules',
  magnesiumPerServing: '1,000 mg',
  magnesiumPerCapsule: '500 mg',
  region: 'United States',
  gmoStatus: 'GMO-free',
  vegan: true,
  category: 'Dietary supplement',
  rating: 4.6,
  reviewCount: '156.8K+',
  soldCount: '2M+',
  dailyValue: '420 mg',
  dailyValuePercent: '238%',
  nihSupplementalUL: '350 mg/day',
  price: 34.99,
  compareAtPrice: 49.97,
  image: '/images/product/bottle-front.png',
  images: PRODUCT_IMAGES,
  description:
    'Eight essential magnesium forms in vegan capsules — 1,000 mg elemental magnesium per 2-capsule serving for sleep, muscle, bone, and everyday wellness support.',
  longDescription:
    'Toplux Nutrition Magnesium Complex combines eight complementary magnesium salts — oxide, glycinate, malate, taurate, citrate, carbonate, aspartate, and orotate — in a professional-strength vegan formula. Each bottle contains 90 vegetable capsules (45 servings). Serving size is 2 capsules delivering 1,000 mg elemental magnesium (238% DV). Non-GMO, vegan, and formulated in the United States. Manufactured for Virevo by Toplux.',
}

export const PRODUCT_BUNDLES = [
  { qty: 1, label: '1 Bottle', price: 34.99, save: 0, badge: null },
  { qty: 2, label: '2 Bottles', price: 62.99, save: 7, badge: 'POPULAR' },
  { qty: 3, label: '3 Bottles', price: 89.99, save: 15, badge: 'BEST VALUE' },
] as const

export const VIP = {
  id: 'vip-membership',
  name: 'virevo VIP Membership',
  price: 49.99,
  cycleDays: 30,
}

export const FREE_SHIPPING_THRESHOLD = 75

export const VIP_FAQ = [
  {
    q: 'How do I access VIP pricing after joining?',
    a: 'After your membership is activated, member pricing is applied to Magnesium Complex at checkout. You can manage or cancel anytime through Easy Cancel.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. Cancel anytime through Easy Cancel or email. There are no cancellation fees. Access stays active until the end of the current billing period.',
  },
  {
    q: 'How much does VIP membership cost?',
    a: `VIP Membership is $49.99, charged now and every 30 days until you cancel. You will receive an electronic notification 5 to 7 days before each transaction and a receipt after each successful charge.`,
  },
  {
    q: 'How much can I save with VIP membership?',
    a: 'VIP members get exclusive pricing on Magnesium Complex, early access to offers, and priority support.',
  },
  {
    q: 'Is my payment information secure?',
    a: 'Yes. Transactions use industry-standard encryption and PCI-compliant processors. We do not store full payment details on our servers.',
  },
] as const

export const HERO_BADGES = [
  '8 Magnesium Forms',
  '1000 mg / Serving',
  'Vegan Capsules',
  'Non-GMO',
] as const

export const TRUST_ITEMS = [
  '8 Elemental Forms',
  '1000 mg Per Serving',
  'Vegan Capsules',
  'Non-GMO',
  'Lab Tested',
  'Formulated in USA',
  'GMP Facility',
  '45 Servings',
] as const

export const PRODUCT_SPECS = [
  { label: 'Magnesium Forms', value: '8' },
  { label: 'Elemental Magnesium', value: '1,000 mg' },
  { label: 'Serving Size', value: '2 capsules' },
  { label: 'Bottle Count', value: '90 capsules' },
  { label: 'Servings Per Bottle', value: '45' },
  { label: 'Capsule Type', value: 'Vegan' },
  { label: 'GMO Status', value: 'GMO-free' },
  { label: 'Region of Origin', value: 'United States' },
] as const

export const BENEFITS = [
  {
    title: 'Promotes Restful Sleep',
    text: 'Magnesium helps calm the nervous system so you can unwind and support deeper, more restorative rest.',
    icon: 'sleep',
  },
  {
    title: 'Supports Bones & Muscle',
    text: 'Essential mineral support for muscle function, recovery after activity, and bone health over time.',
    icon: 'bone',
  },
  {
    title: 'Healthy Immune System',
    text: 'Daily magnesium intake helps maintain systems your body relies on for immune resilience.',
    icon: 'shield',
  },
] as const

export const MAGNESIUM_FORMS = [
  {
    title: 'Magnesium Glycinate',
    text: 'Generally well tolerated; commonly used in supplements aimed at relaxation and sleep support.',
    trait: 'Relaxation',
  },
  {
    title: 'Magnesium Citrate',
    text: 'Relatively well absorbed; citrate, aspartate, and soluble forms tend to absorb better than oxide.',
    trait: 'Absorption',
  },
  {
    title: 'Magnesium Malate',
    text: 'Magnesium bound to malic acid; often marketed for energy metabolism and muscle support.',
    trait: 'Energy',
  },
  {
    title: 'Magnesium Taurate',
    text: 'Magnesium bound to taurine; commonly marketed for cardiovascular wellness support.',
    trait: 'Heart',
  },
  {
    title: 'Magnesium Aspartate',
    text: 'A relatively bioavailable form included for cellular uptake pathways.',
    trait: 'Cellular',
  },
  {
    title: 'Magnesium Orotate',
    text: 'Magnesium bound to orotic acid — a less common, premium form in multi-blend formulas.',
    trait: 'Premium',
  },
  {
    title: 'Magnesium Carbonate',
    text: 'A classic mineral salt; may contribute to gastrointestinal effects in sensitive users.',
    trait: 'Mineral base',
  },
  {
    title: 'Magnesium Oxide',
    text: 'High elemental magnesium content but generally less bioavailable than citrate or glycinate.',
    trait: 'Density',
  },
] as const

export const LABEL_CLAIMS = [
  'Supports bones & muscle*',
  'Promotes restful sleep*',
  'Supports healthy immune system*',
  'Supports healthy body functions*',
] as const

export const CERTIFICATIONS = [
  { title: 'Lab Tested', text: 'Third-party purity and potency checks' },
  { title: 'USA Formulated', text: 'Formulated in the United States' },
  { title: 'GMP Facility', text: 'Sourced from a GMP-certified facility' },
  { title: 'Non-GMO', text: 'Made with non-GMO ingredients' },
] as const

export const OTHER_INGREDIENTS_DETAILS = [
  {
    name: 'Hypromellose',
    role: 'Vegetable capsule shell — plant-based, vegan-friendly delivery.',
  },
  {
    name: 'Magnesium Stearate',
    role: 'Manufacturing excipient that helps capsules release consistently.',
  },
  {
    name: 'Silicon Dioxide',
    role: 'Anti-caking agent that keeps powder flowing during encapsulation.',
  },
  {
    name: 'Microcrystalline Cellulose',
    role: 'Bulking agent that stabilizes capsule fill weight.',
  },
] as const

export const DOSING_NOTES = [
  {
    title: 'Serving clarity',
    text: 'Supplement Facts list 1,000 mg elemental magnesium per 2-capsule serving — not per single capsule. At equal division, that equals approximately 500 mg per capsule.',
  },
  {
    title: '238% Daily Value explained',
    text: '1,000 mg ÷ 420 mg FDA Daily Value × 100 ≈ 238%. Daily Value is a labeling reference — not the same as the Tolerable Upper Intake Level (UL).',
  },
  {
    title: 'NIH supplemental upper limit',
    text: 'NIH lists 350 mg/day as the supplemental UL for adults (excluding magnesium from food). Consult your healthcare provider before use — especially with kidney conditions or medications.',
  },
  {
    title: 'Multi-form ≠ multi absorption',
    text: 'Eight forms provide variety across magnesium salts, but do not automatically mean 8× better absorption. Oxide and carbonate are included for elemental density; glycinate and citrate are often preferred for tolerability.',
  },
] as const

export const HOW_TO_USE = [
  'Take 2 vegetable capsules daily with water',
  'Use with or without food — consistency matters most',
  'One bottle provides 45 servings (about 45 days)',
] as const

export const FEATURES = [
  { title: 'Vegan', text: 'Plant-based hypromellose capsules' },
  { title: 'Non-GMO', text: 'Listed as GMO-free on label' },
  { title: 'USA Formulated', text: 'Manufactured by Toplux in the US' },
  { title: 'Clean Label', text: 'Short other-ingredients list' },
] as const

export const SUPPLEMENT_FACTS = [
  { nutrient: 'Magnesium (elemental)', amount: '1000 mg', dv: '238%' },
] as const

export const MAGNESIUM_BLEND = [
  'Magnesium Oxide',
  'Magnesium Glycinate',
  'Magnesium Malate',
  'Magnesium Taurate',
  'Magnesium Citrate',
  'Magnesium Carbonate',
  'Magnesium Aspartate',
  'Magnesium Orotate',
] as const

export const OTHER_INGREDIENTS = [
  'Hypromellose (Vegetable Capsule)',
  'Magnesium Stearate',
  'Silicon Dioxide',
  'Microcrystalline Cellulose',
] as const

export const WHY_CHOOSE = [
  {
    title: 'Eight forms, one serving',
    text: 'A multi-form complex combining oxide, glycinate, citrate, malate, taurate, aspartate, orotate, and carbonate — not a single salt.',
    icon: 'star',
  },
  {
    title: 'Professional strength dosing',
    text: '1,000 mg elemental magnesium per 2-capsule serving (238% DV) in a 90-capsule bottle with 45 servings.',
    icon: 'check',
  },
  {
    title: 'Clean capsule formula',
    text: 'Vegan hypromellose capsules with a short, transparent other-ingredients list.',
    icon: 'heart',
  },
  {
    title: 'Quality you can verify',
    text: 'Lab tested, Non-GMO, GMP-aligned production, and clear labeling on every bottle.',
    icon: 'user',
  },
] as const

export const COMPARISON_ROWS = [
  'Lab Tested Products',
  'Pure Formula',
  'Quality Materials',
  'Safety Tested',
  'No Artificial Flavors',
  '30-Day Money-Back Guarantee',
  'Fast Free Shipping',
  'Customer Service',
] as const

export const PRODUCT_FAQ = [
  {
    q: 'How do I take Magnesium Complex?',
    a: 'Take 2 vegetable capsules daily with water, or as directed by your healthcare provider. The Supplement Facts panel lists 1,000 mg elemental magnesium per 2-capsule serving — not per single capsule.',
  },
  {
    q: 'How many servings are in each bottle?',
    a: 'Each bottle contains 90 capsules — 45 servings at 2 capsules per serving. At one serving daily, one bottle lasts about 45 days.',
  },
  {
    q: 'What are the 8 magnesium forms included?',
    a: 'Magnesium Oxide, Glycinate, Malate, Taurate, Citrate, Carbonate, Aspartate, and Orotate — a multi-form blend rather than a single salt.',
  },
  {
    q: 'Is it vegan and Non-GMO?',
    a: 'Yes. Capsules use hypromellose (vegetable/vegan) and the product is listed as GMO-free on the label.',
  },
  {
    q: 'Why does the label say 238% Daily Value?',
    a: 'The FDA Daily Value for magnesium is 420 mg. A 1,000 mg serving equals approximately 238% of that reference amount. Daily Value and Tolerable Upper Intake Level (UL) are different metrics.',
  },
  {
    q: 'Is 1,000 mg safe for daily use?',
    a: 'NIH lists 350 mg/day as the supplemental upper limit for adults (not including food sources). This product provides 1,000 mg per labeled serving. Consult your healthcare provider before use, especially if pregnant, nursing, taking medications, or have kidney concerns.',
  },
  {
    q: 'Does "8 forms" mean better absorption?',
    a: 'Not necessarily. A multi-form formula combines different magnesium salts with varying absorption and tolerability profiles. Glycinate and citrate are generally well absorbed; oxide provides high elemental content but lower bioavailability.',
  },
  {
    q: 'What other ingredients are in the capsules?',
    a: 'Hypromellose (vegetable capsule), magnesium stearate, silicon dioxide, and microcrystalline cellulose. No added stimulants, caffeine, herbs, melatonin, or B vitamins in the active formula.',
  },
  {
    q: 'Who manufactures this product?',
    a: 'Manufactured by Toplux in the United States. Distributed by Driftmill Go LLC (Virevo) at 740 Playful Meadows Circle NE, Rio Rancho, NM 87144.',
  },
] as const

export const PRODUCT_ACCORDIONS = [
  {
    title: 'Full Specifications',
    content:
      'Brand: Toplux Nutrition · Product: Magnesium Complex · Forms: 8 · Bottle: 90 vegan capsules · Serving: 2 capsules · Servings per bottle: 45 · Elemental magnesium: 1,000 mg/serving (~500 mg/capsule) · Region: United States · Category: Dietary supplement · GMO-free · Vegan.',
  },
  {
    title: 'Label Claims & Intended Support',
    content:
      'Front-label claims include bone & muscle support, restful sleep, healthy immune system, and healthy body functions. These are structure/function marketing claims for a dietary supplement — not intended to diagnose, treat, cure, or prevent disease. Magnesium plays roles in muscle and nerve function, bone health, protein synthesis, and blood glucose regulation.',
  },
  {
    title: 'Shipping & Delivery',
    content:
      'Orders typically ship within 1–2 business days. Free shipping on orders over $75. Tracking provided when available.',
  },
  {
    title: 'Return & Refund Policy',
    content:
      '30-day money-back guarantee on eligible orders. See our Refund Policy page for full terms and conditions.',
  },
] as const
