import { SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function ContactsPage() {
  return (
    <PageShell title="Contacts">
      <div className="contact-block">
        <p>
          <strong>{SITE.company}</strong>
        </p>
        <p>
          {SITE.addressLines[0]}
          <br />
          {SITE.addressLines[1]}
        </p>
        <p>
          Email:{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>Hours: {SITE.hours}</p>
      </div>
    </PageShell>
  )
}
