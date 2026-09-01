import { SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function RefundPage() {
  return (
    <PageShell title="Refund Policy">
      <p>
        If you are unsatisfied with your order, contact {SITE.email} within 30 days of delivery.
        Unused product in original packaging may be eligible for a refund or replacement.
      </p>
    </PageShell>
  )
}
