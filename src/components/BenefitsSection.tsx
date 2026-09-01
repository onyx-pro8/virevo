import { BENEFITS } from '../data/site'

function BenefitIcon({ type }: { type: (typeof BENEFITS)[number]['icon'] }) {
  if (type === 'sleep') {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 14.5A7.5 7.5 0 1 1 12.5 3 6 6 0 0 0 21 14.5z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }
  if (type === 'bone') {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 8v8M17 8v8M7 12h10M5 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14-12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 4 6v6c0 5 3.4 7.8 8 9 4.6-1.2 8-4 8-9V6l-8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function BenefitsSection() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why It Works</span>
          <div className="main-title">Daily Magnesium Support</div>
          <p className="section-subtitle">
            Built to support restful sleep, muscle function, bone health, and everyday wellness —
            as a dietary supplement, not a medical treatment.
          </p>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map((item) => (
            <article className="benefits-card" key={item.title}>
              <div className="benefits-icon">
                <BenefitIcon type={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <figure className="benefits-infographic">
          <img
            src="/images/product/benefits-infographic.png"
            alt="Magnesium Complex supports sleep, bones, heart, muscles, digestion, and immune health"
          />
          <figcaption>
            Label-backed wellness areas — sleep, bones, heart, muscles, digestion, and immune
            support in one daily serving.†
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
