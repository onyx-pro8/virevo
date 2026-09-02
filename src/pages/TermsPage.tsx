import { PageShell } from '../components/PageShell'
import { PRODUCT, SITE } from '../data/site'

export function TermsPage() {
  return (
    <PageShell
      title={`Terms Of Service - ${SITE.name}`}
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
    >
      <article className="legal-copy">
        <h3>SECTION 1 — ONLINE STORE TERMS</h3>
        <p>
          By accessing this website and purchasing {PRODUCT.name}, you agree to these Terms of
          Service and all applicable laws. The site is operated by {SITE.company}.
        </p>
        <h3>SECTION 2 — GENERAL CONDITIONS</h3>
        <p>
          We reserve the right to refuse service, limit quantities, or cancel orders at our
          discretion. Product descriptions and pricing may change without notice.
        </p>
        <h3>SECTION 3 — PRODUCTS</h3>
        <p>
          Dietary supplements are not intended to diagnose, treat, cure, or prevent any disease.
          Always consult a healthcare professional before use. Serving size and Supplement Facts on
          the bottle you receive are the authoritative dosing information.
        </p>
        <h3>SECTION 4 — BILLING AND ACCOUNT INFORMATION</h3>
        <p>
          You agree to provide current, complete, and accurate purchase information. VIP memberships
          renew every 30 days until canceled through Easy Cancel or by emailing {SITE.email}.
        </p>
        <h3>SECTION 5 — CONTACT</h3>
        <p>
          For questions about these terms, contact {SITE.company} at{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, call{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>, or write to{' '}
          {SITE.addressLines.join(', ')}.
        </p>
      </article>
    </PageShell>
  )
}
