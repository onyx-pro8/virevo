import { PageShell } from '../components/PageShell'
import { FREE_SHIPPING_THRESHOLD, SITE } from '../data/site'

export function ShippingPolicyPage() {
  return (
    <PageShell
      title="Shipping Policy"
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Shipping Policy' }]}
    >
      <article className="legal-copy">
        <p>
          Orders are typically processed within 1–2 business days. Free shipping is available on
          qualifying orders over ${FREE_SHIPPING_THRESHOLD}.
        </p>
        <p>
          Delivery times vary by location. Tracking is provided when available. For shipping
          questions, contact{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <p>
          Shipping address: orders ship from our fulfillment partners to the address provided at
          checkout. Please verify your address carefully before placing an order.
        </p>
      </article>
    </PageShell>
  )
}
