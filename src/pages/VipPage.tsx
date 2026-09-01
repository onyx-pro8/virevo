import { PageShell } from '../components/PageShell'
import { VIP } from '../data/site'

export function VipPage() {
  return (
    <PageShell title="VIP Membership">
      <p>
        Join {VIP.name} for exclusive pricing and early access. Membership is $
        {VIP.price.toFixed(2)} every {VIP.cycleDays} days. Cancel anytime through Easy Cancel.
      </p>
    </PageShell>
  )
}
