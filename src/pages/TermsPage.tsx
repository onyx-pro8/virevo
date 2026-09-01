import { SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function TermsPage() {
  return (
    <PageShell title="Terms of Service">
      <p>
        By purchasing from {SITE.name}, you agree to our product usage guidance, shipping terms, and
        refund policy. Dietary supplements are not drugs and are not intended to diagnose, treat,
        cure, or prevent any disease.
      </p>
    </PageShell>
  )
}
