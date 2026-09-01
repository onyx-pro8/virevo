import { MAGNESIUM_FORMS, PRODUCT } from '../data/site'

export function FormulaSection() {
  return (
    <section className="formula-section" id="formula">
      <div className="container">
        <div className="formula-section__header">
          <span className="section-label">8-In-1 Formula</span>
          <h2 className="main-title">
            {PRODUCT.name}
            <span className="formula-section__brand"> by {PRODUCT.brand}</span>
          </h2>
          <p className="section-subtitle">
            Eight complementary magnesium salts in one serving — a multi-form formula with varied
            absorption and tolerability profiles, delivered in clean vegan capsules.
          </p>
        </div>

        <div className="formula-section__grid">
          {MAGNESIUM_FORMS.map((item, index) => (
            <article className="formula-section__card" key={item.title}>
              <span className="formula-section__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="formula-section__trait">{item.trait}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
