import { FREE_SHIPPING_THRESHOLD, SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function ShippingPolicyPage() {
  return (
    <PageShell title="Shipping Policy">
      <p>
        Orders typically ship within 1–3 business days. Free shipping applies automatically on
        qualifying orders over ${FREE_SHIPPING_THRESHOLD}. Questions? Email {SITE.email}.
      </p>
    </PageShell>
  )
}
