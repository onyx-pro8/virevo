import { SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function CancelPage() {
  return (
    <PageShell title="Easy Cancel">
      <p>
        To cancel a VIP membership or subscription, email{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with the subject “Cancel Membership”.
        There are no cancellation fees.
      </p>
    </PageShell>
  )
}
