import { PRODUCT } from '../data/site'

export function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Social Proof</span>
          <div className="main-title">Trusted by customers</div>
          <p className="section-subtitle">
            {PRODUCT.rating} stars with {PRODUCT.reviewCount} reviews from magnesium routines that
            stick.
          </p>
        </div>
        <div className="reviews-grid">
          <article className="review-card review-card--score">
            <div className="review-score">{PRODUCT.rating}</div>
            <div className="review-stars">★★★★★</div>
            <p>{PRODUCT.reviewCount} reviews</p>
          </article>
          <article className="review-card">
            <h3>“Easy to swallow, no aftertaste”</h3>
            <p>
              I take two capsules at night and finally feel like my sleep routine has a real
              backbone. Clean label and vegan capsules made this an easy pick.
            </p>
          </article>
          <article className="review-card">
            <h3>“Eight forms feels more complete”</h3>
            <p>
              Switched from a single-form magnesium. The multi-form blend feels more complete —
              less tightness after workouts and one bottle lasts over a month.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
