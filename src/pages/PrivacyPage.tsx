import { SITE } from '../data/site'
import { PageShell } from '../components/PageShell'

export function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <p>
        {SITE.name} respects your privacy. We collect only the information needed to process orders
        and respond to support requests. Contact us at {SITE.email} with privacy questions.
      </p>
    </PageShell>
  )
}
