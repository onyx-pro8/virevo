import {
  CERTIFICATIONS,
  MAGNESIUM_BLEND,
  OTHER_INGREDIENTS,
  PRODUCT,
  SUPPLEMENT_FACTS,
} from '../data/site'

export function SupplementFacts() {
  return (
    <section className="facts-section" id="facts">
      <div className="container facts-layout">
        <div className="facts-copy">
          <span className="section-label">Transparency</span>
          <h2 className="main-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
            Supplement Facts
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 20px' }}>
            Serving Size: {PRODUCT.servingSize} · Servings Per Container: {PRODUCT.servings} ·
            Manufactured for Virevo®
          </p>

          <div className="facts-table-wrap">
            <table className="facts-table">
              <thead>
                <tr>
                  <th>Amount Per Serving</th>
                  <th>Amount</th>
                  <th>%DV</th>
                </tr>
              </thead>
              <tbody>
                {SUPPLEMENT_FACTS.map((row) => (
                  <tr key={row.nutrient}>
                    <td>{row.nutrient}</td>
                    <td>{row.amount}</td>
                    <td>{row.dv || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="facts-blend">
            <h3>8-Form Magnesium Complex</h3>
            <ul>
              {MAGNESIUM_BLEND.map((form) => (
                <li key={form}>{form}</li>
              ))}
            </ul>
          </div>

          <p className="facts-note">
            <strong>Other Ingredients:</strong> {OTHER_INGREDIENTS.join(', ')}.
            <br />
            Listed as {PRODUCT.gmoStatus} and vegan. Manufactured by {PRODUCT.manufacturer} in the{' '}
            {PRODUCT.region}. Distributed by {PRODUCT.brand === 'Toplux Nutrition' ? 'Driftmill Go LLC (Virevo)' : 'Virevo'}.
            <br />
            † Percent Daily Values based on a 2,000 calorie diet. Daily Value (420 mg) differs from
            NIH supplemental upper limit (350 mg/day for adults).
          </p>

          <div className="facts-certs">
            {CERTIFICATIONS.map((cert) => (
              <div className="facts-certs__item" key={cert.title}>
                <strong>{cert.title}</strong>
                <span>{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="facts-visual">
          <img
            src="/images/product/label-back.png"
            alt="Toplux Magnesium Complex supplement facts label — 1000 mg per 2 veggie capsules, 45 servings, 8 magnesium forms"
          />
          <p className="facts-visual__caption">
            Back-label Supplement Facts: 2 veggie capsules = 1,000 mg elemental magnesium (238% DV).
            Verify the label on the bottle you receive.
          </p>
        </div>
      </div>
    </section>
  )
}
