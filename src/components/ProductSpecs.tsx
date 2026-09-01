import { Link } from 'react-router-dom'
import { PRODUCT, PRODUCT_SPECS } from '../data/site'

export function ProductSpecs() {
  return (
    <section className="product-specs" id="specs">
      <div className="container">
        <div className="product-specs__header">
          <span className="section-label">Product Specifications</span>
          <h2 className="main-title">Clinical-grade dosing. Clean label standards.</h2>
          <p className="section-subtitle">
            {PRODUCT.brand} {PRODUCT.name} — formulated in the {PRODUCT.region} with transparent
            labeling and a professional multi-form magnesium profile.
          </p>
        </div>

        <div className="product-specs__grid">
          {PRODUCT_SPECS.map((spec) => (
            <article className="product-specs__card" key={spec.label}>
              <span className="product-specs__value">{spec.value}</span>
              <span className="product-specs__label">{spec.label}</span>
            </article>
          ))}
        </div>

        <div className="product-specs__cta">
          <Link className="home-button button" to={`/product/${PRODUCT.id}`}>
            View Product Details
          </Link>
        </div>
      </div>
    </section>
  )
}
