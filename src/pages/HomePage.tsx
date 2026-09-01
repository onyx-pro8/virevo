import { BenefitsSection } from '../components/BenefitsSection'
import { FormulaSection } from '../components/FormulaSection'
import { Hero } from '../components/Hero'
import { HowToUse } from '../components/HowToUse'
import { ProductSpecs } from '../components/ProductSpecs'
import { ReviewsSection } from '../components/ReviewsSection'
import { ShippingSection } from '../components/ShippingSection'
import { SupplementFacts } from '../components/SupplementFacts'
import { TrustTicker } from '../components/TrustTicker'
import { WhyChoose } from '../components/WhyChoose'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustTicker />
      <BenefitsSection />
      <FormulaSection />
      <HowToUse />
      <ProductSpecs />
      <SupplementFacts />
      <ReviewsSection />
      <WhyChoose />
      <ShippingSection />
    </>
  )
}
