import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { PRODUCT, SITE } from '../data/site'

export function RefundPage() {
  return (
    <PageShell
      title="Refund Policy"
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Refund Policy' }]}
    >
      <article className="legal-copy">
        <p>
          We offer a 30-day money-back guarantee on {PRODUCT.name}. If you are not satisfied, contact{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with your order number within 30 days of
          delivery.
        </p>
        <p>
          Approved refunds are issued to the original payment method. Shipping fees may be
          non-refundable unless the return is due to our error.
        </p>
        <p>
          For VIP membership cancellations (which stop future billing), use our{' '}
          <Link to="/cancellation-request">Easy Cancel</Link> page. Membership cancellations are
          separate from product refunds.
        </p>
      </article>
    </PageShell>
  )
}
